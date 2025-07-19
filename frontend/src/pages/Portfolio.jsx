import React, { useState, useEffect } from "react";
import { Camera, Palette, Filter, Loader, AlertCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: "all", name: "All Work", icon: Filter },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "graphic-design", name: "Graphic Design", icon: Palette },
  ];

  const fetchPortfolioItems = async (category = "all") => {
    try {
      setLoading(true);
      setError(null);
      const params = category !== "all" ? { category } : {};
      const response = await axios.get(`${API}/portfolio`, { params });
      
      if (response.data.success) {
        setPortfolioItems(response.data.data);
      } else {
        setError("Failed to fetch portfolio items");
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      setError("Unable to load portfolio. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioItems(activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-black">
        <div className="text-center">
          <Loader className="animate-spin text-purple-400 mx-auto mb-4" size={48} />
          <p className="text-purple-200 tech-text text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-black">
        <div className="text-center">
          <AlertCircle className="text-red-400 mx-auto mb-4" size={48} />
          <p className="text-purple-200 tech-text text-lg mb-4">{error}</p>
          <button 
            onClick={() => fetchPortfolioItems(activeCategory)}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-purple-900/30 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container text-center relative z-10">
          <h1 className="serif-heading hero-text mb-8 fade-in futuristic-heading">
            My Portfolio
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto tech-text">
            A collection of my photography and graphic design work, showcasing
            creativity, technical skill, and artistic vision in the digital realm.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 backdrop-blur-md bg-black/60 sticky top-20 z-40 border-y border-purple-500/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all tech-text ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white neon-glow scale-105"
                      : "bg-purple-900/30 text-purple-200 hover:bg-purple-700/40 hover:scale-105 border border-purple-500/30"
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container">
          {portfolioItems.length > 0 ? (
            <div className="grid-4">
              {portfolioItems.map((item, index) => (
                <div 
                  key={item.id || item._id} 
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-purple-700/30 rounded-lg overflow-hidden mb-4 relative border border-purple-400/30">
                    <div className="w-full h-full flex items-center justify-center group-hover:bg-purple-600/30 transition-all duration-500">
                      {item.category === "photography" ? (
                        <Camera size={32} className="text-purple-300 group-hover:scale-125 transition-all duration-300" />
                      ) : (
                        <Palette size={32} className="text-purple-300 group-hover:scale-125 transition-all duration-300" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-4">
                      <div className="bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white tech-text neon-glow">
                        View Details
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-purple-100 tech-text group-hover:text-purple-200 transition-colors">{item.title}</h3>
                    <p className="text-purple-300 tech-text leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full border border-purple-400/30 tech-text">
                        {item.category === "photography" ? "Photography" : "Graphic Design"}
                      </span>
                      <span className="text-sm text-purple-400 tech-text">{item.year}</span>
                    </div>
                    {item.client && (
                      <div className="text-xs text-purple-400 tech-text">
                        Client: {item.client}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera size={48} className="mx-auto text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-purple-200 tech-text">No items found</h3>
              <p className="text-purple-300 tech-text">
                Try selecting a different category to view more work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section-padding bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="container">
          <div className="grid-4 gap-6">
            <div className="content-card text-center">
              <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">150+</div>
              <div className="text-purple-300 tech-text">Projects Completed</div>
            </div>
            <div className="content-card text-center">
              <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">50+</div>
              <div className="text-purple-300 tech-text">Happy Clients</div>
            </div>
            <div className="content-card text-center">
              <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">5+</div>
              <div className="text-purple-300 tech-text">Years Experience</div>
            </div>
            <div className="content-card text-center">
              <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">24/7</div>
              <div className="text-purple-300 tech-text">Creative Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-black to-purple-900">
        <div className="container text-center">
          <h2 className="serif-heading section-header mb-8 futuristic-heading">
            Like What You See?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-100 tech-text">
            Let's discuss your next project and bring your creative vision to life
            with professional photography and design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-purple-400 hover:to-purple-600 transition-all duration-300 hover:scale-105 neon-glow tech-text"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border-2 border-purple-400 text-purple-200 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/20 hover:text-white transition-all duration-300 hover:scale-105 tech-text"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;