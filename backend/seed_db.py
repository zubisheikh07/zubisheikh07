import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ['DB_NAME']

async def seed_database():
    """Seed the database with initial portfolio data"""
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print("🌱 Seeding database with portfolio data...")
    
    # Portfolio items data
    portfolio_items = [
        # Photography Items
        {
            "id": 1,
            "title": "Sunset Portrait Session",
            "description": "Golden hour portrait photography capturing natural beauty",
            "category": "photography",
            "type": "Portrait Photography",
            "year": "2024",
            "client": "Individual Client",
            "location": "Local Park",
            "featured": True
        },
        {
            "id": 2,
            "title": "Corporate Event Coverage",
            "description": "Professional event photography for annual company meeting",
            "category": "photography",
            "type": "Event Photography", 
            "year": "2024",
            "client": "Tech Corp",
            "location": "Conference Center",
            "featured": False
        },
        {
            "id": 3,
            "title": "Wedding Day Memories",
            "description": "Complete wedding day coverage from ceremony to reception",
            "category": "photography",
            "type": "Wedding Photography",
            "year": "2024",
            "client": "Private Client",
            "location": "Garden Venue",
            "featured": True
        },
        {
            "id": 4,
            "title": "Product Photography",
            "description": "Commercial product shots for e-commerce catalog",
            "category": "photography",
            "type": "Commercial Photography",
            "year": "2024",
            "client": "Retail Brand",
            "location": "Studio",
            "featured": False
        },
        {
            "id": 5,
            "title": "Nature Landscape",
            "description": "Capturing the beauty of natural landscapes at dawn",
            "category": "photography",
            "type": "Landscape Photography",
            "year": "2024",
            "client": "Stock Photography",
            "location": "Mountain Range",
            "featured": False
        },
        {
            "id": 6,
            "title": "Family Portrait Session",
            "description": "Warm family portraits in comfortable home setting",
            "category": "photography",
            "type": "Portrait Photography",
            "year": "2024",
            "client": "Johnson Family",
            "location": "Client Home",
            "featured": False
        },

        # Graphic Design Items
        {
            "id": 7,
            "title": "Tech Startup Brand Identity",
            "description": "Complete brand identity design including logo and guidelines",
            "category": "graphic-design",
            "type": "Brand Identity",
            "year": "2024",
            "client": "InnovateHub",
            "deliverables": "Logo, Business Cards, Brand Guidelines",
            "featured": True
        },
        {
            "id": 8,
            "title": "Music Festival Poster",
            "description": "Vibrant poster design for annual summer music festival",
            "category": "graphic-design", 
            "type": "Poster Design",
            "year": "2024",
            "client": "SoundWave Festival",
            "deliverables": "Print Poster, Digital Versions",
            "featured": True
        },
        {
            "id": 9,
            "title": "Restaurant Menu Design",
            "description": "Modern menu design with elegant typography and layout",
            "category": "graphic-design",
            "type": "Menu Design", 
            "year": "2024",
            "client": "Bella Vista Restaurant",
            "deliverables": "Menu Cards, Digital Menu",
            "featured": False
        },
        {
            "id": 10,
            "title": "Social Media Banner Pack",
            "description": "Complete social media banner set for Instagram and Facebook",
            "category": "graphic-design",
            "type": "Social Media Design",
            "year": "2024", 
            "client": "Fashion Boutique",
            "deliverables": "Instagram Posts, Facebook Covers, Stories",
            "featured": False
        },
        {
            "id": 11,
            "title": "Corporate Presentation",
            "description": "Professional PowerPoint template for business presentations",
            "category": "graphic-design",
            "type": "Presentation Design",
            "year": "2024",
            "client": "Consulting Firm",
            "deliverables": "PowerPoint Template, Graphics Pack",
            "featured": False
        },
        {
            "id": 12,
            "title": "Event Promotional Materials",
            "description": "Complete promotional package for charity fundraising event",
            "category": "graphic-design",
            "type": "Event Design",
            "year": "2024",
            "client": "Local Charity",
            "deliverables": "Flyers, Banners, Digital Ads",
            "featured": False
        },
        {
            "id": 13,
            "title": "Book Cover Design",
            "description": "Eye-catching book cover design for fiction novel",
            "category": "graphic-design",
            "type": "Book Design",
            "year": "2024",
            "client": "Independent Author",
            "deliverables": "Print Cover, eBook Cover, Spine Design",
            "featured": False
        },
        {
            "id": 14,
            "title": "Business Card Collection",
            "description": "Professional business card designs for various industries",
            "category": "graphic-design",
            "type": "Business Card Design",
            "year": "2024",
            "client": "Multiple Clients",
            "deliverables": "Print-Ready Cards, Digital Versions",
            "featured": False
        },
        {
            "id": 15,
            "title": "Website Header Graphics",
            "description": "Custom header graphics and banners for business website",
            "category": "graphic-design",
            "type": "Web Design",
            "year": "2024",
            "client": "Local Business",
            "deliverables": "Web Banners, Icons, Graphics",
            "featured": False
        },
        {
            "id": 16,
            "title": "Wedding Invitation Suite",
            "description": "Elegant wedding invitation design with RSVP cards",
            "category": "graphic-design",
            "type": "Invitation Design",
            "year": "2024",
            "client": "Private Client",
            "deliverables": "Invitations, RSVP Cards, Thank You Cards",
            "featured": False
        }
    ]
    
    # Services data
    services = [
        {
            "id": 1,
            "name": "Photography Services",
            "icon": "Camera",
            "description": "Professional photography services for all occasions including portraits, events, weddings, and commercial shoots. Capturing your precious moments with artistic vision and technical excellence.",
            "features": [
                "Portrait and headshot photography",
                "Event and wedding coverage",
                "Commercial and product photography", 
                "Landscape and nature photography",
                "Professional photo editing and retouching",
                "High-resolution digital delivery"
            ],
            "price": "$300",
            "duration": "2-4 hours",
            "deliverables": "20-50 edited photos",
            "active": True
        },
        {
            "id": 2,
            "name": "Graphic Design Services",  
            "icon": "Palette",
            "description": "Creative graphic design solutions for your business and personal needs. From brand identity to marketing materials, bringing your ideas to life through visual storytelling.",
            "features": [
                "Logo and brand identity design",
                "Business card and stationery design",
                "Brochure and flyer creation", 
                "Social media graphics and templates",
                "Presentation design and templates",
                "Print-ready file preparation"
            ],
            "price": "$200", 
            "duration": "3-5 days",
            "deliverables": "Multiple design concepts and revisions",
            "active": True
        },
        {
            "id": 3,
            "name": "Poster Design",
            "icon": "FileText", 
            "description": "Eye-catching poster designs for events, promotions, and artistic expression. Custom designs that grab attention and communicate your message effectively.",
            "features": [
                "Event and promotional posters",
                "Artistic and decorative posters",
                "Concert and festival posters",
                "Business promotional materials",
                "Custom sizing and formatting", 
                "Print and digital versions"
            ],
            "price": "$150",
            "duration": "2-3 days", 
            "deliverables": "Print-ready poster files",
            "active": True
        },
        {
            "id": 4,
            "name": "Banner & Digital Design",
            "icon": "Image",
            "description": "Professional banner design for digital and print applications. Perfect for websites, social media, events, and promotional campaigns.",
            "features": [
                "Web banners and headers",
                "Social media cover images",
                "Trade show and event banners", 
                "Email newsletter headers",
                "Display advertising banners",
                "Multiple size variations"
            ],
            "price": "$120",
            "duration": "1-2 days",
            "deliverables": "Various banner sizes and formats",
            "active": True
        }
    ]
    
    # Testimonials data
    testimonials = [
        {
            "id": 1,
            "name": "Sarah Johnson",
            "role": "Wedding Client",
            "content": "freewithzubee captured our wedding day perfectly! The photos are absolutely stunning and tell the story of our special day beautifully. Professional, creative, and a joy to work with.",
            "rating": 5,
            "project": "Wedding Photography",
            "approved": True
        },
        {
            "id": 2, 
            "name": "Mike Chen",
            "role": "Business Owner",
            "content": "The logo and brand identity design exceeded all expectations. freewithzubee understood our vision completely and delivered a professional, modern design that represents our company perfectly.",
            "rating": 5,
            "project": "Brand Identity Design",
            "approved": True
        },
        {
            "id": 3,
            "name": "Emily Rodriguez", 
            "role": "Event Organizer",
            "content": "Amazing poster design for our music festival! The design was vibrant, engaging, and perfectly captured the energy of our event. We received so many compliments on the artwork.",
            "rating": 5,
            "project": "Event Poster Design",
            "approved": True
        },
        {
            "id": 4,
            "name": "David Thompson",
            "role": "Marketing Manager",
            "content": "Professional headshots that look fantastic! Great attention to detail and made the whole session comfortable and enjoyable. The final images were delivered quickly and look amazing.",
            "rating": 5,
            "project": "Corporate Photography",
            "approved": True
        },
        {
            "id": 5,
            "name": "Lisa Park",
            "role": "Small Business Owner", 
            "content": "The social media banners and graphics have really elevated our online presence. Creative, professional, and exactly what we needed to stand out in our industry.",
            "rating": 5,
            "project": "Social Media Design",
            "approved": True
        }
    ]
    
    try:
        # Clear existing collections
        await db.portfolio.delete_many({})
        await db.services.delete_many({})
        await db.testimonials.delete_many({})
        print("✅ Cleared existing collections")
        
        # Insert portfolio items
        if portfolio_items:
            await db.portfolio.insert_many(portfolio_items)
            print(f"✅ Inserted {len(portfolio_items)} portfolio items")
        
        # Insert services
        if services:
            await db.services.insert_many(services)
            print(f"✅ Inserted {len(services)} services")
            
        # Insert testimonials
        if testimonials:
            await db.testimonials.insert_many(testimonials)
            print(f"✅ Inserted {len(testimonials)} testimonials")
            
        print("🎉 Database seeding completed successfully!")
        
    except Exception as e:
        print(f"❌ Error seeding database: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())