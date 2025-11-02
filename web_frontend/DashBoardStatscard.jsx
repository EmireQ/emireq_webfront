import React from "react";
import "./DashboardStatsCard.css";

const FALLBACK_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none">
       <rect width="24" height="24" rx="6" fill="#E6EEF9"/>
       <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" fill="#3B5BDB"/>
     </svg>`
  );

export default function DashboardStatsCard() {
  // small helper to avoid repeated inline functions in markup
  const handleImgError = (e) => {
    // prevent infinite loop if fallback also fails
    if (e?.target?.dataset?.errored) return;
    e.target.dataset.errored = "true";
    e.target.src = FALLBACK_SVG;
  };

  return (
    <div className="dashboard-container" role="region" aria-label="dashboard stats">
      {/* Card 1 - Yellow ROI */}
      <div className="card-wrapper">
        <section className="card card--yellow" aria-labelledby="roi-title">
          <div className="card__content card__content--center-left">
            <h3 id="roi-title" className="card__label">Avg. ROI</h3>
            <div className="card__headline">24.8%</div>
            <div className="card__sub">Above market avg</div>
          </div>

          <div className="card__decor-circle" aria-hidden="true" />
        </section>

        <div className="badge" aria-hidden="true">
          <div className="badge__inner">
            <svg viewBox="0 0 24 24" className="badge__icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M4 14L10 8L14 12L20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M20 6V12H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 2 - Dark center */}
      <section className="card card--dark" aria-labelledby="trusted-title">
        <div className="bg-art" aria-hidden="true" />

        <div className="stat-headline">
          <div className="stat-number">
            500<span className="plus">+</span>
          </div>

          <p id="trusted-title" className="stat-sub">
            Trusted by over 500+ investors and buyers around the globe, we've built a solid reputation!
          </p>
        </div>

        <div className="stat-avatars" aria-hidden="true">
          {/* Add width/height, object-fit, loading lazy, and onError fallback */}
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop"
            alt="Investor 1"
            width="40"
            height="40"
            loading="lazy"
            onError={handleImgError}
          />
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop"
            alt="Investor 2"
            width="40"
            height="40"
            loading="lazy"
            onError={handleImgError}
          />
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80&auto=format&fit=crop"
            alt="Investor 3"
            width="40"
            height="40"
            loading="lazy"
            onError={handleImgError}
          />
          <img
            className="avatar"
            src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80&auto=format&fit=crop"
            alt="Investor 4"
            width="40"
            height="40"
            loading="lazy"
            onError={handleImgError}
          />
          <div className="avatar-plus" aria-hidden="true">+{/* intentionally empty for visual */}</div>
        </div>
      </section>

      {/* Card 3 - Volume */}
      <section className="card card--white" aria-labelledby="volume-title">
        <div className="card__content card__content--top-left">
          <div className="muted">Total Volume</div>
          <div id="volume-title" className="card__headline card__headline--large">$130.80M</div>

          <div className="badge-small" aria-hidden="true">▲ 810%</div>
        </div>

        <div className="chart" aria-hidden="true">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="chart__svg">
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3ea1ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            <path d="M0,130 C40,120 80,110 120,115 C160,120 200,90 240,95 C280,100 320,110 360,100 C400,90 440,120 480,125 C520,132 560,110 600,80 L600,160 L0,160 Z" fill="url(#grad)" />
            <g stroke="#cfcfcf" strokeDasharray="6 8" strokeWidth="1" opacity="0.55">
              <line x1="0" y1="40" x2="600" y2="40" />
              <line x1="0" y1="80" x2="600" y2="80" />
              <line x1="0" y1="120" x2="600" y2="120" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
}
