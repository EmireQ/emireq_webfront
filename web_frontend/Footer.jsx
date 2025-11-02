// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="er-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="er-footer__top">
        <div className="er-footer__brand">
          <div className="er-logo-box" aria-hidden="true">
            <span className="er-brand-name">EMIREQ</span>
          </div>

          <div className="er-brand-text">
            <p className="er-brand-desc">
              Tokenize real-world opportunities and explore the future of investing.
            </p>

            <div className="er-social">
              <a href="#" aria-label="Twitter" className="er-social__link">
                T
              </a>
              <a href="#" aria-label="LinkedIn" className="er-social__link">
                in
              </a>
              <a href="#" aria-label="YouTube" className="er-social__link">
                ▶
              </a>
              <a href="#" aria-label="Instagram" className="er-social__link">
                ●
              </a>
            </div>
          </div>
        </div>

        <nav className="er-footer__nav" aria-label="Footer navigation">
          <div className="er-col">
            <h3 className="er-col__title">Products</h3>
            <ul className="er-list">
              <li><a href="#">Tokenization</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Startups</a></li>
            </ul>
          </div>

          <div className="er-col">
            <h3 className="er-col__title">Resources</h3>
            <ul className="er-list">
              <li><a href="#">Learn & Explore</a></li>
              <li><a href="#">Insights</a></li>
              <li><a href="#">Investment guide</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="er-col">
            <h3 className="er-col__title">Company</h3>
            <ul className="er-list">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="er-col">
            <h3 className="er-col__title">Support</h3>
            <ul className="er-list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Security & Trust</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="er-footer__newsletter">
        <div className="er-news-left">
          <h4 className="er-news-title">Stay in the loop</h4>
          <p className="er-news-desc">
            Subscribe to our newsletter for the latest crypto insights and market updates.
          </p>
        </div>

        <form className="er-news-form" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="er-email">
            Email address
          </label>
          <input
            id="er-email"
            type="email"
            placeholder="Enter your email"
            className="er-input"
          />
          <button type="submit" className="er-btn">
            Subscribe
          </button>
        </form>
      </div>

      <div className="er-footer__bottom">
        <p className="er-copyright">© 2025 EMIREQ. All rights reserved.</p>

        <div className="er-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <span className="sr-only">End of footer</span>
    </footer>
  );
}
