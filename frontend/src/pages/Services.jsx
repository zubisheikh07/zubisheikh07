import React from "react";
import { Camera, Palette, FileText, Image, Users, Clock, CheckCircle } from "lucide-react";
import { mockServicesData } from "../data/mock";

const Services = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Professional Quality",
      description: "High-quality output that meets industry standards"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Projects completed within agreed timelines"
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "Working closely with clients throughout the process"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <h1 className="serif-heading hero-text mb-6 fade-in">
            My Services
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Professional photography and graphic design services tailored to
            bring your creative vision to life with exceptional quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2 gap-8">
            {mockServicesData.map((service, index) => {
              const IconComponent = service.icon === "Camera" ? Camera : 
                                  service.icon === "Palette" ? Palette :
                                  service.icon === "FileText" ? FileText : Image;
              
              return (
                <div 
                  key={service.id} 
                  className="content-card hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-6">
                    <IconComponent size={48} className="text-black" />
                  </div>
                  <h3 className="serif-heading text-2xl mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-black">{service.price}</span>
                      <span className="text-gray-600 ml-1">starting from</span>
                    </div>
                    <a href="/contact" className="btn-primary">
                      Get Quote
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              My Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure every project meets your expectations
              and delivers exceptional results.
            </p>
          </div>

          <div className="grid-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your vision, requirements, and project goals"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Creating detailed project timeline and creative direction"
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional photo shoot or design creation process"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final delivery of high-quality, edited work"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              Why Choose freewithzubee?
            </h2>
          </div>

          <div className="grid-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="mb-6">
                    <IconComponent size={48} className="mx-auto text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              Popular Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our most requested service combinations
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                name: "Starter Package",
                price: "$299",
                description: "Perfect for small projects and individual needs",
                features: [
                  "1-2 hours session/consultation",
                  "Up to 20 edited photos/designs",
                  "Digital delivery",
                  "1 revision round"
                ]
              },
              {
                name: "Professional Package",
                price: "$599",
                popular: true,
                description: "Comprehensive solution for business needs",
                features: [
                  "Half-day session/project",
                  "Up to 50 edited photos/designs",
                  "Print-ready files",
                  "2 revision rounds",
                  "Rush delivery option"
                ]
              },
              {
                name: "Premium Package",
                price: "$999",
                description: "Complete creative solution for major projects",
                features: [
                  "Full-day coverage/project",
                  "100+ edited photos/designs",
                  "All file formats included",
                  "Unlimited revisions",
                  "Priority support",
                  "Extended licensing"
                ]
              }
            ].map((pkg, index) => (
              <div 
                key={index} 
                className={`content-card text-center relative ${
                  pkg.popular ? "ring-2 ring-black" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-black mb-2">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={pkg.popular ? "btn-primary w-full" : "btn-secondary w-full"}>
                  Choose Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="serif-heading section-header mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss your requirements and create something amazing together.
            Get in touch for a personalized quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;