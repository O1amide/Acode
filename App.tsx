import React, { useState, useEffect } from 'react';
import { Star, Phone, Mail, Instagram, ChevronLeft, ChevronRight, Check, MessageCircle } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Adaora Okwu",
      event: "Traditional Wedding",
      quote: "Amaré made my wedding unforgettable — it felt like a movie. Every detail was perfection, from the entrance to the last dance. They understand luxury.",
      rating: 5
    },
    {
      name: "Kemi Adeleke",
      event: "50th Birthday Celebration",
      quote: "I've never seen my guests so impressed. Amaré transformed my vision into something beyond my dreams. Pure artistry and flawless execution.",
      rating: 5
    },
    {
      name: "Chidi Okafor",
      event: "Corporate Gala",
      quote: "Our company's reputation was elevated by Amaré's impeccable event management. They delivered sophistication that matched our brand perfectly.",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Luxury Weddings",
      description: "From intimate ceremonies to grand celebrations, we craft wedding experiences that tell your unique love story.",
      image: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Milestone Birthdays",
      description: "Celebrate life's precious moments with events that reflect your personality and create lasting memories.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Corporate Events",
      description: "Elevate your business gatherings with professional elegance that impresses clients and inspires teams.",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Traditional Ceremonies",
      description: "Honor cultural heritage with authentic celebrations that blend tradition with contemporary sophistication.",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const packages = [
    {
      name: "Basic",
      subtitle: "Essential Elegance",
      features: ["Event Coordination", "Basic Decor Package", "Vendor Management", "Day-of Coordination"]
    },
    {
      name: "Executive",
      subtitle: "Premium Experience",
      features: ["Full Event Planning", "Luxury Decor & Florals", "VIP Vendor Network", "Photography Coordination", "Guest Management"]
    },
    {
      name: "Royal",
      subtitle: "Exclusive Luxury",
      features: ["White-Glove Service", "Bespoke Design", "Celebrity Vendor Access", "Personal Event Concierge", "Post-Event Documentation", "Unlimited Consultations"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const whatsappMessage = encodeURIComponent("Hi Amaré Events, I'd love to book a consultation for my event.");
  const whatsappLink = `https://wa.me/2348123456789?text=${whatsappMessage}`;

  return (
    <div className="luxury-landing">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.6;
          color: #2c2c2c;
          overflow-x: hidden;
        }

        .luxury-landing {
          background: #fefefe;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          padding: 0 20px;
          animation: fadeInUp 1.2s ease-out;
        }

        .brand-name {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          letter-spacing: 3px;
          margin-bottom: 20px;
          color: #d4af37;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .tagline {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 300;
          margin-bottom: 40px;
          opacity: 0.95;
          font-style: italic;
        }

        .hero-cta {
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: #2c2c2c;
          padding: 18px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        /* Section Styling */
        .section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: #2c2c2c;
          text-align: center;
          margin-bottom: 60px;
          font-weight: 300;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          margin: 20px auto;
        }

        /* Why Choose Us */
        .value-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .value-point {
          text-align: center;
          padding: 40px 20px;
          background: #fafafa;
          border-radius: 15px;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .value-point:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .value-number {
          font-size: 3rem;
          color: #d4af37;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .value-title {
          font-size: 1.4rem;
          color: #2c2c2c;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .value-description {
          color: #666;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* Testimonials */
        .testimonial-container {
          background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
          color: white;
          padding: 100px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .testimonial-slider {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .testimonial {
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s ease;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }

        .testimonial.active {
          opacity: 1;
          transform: translateX(0);
          position: relative;
        }

        .testimonial-quote {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-style: italic;
          margin-bottom: 30px;
          line-height: 1.6;
          color: #f5f5f5;
        }

        .testimonial-author {
          font-size: 1.1rem;
          color: #d4af37;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .testimonial-event {
          color: #aaa;
          font-size: 0.9rem;
        }

        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .nav-btn {
          background: rgba(212, 175, 55, 0.2);
          border: 2px solid #d4af37;
          color: #d4af37;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: #d4af37;
          color: #2c2c2c;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .service-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .service-content {
          padding: 30px;
        }

        .service-title {
          font-size: 1.4rem;
          color: #2c2c2c;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-description {
          color: #666;
          line-height: 1.7;
        }

        /* Timeline */
        .timeline-container {
          background: #fafafa;
          padding: 100px 20px;
        }

        .timeline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 900px;
          margin: 60px auto 0;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          z-index: 1;
        }

        .timeline-step {
          background: white;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          position: relative;
          z-index: 2;
          flex: 1;
          margin: 0 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 3px solid #d4af37;
        }

        .step-number {
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          margin: 0 auto 20px;
        }

        .step-title {
          font-size: 1.2rem;
          color: #2c2c2c;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .step-description {
          color: #666;
          font-size: 0.9rem;
        }

        /* Social Proof */
        .social-proof {
          padding: 80px 20px;
          background: white;
          text-align: center;
        }

        .logos-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-top: 40px;
          opacity: 0.7;
        }

        .logo-placeholder {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          font-weight: 600;
          color: #888;
          border: 2px solid #eee;
        }

        /* Packages */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .package-card {
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .package-card:nth-child(2) {
          border-color: #d4af37;
          transform: scale(1.05);
        }

        .package-card:nth-child(2)::before {
          content: 'Most Popular';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: white;
          padding: 8px 25px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .package-name {
          font-size: 2rem;
          color: #2c2c2c;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .package-subtitle {
          color: #d4af37;
          font-style: italic;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .package-features {
          list-style: none;
          text-align: left;
        }

        .package-features li {
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .package-features li:last-child {
          border-bottom: none;
        }

        /* WhatsApp CTA */
        .whatsapp-cta {
          background: linear-gradient(135deg, #25d366, #128c7e);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .whatsapp-title {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 30px;
          font-weight: 300;
        }

        .whatsapp-subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .whatsapp-btn {
          background: white;
          color: #25d366;
          padding: 20px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,255,255,0.3);
        }

        /* Footer */
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 80px 20px 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .footer-section h3 {
          color: #d4af37;
          margin-bottom: 20px;
          font-size: 1.3rem;
        }

        .footer-section p, .footer-section a {
          color: #ccc;
          line-height: 1.7;
          text-decoration: none;
        }

        .footer-section a:hover {
          color: #d4af37;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .social-link {
          background: #d4af37;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #f4d03f;
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid #333;
          color: #888;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .timeline {
            flex-direction: column;
            gap: 30px;
          }

          .timeline::before {
            left: 50%;
            top: 0;
            bottom: 0;
            width: 3px;
            height: auto;
          }

          .timeline-step {
            margin: 0;
          }

          .testimonial-nav {
            gap: 10px;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
          }

          .logos-container {
            gap: 20px;
          }

          .package-card:nth-child(2) {
            transform: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="brand-name">Amaré Events</h1>
          <p className="tagline">Luxury Events. Seamless Execution.</p>
          <a href="#contact" className="hero-cta">Book Your Event Now</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" id="why-choose-us">
        <h2 className={`section-title fade-in ${isVisible['why-choose-us'] ? 'visible' : ''}`}>
          Why Lagos Elite Choose Amaré
        </h2>
        <div className="value-points">
          <div className={`value-point fade-in ${isVisible['why-choose-us'] ? 'visible' : ''}`}>
            <div className="value-number">150+</div>
            <h3 className="value-title">Lagos Luxury Events</h3>
            <p className="value-description">From intimate gatherings to grand celebrations, we've perfected the art of creating unforgettable experiences for Nigeria's most discerning clients.</p>
          </div>
          <div className={`value-point fade-in ${isVisible['why-choose-us'] ? 'visible' : ''}`}>
            <div className="value-number">24/7</div>
            <h3 className="value-title">White-Glove Service</h3>
            <p className="value-description">Our dedicated team provides round-the-clock support, ensuring every detail is managed with precision and care throughout your event journey.</p>
          </div>
          <div className={`value-point fade-in ${isVisible['why-choose-us'] ? 'visible' : ''}`}>
            <div className="value-number">VIP</div>
            <h3 className="value-title">Exclusive Vendor Network</h3>
            <p className="value-description">Access to Lagos' most sought-after venues, premium vendors, and celebrity suppliers that aren't available to the general public.</p>
          </div>
          <div className={`value-point fade-in ${isVisible['why-choose-us'] ? 'visible' : ''}`}>
            <div className="value-number">100%</div>
            <h3 className="value-title">Stress-Free Experience</h3>
            <p className="value-description">From concept to execution, we handle every aspect of your event, allowing you to enjoy your special day without any worries.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-container" id="testimonials">
        <h2 className="section-title" style={{color: 'white', marginBottom: '60px'}}>
          What Our Clients Say
        </h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}>
              <div className="testimonial-quote">"{testimonial.quote}"</div>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="testimonial-event">{testimonial.event}</div>
            </div>
          ))}
        </div>
        <div className="testimonial-nav">
          <button 
            className="nav-btn"
            onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="nav-btn"
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <h2 className={`section-title fade-in ${isVisible['services'] ? 'visible' : ''}`}>
          Our Signature Events
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-in ${isVisible['services'] ? 'visible' : ''}`}>
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-container" id="process">
        <div className="section">
          <h2 className={`section-title fade-in ${isVisible['process'] ? 'visible' : ''}`}>
            Your Journey to Perfection
          </h2>
          <div className="timeline">
            <div className={`timeline-step fade-in ${isVisible['process'] ? 'visible' : ''}`}>
              <div className="step-number">1</div>
              <h3 className="step-title">Book</h3>
              <p className="step-description">Schedule your complimentary consultation to discuss your vision and requirements.</p>
            </div>
            <div className={`timeline-step fade-in ${isVisible['process'] ? 'visible' : ''}`}>
              <div className="step-number">2</div>
              <h3 className="step-title">Plan</h3>
              <p className="step-description">We create a bespoke event plan tailored to your style, budget, and preferences.</p>
            </div>
            <div className={`timeline-step fade-in ${isVisible['process'] ? 'visible' : ''}`}>
              <div className="step-number">3</div>
              <h3 className="step-title">Wow!</h3>
              <p className="step-description">Experience your flawlessly executed event while we handle every detail behind the scenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof" id="featured">
        <h2 className={`section-title fade-in ${isVisible['featured'] ? 'visible' : ''}`}>
          As Featured In
        </h2>
        <div className="logos-container">
          <div className="logo-placeholder">BellaNaija</div>
          <div className="logo-placeholder">Wedding Digest</div>
          <div className="logo-placeholder">Lagos Society</div>
          <div className="logo-placeholder">Vogue Nigeria</div>
          <div className="logo-placeholder">TW Magazine</div>
        </div>
      </section>

      {/* Packages */}
      <section className="section" id="packages">
        <h2 className={`section-title fade-in ${isVisible['packages'] ? 'visible' : ''}`}>
          Service Packages
        </h2>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card fade-in ${isVisible['packages'] ? 'visible' : ''}`}>
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-subtitle">{pkg.subtitle}</p>
              <ul className="package-features">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <Check size={16} style={{color: '#d4af37'}} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="whatsapp-cta" id="contact">
        <h2 className="whatsapp-title">Ready to Plan Your Dream Event?</h2>
        <p className="whatsapp-subtitle">Let's create something extraordinary together</p>
        <a href={whatsappLink} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={24} />
          Start Planning on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Amaré Events</h3>
            <p>Lagos' premier luxury event planning company, specializing in creating unforgettable experiences for discerning clients. We transform visions into reality with unmatched attention to detail and service excellence.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <p><a href="#services">Luxury Weddings</a></p>
            <p><a href="#services">Milestone Birthdays</a></p>
            <p><a href="#services">Corporate Events</a></p>
            <p><a href="#services">Traditional Ceremonies</a></p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p><Phone size={16} style={{display: 'inline', marginRight: '8px'}} /> +234 812 345 6789</p>
            <p><Mail size={16} style={{display: 'inline', marginRight: '8px'}} /> hello@amareevents.com</p>
            <p>Victoria Island, Lagos, Nigeria</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Amaré Events. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;