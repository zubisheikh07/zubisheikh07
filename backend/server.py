from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Portfolio Models
class PortfolioItem(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    category: str  # 'photography' | 'graphic-design'
    type: str
    year: str
    client: Optional[str] = None
    location: Optional[str] = None
    deliverables: Optional[str] = None
    featured: bool = False

class PortfolioItemDB(PortfolioItem):
    _id: Optional[str] = None
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

# Service Models  
class Service(BaseModel):
    id: Optional[int] = None
    name: str
    icon: str
    description: str
    features: List[str]
    price: str
    duration: Optional[str] = None
    deliverables: Optional[str] = None

class ServiceDB(Service):
    _id: Optional[str] = None
    active: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

# Contact Models
class ContactSubmission(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    service: str
    projectType: Optional[str] = None
    budget: Optional[str] = None
    timeline: Optional[str] = None
    message: str

class ContactSubmissionDB(ContactSubmission):
    _id: Optional[str] = None
    status: str = "new"
    submittedAt: datetime = Field(default_factory=datetime.utcnow)
    respondedAt: Optional[datetime] = None

# Testimonial Models
class Testimonial(BaseModel):
    id: Optional[int] = None
    name: str
    role: str
    content: str
    rating: int
    project: str

class TestimonialDB(Testimonial):
    _id: Optional[str] = None
    approved: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "freewithzubee Portfolio API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Portfolio Endpoints
@api_router.get("/portfolio")
async def get_portfolio(category: Optional[str] = None):
    """Get all portfolio items, optionally filtered by category"""
    try:
        filter_query = {}
        if category and category != "all":
            filter_query["category"] = category
            
        portfolio_items = await db.portfolio.find(filter_query).to_list(1000)
        
        # Convert ObjectId to string and format response
        for item in portfolio_items:
            if "_id" in item:
                item["_id"] = str(item["_id"])
                
        return {
            "success": True,
            "data": portfolio_items,
            "message": "Portfolio items retrieved successfully"
        }
    except Exception as e:
        logging.error(f"Error fetching portfolio: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch portfolio items")

@api_router.get("/portfolio/{item_id}")
async def get_portfolio_item(item_id: int):
    """Get a specific portfolio item by ID"""
    try:
        portfolio_item = await db.portfolio.find_one({"id": item_id})
        
        if not portfolio_item:
            raise HTTPException(status_code=404, detail="Portfolio item not found")
            
        if "_id" in portfolio_item:
            portfolio_item["_id"] = str(portfolio_item["_id"])
            
        return {
            "success": True,
            "data": portfolio_item,
            "message": "Portfolio item retrieved successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error fetching portfolio item: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch portfolio item")

# Services Endpoints
@api_router.get("/services")
async def get_services():
    """Get all active services"""
    try:
        services = await db.services.find({"active": True}).to_list(1000)
        
        # Convert ObjectId to string
        for service in services:
            if "_id" in service:
                service["_id"] = str(service["_id"])
                
        return {
            "success": True,
            "data": services,
            "message": "Services retrieved successfully"
        }
    except Exception as e:
        logging.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch services")

# Contact Endpoints
@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactSubmission):
    """Submit a contact form"""
    try:
        # Create database entry
        contact_db = ContactSubmissionDB(**contact_data.dict())
        contact_dict = contact_db.dict()
        
        # Insert into database
        result = await db.contact_submissions.insert_one(contact_dict)
        contact_dict["_id"] = str(result.inserted_id)
        
        return {
            "success": True,
            "data": {"id": str(result.inserted_id)},
            "message": "Contact form submitted successfully! I'll get back to you within 24 hours."
        }
    except Exception as e:
        logging.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact")
async def get_contact_submissions():
    """Get all contact submissions (admin endpoint)"""
    try:
        submissions = await db.contact_submissions.find().sort("submittedAt", -1).to_list(1000)
        
        # Convert ObjectId to string
        for submission in submissions:
            if "_id" in submission:
                submission["_id"] = str(submission["_id"])
                
        return {
            "success": True,
            "data": submissions,
            "message": "Contact submissions retrieved successfully"
        }
    except Exception as e:
        logging.error(f"Error fetching contact submissions: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")

# Testimonials Endpoints
@api_router.get("/testimonials")
async def get_testimonials():
    """Get all approved testimonials"""
    try:
        testimonials = await db.testimonials.find({"approved": True}).to_list(1000)
        
        # Convert ObjectId to string
        for testimonial in testimonials:
            if "_id" in testimonial:
                testimonial["_id"] = str(testimonial["_id"])
                
        return {
            "success": True,
            "data": testimonials,
            "message": "Testimonials retrieved successfully"
        }
    except Exception as e:
        logging.error(f"Error fetching testimonials: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch testimonials")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
