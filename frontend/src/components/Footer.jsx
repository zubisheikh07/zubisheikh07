import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-purple-900/20 to-transparent border-t border-purple-500/30">
      <div className="container section-padding">
        <div className="grid-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg font-bold text-xl neon-glow group-hover:scale-110 transition-all duration-300">
                F
              </div>
              <span className="futuristic-heading text-2xl font-bold">
                freewithzubee
              </span>
            </div>
            <p className="text-gray-300 mb-8 tech-text text-lg leading-relaxed">
              Professional photography and graphic design services in the digital age. 
              Creating memorable visuals that tell your story through the lens of
              creativity and futuristic artistic vision.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2 rounded-lg hover:bg-purple-500/20"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2 rounded-lg hover:bg-purple-500/20"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-purple-300 hover:text-purple-100 transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2 rounded-lg hover:bg-purple-500/20"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 tech-text text-purple-200 futuristic-heading">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-purple-200 transition-all duration-300 tech-text hover:translate-x-2 inline-block hover:drop-shadow-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-300 hover:text-purple-200 transition-all duration-300 tech-text hover:translate-x-2 inline-block hover:drop-shadow-md"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-purple-200 transition-all duration-300 tech-text hover:translate-x-2 inline-block hover:drop-shadow-md"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-purple-200 transition-all duration-300 tech-text hover:translate-x-2 inline-block hover:drop-shadow-md"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 tech-text text-purple-200 futuristic-heading">
              Connect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="bg-purple-600 text-white p-2 rounded-lg group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-110">
                  <Mail size={16} />
                </div>
                <span className="text-gray-300 tech-text group-hover:text-purple-200 transition-colors">
                  freewithzubee@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-purple-600 text-white p-2 rounded-lg group-hover:bg-purple-500 transition-all duration-300 group-hover:scale-110">
                  <Phone size={16} />
                </div>
                <span className="text-gray-300 tech-text group-hover:text-purple-200 transition-colors">
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 tech-text">
              © 2024 freewithzubee. All rights reserved.
            </p>
            <p className="text-purple-300 tech-text mt-4 md:mt-0">
              Built with passion for visual storytelling in the digital age.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;