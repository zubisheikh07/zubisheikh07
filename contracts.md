# freewithzubee Portfolio - API Contracts

## Overview
This document outlines the API contracts for integrating the frontend portfolio website with the backend services.

## Mock Data Integration
Currently using mock data from `/frontend/src/data/mock.js`:
- Portfolio items (16 items across photography and graphic design)
- Service offerings (4 main services)
- Testimonials (5 client testimonials)
- Contact form submissions (currently frontend-only)

## Backend Endpoints to Implement

### 1. Portfolio Management
**GET /api/portfolio**
- Returns all portfolio items
- Supports filtering by category (`photography`, `graphic-design`)
- Response format matches mockPortfolioData structure

**GET /api/portfolio/:id**
- Returns single portfolio item
- Used for detailed portfolio views

**POST /api/portfolio** (Admin only - future enhancement)
- Create new portfolio item
- Requires authentication

### 2. Services Management
**GET /api/services**
- Returns all available services
- Response format matches mockServicesData structure

### 3. Contact Form
**POST /api/contact**
- Handles contact form submissions
- Required fields: name, email, service, message
- Optional fields: phone, projectType, budget, timeline
- Sends email notification (future enhancement)
- Stores submission in database

**GET /api/contact** (Admin only - future enhancement)
- Returns all contact submissions

### 4. Testimonials
**GET /api/testimonials**
- Returns client testimonials
- Used for displaying social proof

## Database Schema

### Portfolio Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String, // 'photography' | 'graphic-design'
  type: String,
  year: String,
  client: String,
  location: String (for photography),
  deliverables: String (for graphic design),
  imageUrl: String, // Future: actual image storage
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Services Collection
```javascript
{
  _id: ObjectId,
  name: String,
  icon: String,
  description: String,
  features: [String],
  price: String,
  duration: String,
  deliverables: String,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact Submissions Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  service: String,
  projectType: String,
  budget: String,
  timeline: String,
  message: String,
  status: String, // 'new', 'contacted', 'completed'
  submittedAt: Date,
  respondedAt: Date
}
```

### Testimonials Collection
```javascript
{
  _id: ObjectId,
  name: String,
  role: String,
  content: String,
  rating: Number,
  project: String,
  approved: Boolean,
  createdAt: Date
}
```

## Frontend Integration Points

### Replace Mock Data Calls
1. **Portfolio.jsx**: Replace `mockPortfolioData` with API call to `/api/portfolio`
2. **Services.jsx**: Replace `mockServicesData` with API call to `/api/services`
3. **Home.jsx**: Use API calls for featured work and testimonials
4. **Contact.jsx**: Update form submission to POST to `/api/contact`

### Error Handling
- Implement loading states for API calls
- Handle network errors gracefully
- Show user-friendly error messages
- Fallback to cached/default content when possible

### Data Fetching Strategy
- Use React hooks (useState, useEffect) for data management
- Implement loading spinners during API calls
- Cache frequently accessed data (services, portfolio)
- Implement proper error boundaries

## Authentication (Future Enhancement)
- Admin authentication for portfolio/service management
- Protected routes for admin panel
- JWT token-based authentication

## File Upload (Future Enhancement)
- Portfolio image upload functionality
- Multiple image support for projects
- Image optimization and storage
- CDN integration for fast loading

## Email Integration (Future Enhancement)
- Send confirmation emails to form submissions
- Admin notification emails for new contacts
- Newsletter signup functionality

## API Response Formats

### Success Response
```javascript
{
  success: true,
  data: [...],
  message: "Operation completed successfully"
}
```

### Error Response
```javascript
{
  success: false,
  error: "Error description",
  code: "ERROR_CODE"
}
```

## Next Steps
1. Implement backend models and API endpoints
2. Seed database with mock data
3. Update frontend to use API calls
4. Test all integration points
5. Implement error handling and loading states