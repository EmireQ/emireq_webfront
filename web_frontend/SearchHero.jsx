// src/components/SearchHero.jsx
import React, { useState, useRef, useEffect } from "react";
import TrendingCard from "./TrendingCard"; // expects items + onSelect
import "./SearchHero.css";

export default function SearchHero({ initialItems }) {
  // no default active -> buttons start white
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState(initialItems || [
    { title: "AI & Machine Learning Startups", pct: "+156%" },
    { title: "Renewable Energy Projects", pct: "+89%" },
    { title: "Healthcare Technology", pct: "+67%" },
  ]);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // toggle behavior: click to activate, click again to deactivate
  const toggleActiveButton = (name) => {
    setActive((prev) => (prev === name ? null : name));
  };

  // Filter suggestions when query changes
  useEffect(() => {
    const base = initialItems && initialItems.length ? initialItems : filtered;
    const q = (query || "").trim().toLowerCase();
    if (!q) {
      setFiltered(initialItems && initialItems.length ? initialItems : [
        { title: "AI & Machine Learning Startups", pct: "+156%" },
        { title: "Renewable Energy Projects", pct: "+89%" },
        { title: "Healthcare Technology", pct: "+67%" },
      ]);
    } else {
      const source = initialItems && initialItems.length ? initialItems : [
        { title: "AI & Machine Learning Startups", pct: "+156%" },
        { title: "Renewable Energy Projects", pct: "+89%" },
        { title: "Healthcare Technology", pct: "+67%" },
      ];
      setFiltered(source.filter(it => it.title.toLowerCase().includes(q)));
    }
  }, [query, initialItems]);

  // close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard handling: Enter selects first visible item if available; Escape closes
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filtered && filtered.length > 0) {
        selectItem(filtered[0]);
      } else {
        // default submit behavior prevented; close panel
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const selectItem = (item) => {
    setQuery(item.title);
    setOpen(false);
    // TODO: replace with your app's navigation/search trigger
    console.log("Selected suggestion:", item.title);
  };

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero__controls">
        {/* --- BUTTON ROW --- */}
        <div className="hero__buttons">
          {/* Blue Get Started button (permanently blue) */}
          <button className="btn btn--blue" type="button">
            <span className="btn__icon" aria-hidden="true">
              {/* icon SVG (keeps your original) */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.66668 9.33334C2.54053 9.33377 2.41684 9.2984 2.30998 9.23133C2.20313 9.16426 2.1175 9.06824 2.06305 8.95445C2.00859 8.84065 1.98754 8.71373 2.00235 8.58845C2.01715 8.46316 2.0672 8.34465 2.14668 8.24667L8.74668 1.44667C8.79619 1.38953 8.86365 1.35091 8.938 1.33716C9.01235 1.32341 9.08916 1.33535 9.15584 1.37101C9.22251 1.40667 9.27507 1.46394 9.30491 1.53341C9.33474 1.60289 9.34007 1.68044 9.32001 1.75334L8.04002 5.76667C8.00227 5.86769 7.9896 5.97635 8.00308 6.08335C8.01656 6.19034 8.05579 6.29246 8.11741 6.38096C8.17903 6.46946 8.2612 6.54168 8.35687 6.59145C8.45253 6.64121 8.55885 6.66703 8.66668 6.66667H13.3333C13.4595 6.66624 13.5832 6.70162 13.69 6.76869C13.7969 6.83576 13.8825 6.93177 13.937 7.04557C13.9914 7.15937 14.0125 7.28628 13.9977 7.41157C13.9829 7.53686 13.9328 7.65537 13.8533 7.75334L7.25335 14.5533C7.20384 14.6105 7.13638 14.6491 7.06203 14.6629C6.98768 14.6766 6.91087 14.6647 6.8442 14.629C6.77752 14.5933 6.72496 14.5361 6.69513 14.4666C6.66529 14.3971 6.65996 14.3196 6.68002 14.2467L7.96002 10.2333C7.99776 10.1323 8.01043 10.0237 7.99695 9.91667C7.98348 9.80968 7.94424 9.70755 7.88262 9.61906C7.821 9.53056 7.73883 9.45833 7.64317 9.40857C7.5475 9.3588 7.44119 9.33299 7.33335 9.33334H2.66668Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Get Started</span>
          </button>

          {/* Explore Marketplace — white by default, becomes blue when clicked */}
          <button
            className={`btn btn--toggle ${active === "market" ? "active" : ""}`}
            type="button"
            onClick={() => toggleActiveButton("market")}
            aria-pressed={active === "market"}
          >
            Explore Marketplace
          </button>
        </div>

        {/* --- SEARCH BAR --- */}
        <div className="hero__searchbar-wrap">
          <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
            <div className="searchbar__left">
              <span className="searchbar__magnify" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="6" stroke="#A9B5CC" strokeWidth="1.6" />
                  <path d="M21 21l-4.35-4.35" stroke="#A9B5CC" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
           <input
  ref={inputRef}
  className="searchbar__input"
  type="search"
  placeholder="Search startups, tokens, or investors..."
  value={query}
  onChange={(e) => {
    const val = e.target.value;
    setQuery(val);
    setOpen(val.trim().length > 0); // ✅ open only if there's input
  }}
  onFocus={() => {
    if (query.trim().length > 0) setOpen(true); // ✅ show only if already typed something
  }}
  onKeyDown={handleInputKeyDown}
  aria-autocomplete="list"
  aria-expanded={open}
  aria-controls="trending-suggestions"
/>

            </div>

            <div className="searchbar__right">
              <div className="dropdown">
                <label className="dropdown__label">
                  <select className="dropdown__select" aria-label="Category">
                    <option>All</option>
                    <option>Startups</option>
                    <option>Tokens</option>
                    <option>Investors</option>
                  </select>
                </label>
              </div>

              <button
                className="btn btn--search"
                type="submit"
                onClick={() => {
                  console.log("Search:", query);
                  setOpen(false);
                }}
              >
                Search
              </button>
            </div>
          </form>

          {/* suggestions/popover placed relative to the searchbar */}
          {open && (
            <div className="search-suggestions" id="trending-suggestions" role="dialog" aria-label="Search suggestions">
              <TrendingCard
                items={filtered}
                onSelect={(item) => selectItem(item)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
