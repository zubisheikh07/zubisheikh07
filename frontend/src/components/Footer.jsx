import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container section-padding">
        <div className="grid-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-black px-3 py-2 rounded-lg font-bold text-xl">
                F
              </div>
              <span className="serif-heading text-2xl font-bold">
                freewithzubee
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional photography and graphic design services. Creating
              memorable visuals that tell your story through the lens of
              creativity and artistic vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">freewithzubee@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 freewithzubee. All rights reserved. | Built with passion for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;