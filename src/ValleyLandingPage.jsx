import React from "react";
import logo from "./assets/Valley-Lending.jpg";
import "./App.css";

const ValleyLandingPage = () => {
  return (
    <div className="valley-wrapper">
      <header className="header">
        <img src={logo} alt="Valley lending logo" className="Logo" />
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a
            href="https://2636235.my1003app.com/2266636/register?time=1729723484642"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <h2>Your Trusted Mortgage Partner</h2>
        <p>Helping families achieve homeownership with confidence.</p>
        <a
          href="https://2636235.my1003app.com/2266636/register?time=1729723484642"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apply for a Loan
        </a>
      </section>

      <section id="about" className="about">
        <h3>About Joaquin Morales</h3>
        <p>
          I'm a licensed mortgage loan officer dedicated to guiding you through
          the home loan process. Whether you're buying your first home or
          refinancing, I'm here to help make it smooth and stress-free.
        </p>
      </section>

      <section id="services" className="services">
        <h3>My Services</h3>
        <div className="service-list">
          <div className="service-card">🏡 Home Purchase Loans</div>
          <div className="service-card">🔁 Refinance Options</div>
          <div className="service-card">🛡️ FHA / VA / USDA Loans</div>
        </div>
      </section>

      <section id="apply" className="apply-cta">
        <h3>Ready to get started?</h3>
        <a
          href="https://2636235.my1003app.com/2266636/register?time=1729723484642"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Start Application
        </a>
      </section>

      <footer id="contact" className="footer">
        <p>📞 (214) 518-1437 | ✉️ Joaquin@valleylending.com</p>
        <p>NMLS #226636 • © {new Date().getFullYear()} Valley Lending</p>
      </footer>
    </div>
  );
};

export default ValleyLandingPage;
