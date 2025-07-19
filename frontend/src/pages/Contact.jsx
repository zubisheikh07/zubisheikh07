import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      projectType: "",
      budget: "",
      message: "",
      timeline: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div className="text-center">
          <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
          <h2 className="serif-heading text-3xl mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700">
            Your message has been sent successfully. I'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <h1 className="serif-heading hero-text mb-6 fade-in">
            Let's Create Together
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to start your next photography or design project? 
            Get in touch and let's discuss how I can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2 gap-12">
            {/* Contact Form */}
            <div className="content-card">
              <h2 className="serif-heading text-2xl mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="photography">Photography</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="poster-design">Poster Design</option>
                      <option value="banner-design">Banner Design</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="custom-project">Custom Project</option>
                    </select>
                  </div>
                </div>

                <div className="grid-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                      <option value="event">Event</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1000</option>
                      <option value="1000-2500">$1000 - $2500</option>
                      <option value="2500-5000">$2500 - $5000</option>
                      <option value="over-5000">Over $5000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="asap">ASAP</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project, vision, specific requirements, and any other details that would help me understand your needs..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card">
                <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black text-white p-3 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">freewithzubee@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-black text-white p-3 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-black text-white p-3 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Available for projects worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock size={24} className="text-black" />
                  <h3 className="font-bold text-lg">Response Time</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your message or call directly.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Business Hours:</strong> Mon-Fri 9AM-6PM EST<br />
                  <strong>Weekend:</strong> Limited availability for urgent requests
                </div>
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="font-bold text-lg mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Follow me on social media to see my latest work and behind-the-scenes content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about my services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "For photography sessions, I recommend booking at least 2-3 weeks in advance. For design projects, timing can be more flexible depending on complexity."
              },
              {
                question: "Do you travel for photography sessions?",
                answer: "Yes! I'm available for travel within the region, and for destination projects worldwide. Travel costs will be discussed during consultation."
              },
              {
                question: "What's included in your design packages?",
                answer: "All packages include initial consultation, design concepts, revisions, and final files. Specific inclusions vary by package - check the Services page for details."
              },
              {
                question: "Can I see more examples of your work?",
                answer: "Absolutely! Beyond the portfolio on this site, I can share additional examples specific to your project type during our consultation."
              },
              {
                question: "What if I need changes after project completion?",
                answer: "Minor adjustments within 30 days are usually complimentary. Major changes or additional work can be handled as a separate project."
              }
            ].map((faq, index) => (
              <div key={index} className="content-card">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;