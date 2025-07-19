import React from "react";
import { Link } from "react-router-dom";
import { Camera, Palette, Award, Users, Zap, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-black via-purple-900/30 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container text-center relative z-10">
          <h1 className="serif-heading hero-text mb-8 fade-in">
            <span className="glitch-text" data-text="VISUAL STORIES">VISUAL STORIES</span>
            <span className="block mt-4">That Transcend Reality</span>
          </h1>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto slide-up tech-text leading-relaxed">
            Professional photography and graphic design services that capture
            moments, create brands, and bring your creative vision into the
            <span className="text-purple-300 font-bold"> digital dimension</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up">
            <Link to="/portfolio" className="btn-primary group">
              <Sparkles className="inline mr-2" size={20} />
              Explore My Universe
            </Link>
            <Link to="/services" className="btn-secondary group">
              <Zap className="inline mr-2" size={20} />
              Discover Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="container">
          <div className="grid-2 items-center gap-16">
            <div className="cyber-slide-in">
              <h2 className="serif-heading section-header mb-8 futuristic-heading">
                About freewithzubee
              </h2>
              <p className="text-lg text-purple-100 mb-8 tech-text leading-relaxed">
                I'm a digital visual storyteller specializing in photography
                and graphic design. With years of experience capturing life's
                precious moments and creating compelling visual identities, I
                bring <span className="text-purple-300 font-bold">creativity and innovation</span> to every project.
              </p>
              <p className="text-lg text-purple-100 mb-10 tech-text leading-relaxed">
                From wedding photography to brand design, poster creation to
                digital banners, I believe every project deserves attention to
                detail and <span className="text-purple-300 font-bold">futuristic excellence</span>.
              </p>
              <Link to="/contact" className="btn-primary">
                <Zap className="inline mr-2" size={18} />
                Let's Create Together
              </Link>
            </div>
            <div className="content-card hologram-effect">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-purple-700/30 rounded-lg mb-8 flex items-center justify-center border border-purple-400/30">
                <Camera size={80} className="text-purple-300 animate-pulse" />
              </div>
              <div className="grid-2 gap-6 text-center">
                <div className="p-4 rounded-lg bg-purple-600/20 border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">150+</div>
                  <div className="text-purple-300 tech-text">Projects Completed</div>
                </div>
                <div className="p-4 rounded-lg bg-purple-600/20 border border-purple-400/30">
                  <div className="text-3xl font-bold text-purple-200 mb-2 futuristic-heading">5+</div>
                  <div className="text-purple-300 tech-text">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="serif-heading section-header mb-6 futuristic-heading">
              Digital Mastery Services
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto tech-text">
              Specializing in photography and graphic design services that
              elevate your brand and capture your story in the 
              <span className="text-purple-300 font-bold"> digital realm</span>.
            </p>
          </div>

          <div className="grid-3">
            <div className="card text-center group">
              <div className="mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300 neon-glow">
                  <Camera size={40} className="text-white" />
                </div>
              </div>
              <h3 className="subsection-header mb-6 tech-text">Photography</h3>
              <p className="text-purple-100 mb-8 tech-text">
                Professional photography services including portraits, events,
                weddings, and commercial shoots with digital enhancement.
              </p>
              <Link to="/portfolio" className="btn-secondary">
                <Sparkles className="inline mr-2" size={16} />
                View Gallery
              </Link>
            </div>

            <div className="card text-center group">
              <div className="mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300 neon-glow">
                  <Palette size={40} className="text-white" />
                </div>
              </div>
              <h3 className="subsection-header mb-6 tech-text">Graphic Design</h3>
              <p className="text-purple-100 mb-8 tech-text">
                Creative graphic design solutions for posters, banners, logos,
                and brand identity development in the digital age.
              </p>
              <Link to="/services" className="btn-secondary">
                <Zap className="inline mr-2" size={16} />
                Learn More
              </Link>
            </div>

            <div className="card text-center group">
              <div className="mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300 neon-glow">
                  <Award size={40} className="text-white" />
                </div>
              </div>
              <h3 className="subsection-header mb-6 tech-text">Custom Projects</h3>
              <p className="text-purple-100 mb-8 tech-text">
                Tailored visual solutions for your unique needs, from concept
                to final delivery with cutting-edge techniques.
              </p>
              <Link to="/contact" className="btn-secondary">
                <Sparkles className="inline mr-2" size={16} />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="serif-heading section-header mb-6 futuristic-heading">
              Featured Creations
            </h2>
            <p className="text-xl text-purple-100 tech-text">
              A glimpse into my recent photography and design projects
            </p>
          </div>

          <div className="grid-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-purple-700/30 rounded-lg overflow-hidden mb-4 border border-purple-400/30 relative">
                  <div className="w-full h-full flex items-center justify-center group-hover:bg-purple-600/30 transition-all duration-500">
                    <Camera size={32} className="text-purple-300 group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <div className="bg-purple-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white tech-text">
                      View Project
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-purple-200 tech-text">Project {item}</h4>
                <p className="text-purple-300 text-sm tech-text">
                  {item % 2 === 0 ? "Photography" : "Graphic Design"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn-primary">
              <Sparkles className="inline mr-2" size={20} />
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-black to-purple-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <div className="container text-center relative z-10">
          <h2 className="serif-heading section-header mb-8 futuristic-heading">
            Ready to Create Digital Magic?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-100 tech-text">
            Let's collaborate on your next photography session or design project.
            Get in touch to discuss your ideas and bring them to life in the
            <span className="text-purple-300 font-bold"> digital dimension</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-purple-400 hover:to-purple-600 transition-all duration-300 hover:scale-105 neon-glow tech-text"
            >
              <Zap className="inline mr-2" size={20} />
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-purple-400 text-purple-200 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/20 hover:text-white transition-all duration-300 hover:scale-105 tech-text"
            >
              <Sparkles className="inline mr-2" size={20} />
              Browse Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;