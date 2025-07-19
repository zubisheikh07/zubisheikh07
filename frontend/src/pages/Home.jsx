import React from "react";
import { Link } from "react-router-dom";
import { Camera, Palette, Award, Users } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <h1 className="serif-heading hero-text mb-6 fade-in">
            Visual Stories That
            <span className="block text-black"> Speak Volumes</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto slide-up">
            Professional photography and graphic design services that capture
            moments, create brands, and bring your creative vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Link to="/portfolio" className="btn-primary">
              View My Work
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-2 items-center gap-12">
            <div>
              <h2 className="serif-heading section-header mb-6">
                About freewithzubee
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate visual storyteller specializing in photography
                and graphic design. With years of experience capturing life's
                precious moments and creating compelling visual identities, I
                bring creativity and professionalism to every project.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From wedding photography to brand design, poster creation to
                digital banners, I believe every project deserves attention to
                detail and artistic excellence.
              </p>
              <Link to="/contact" className="btn-primary">
                Let's Work Together
              </Link>
            </div>
            <div className="content-card">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <Camera size={64} className="text-gray-400" />
              </div>
              <div className="grid-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-black mb-1">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black mb-1">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              What I Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specializing in photography and graphic design services that
              elevate your brand and capture your story.
            </p>
          </div>

          <div className="grid-3">
            <div className="card text-center">
              <div className="mb-6">
                <Camera size={48} className="mx-auto text-black" />
              </div>
              <h3 className="subsection-header mb-4">Photography</h3>
              <p className="text-gray-600 mb-6">
                Professional photography services including portraits, events,
                weddings, and commercial shoots.
              </p>
              <Link to="/portfolio" className="btn-secondary">
                View Gallery
              </Link>
            </div>

            <div className="card text-center">
              <div className="mb-6">
                <Palette size={48} className="mx-auto text-black" />
              </div>
              <h3 className="subsection-header mb-4">Graphic Design</h3>
              <p className="text-gray-600 mb-6">
                Creative graphic design solutions for posters, banners, logos,
                and brand identity development.
              </p>
              <Link to="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>

            <div className="card text-center">
              <div className="mb-6">
                <Award size={48} className="mx-auto text-black" />
              </div>
              <h3 className="subsection-header mb-4">Custom Projects</h3>
              <p className="text-gray-600 mb-6">
                Tailored visual solutions for your unique needs, from concept
                to final delivery.
              </p>
              <Link to="/contact" className="btn-secondary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="serif-heading section-header mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into my recent photography and design projects
            </p>
          </div>

          <div className="grid-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Camera size={32} className="text-gray-400" />
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Project {item}</h4>
                <p className="text-gray-600 text-sm">
                  {item % 2 === 0 ? "Photography" : "Graphic Design"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container text-center">
          <h2 className="serif-heading section-header mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's collaborate on your next photography session or design project.
            Get in touch to discuss your ideas and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Browse Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;