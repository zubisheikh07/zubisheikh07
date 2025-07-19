import React, { useState } from "react";
import { Camera, Palette, Filter } from "lucide-react";
import { mockPortfolioData } from "../data/mock";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work", icon: Filter },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "graphic-design", name: "Graphic Design", icon: Palette },
  ];

  const filteredItems = mockPortfolioData.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <h1 className="serif-heading hero-text mb-6 fade-in">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            A collection of my photography and graphic design work, showcasing
            creativity, technical skill, and artistic vision.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          <div className="grid-4">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                  <div className="w-full h-full flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    {item.category === "photography" ? (
                      <Camera size={32} className="text-gray-400" />
                    ) : (
                      <Palette size={32} className="text-gray-400" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {item.category === "photography" ? "Photography" : "Graphic Design"}
                    </span>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-600">
                Try selecting a different category to view more work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-4 text-center">
            <div className="content-card">
              <div className="text-3xl font-bold text-black mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="content-card">
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="content-card">
              <div className="text-3xl font-bold text-black mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="content-card">
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">Creative Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="serif-heading section-header mb-6">
            Like What You See?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss your next project and bring your creative vision to life
            with professional photography and design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
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