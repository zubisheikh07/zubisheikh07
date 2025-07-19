import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-purple-500/30 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg font-bold text-xl neon-glow group-hover:scale-110 transition-all duration-300">
              F
            </div>
            <span className="futuristic-heading text-2xl font-bold">
              freewithzubee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`tech-text font-medium text-lg transition-all duration-300 hover:text-purple-300 hover:scale-110 ${
                  location.pathname === item.href
                    ? "text-purple-300 border-b-2 border-purple-400 pb-1 glow"
                    : "text-white/90"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-6">
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-purple-300 transition-colors hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-purple-500/30 bg-black/90 backdrop-blur-lg">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`tech-text font-medium text-lg transition-colors hover:text-purple-300 ${
                    location.pathname === item.href
                      ? "text-purple-300 font-bold"
                      : "text-white/90"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary inline-block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;