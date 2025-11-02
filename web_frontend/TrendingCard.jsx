// TrendingCard.jsx
import React from "react";
import "./TrendingCard.css";

/**
 * Props
 * - items: [{ title: string, pct: string }]
 * - onSelect: (item) => void   // called when user clicks / presses Enter on an item
 */
export default function TrendingCard({ items, onSelect }) {
  const trends =
    items && items.length
      ? items
      : [
          { title: "AI & Machine Learning Startups", pct: "+156%" },
          { title: "Renewable Energy Projects", pct: "+89%" },
          { title: "Healthcare Technology", pct: "+67%" },
        ];

  const handleKeyDown = (e, item) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(item);
    }
  };

  return (
    <div className="trending-card" role="dialog" aria-label="Search suggestions">
      <div className="promo">
        <div className="promo-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.8478 8.1522L20.5 9.1389L15.75 13.1978L17.0956 19.8611L12 16.8L6.90444 19.8611L8.25 13.1978L3.5 9.1389L10.1522 8.1522L12 2Z" stroke="#3B5BDB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="promo-text">
          <h3 className="promo-title">AI-Powered Discovery</h3>
          <p className="promo-desc">Let our AI analyze market trends and suggest personalized investment opportunities</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="trending-header">
        <svg className="trend-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 17L9 11L13 15L21 7" stroke="#43536D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="trending-label">Trending Searches</span>
      </div>

      <ul className="trending-list" role="list">
        {trends.map((t, i) => (
          <li
            key={i}
            role="button"
            tabIndex={0}
            className="trending-item"
            onClick={() => onSelect?.(t)}
            onKeyDown={(e) => handleKeyDown(e, t)}
            aria-label={`Select ${t.title}`}
          >
            <span className="trend-title">{t.title}</span>
            <span className="trend-pct">{t.pct}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
