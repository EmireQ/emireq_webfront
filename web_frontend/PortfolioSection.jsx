// import React from "react";
// import "./PortfolioSection.css";

// export default function StartupPortfolioSection() {
//   return (
//     <section className="startup-section" aria-labelledby="startup-portfolio">
//       <div className="startup-inner">
//         <div className="portfolio-row">
//           {/* Left yellow card */}
//           <div className="invest-card" role="article" aria-label="investment highlight">
//             <div className="invest-top">
//               <div className="avatar-stack" aria-hidden>
//                 <img
//                   className="avatar"
//                   alt="Investor 1"
//                   src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80&q=60"
//                 />
//                 <img
//                   className="avatar"
//                   alt="Investor 2"
//                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=60"
//                 />
//                 <img
//                   className="avatar"
//                   alt="Investor 3"
//                   src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&h=80&q=60"
//                 />
//                 <img
//                   className="avatar"
//                   alt="Investor 4"
//                   src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=60"
//                 />
                
//               </div>
//               <div className="invest-note">+750 Active Investors</div>
//             </div>

//             <h3 className="invest-title">750+ Members Invest On This Project</h3>
//             <p className="invest-desc">
//               Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
//             </p>

//             <div className="feature-badges" aria-hidden>
//               <div className="pill dark">⚡ Scalable Solutions</div>
//               <div className="pill dark">⏱ 24/7 Support</div>
//               <div className="pill dark">✨ Automation Features</div>
//             </div>

//             <div className="invest-cta">
//               <button className="contact-btn" aria-label="Contact">Contact →</button>
//             </div>

//             <div className="invest-deco" aria-hidden />
//           </div>

//           {/* Right column: image cards */}
//           <div className="cards-col" role="list" aria-label="project cards">
//             <article className="image-card" role="listitem" aria-label="Scaled SaaS">
//               <div
//                 className="card-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60')",
//                 }}
//               />
//               <div className="card-overlay">
//                 <div className="card-top">
//                   <div className="card-tag">Growth</div>
//                   <div className="card-circle">↗</div>
//                 </div>
//                 <div className="card-bottom">
//                   <div className="card-title">Scaled SaaS</div>
//                 </div>
//               </div>
//             </article>

//             <article className="image-card" role="listitem" aria-label="Tripled Revenue">
//               <div
//                 className="card-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=60')",
//                 }}
//               />
//               <div className="card-overlay">
//                 <div className="card-top">
//                   <div className="card-tag">Scaling</div>
//                   <div className="card-circle">↗</div>
//                 </div>
//                 <div className="card-bottom">
//                   <div className="card-title">Tripled Revenue</div>
//                 </div>
//               </div>
//             </article>

//             <article className="image-card" role="listitem" aria-label="Build MVP">
//               <div
//                 className="card-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60')",
//                 }}
//               />
//               <div className="card-overlay">
//                 <div className="card-top">
//                   <div className="card-tag">Pre-Seed</div>
//                   <div className="card-circle">↗</div>
//                 </div>
//                 <div className="card-bottom">
//                   <div className="card-title">Build MVP</div>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/StartupPortfolioSection.jsx
import React, { useRef, useEffect } from "react";
import "./PortfolioSection.css";

const EXTRA_CARDS = [
  {
    title: "Series A Growth",
    tag: "Funding",
    img: "https://images.unsplash.com/photo-1532619675605-1ede6d0a4a7d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "AI Launch",
    tag: "Innovation",
    img: "https://images.unsplash.com/photo-1581091012184-5c3a24c7c8e1?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Cross-Market Expansion",
    tag: "Global",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
];

export default function StartupPortfolioSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e) => {
      isDown = true;
      startX = e.touches ? e.touches[0].pageX : e.pageX;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMove = (e) => {
      if (!isDown) return;
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      const walk = startX - x;
      el.scrollLeft = scrollLeft + walk;
    };

    const onUp = () => {
      isDown = false;
      el.style.cursor = "";
      el.style.userSelect = "";
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > 0 || e.shiftKey) return;
      if (Math.abs(e.deltaY) > 2) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  // Base 5 cards
  const baseCards = [
    {
      title: "Scaled SaaS",
      tag: "Growth",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Tripled Revenue",
      tag: "Scaling",
      img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Build MVP",
      tag: "Pre-Seed",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Tech Incubation",
      tag: "Startup",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Product Launch",
      tag: "Innovation",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const allCards = [...baseCards, ...EXTRA_CARDS];

  return (
    <section className="startup-section" aria-labelledby="startup-portfolio">
      <div className="startup-inner">
        <div className="portfolio-row">
          {/* Left yellow card */}
          <div className="invest-card" role="article" aria-label="investment highlight">
            <div className="invest-top">
              <div className="avatar-stack" aria-hidden>
                <img
                  className="avatar"
                  alt="Investor 1"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 2"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 3"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 4"
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=60"
                />
              </div>
              <div className="invest-note">+750 Active Investors</div>
            </div>

            <h3 className="invest-title">750+ Members Invest On This Project</h3>
            <p className="invest-desc">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
            </p>

            <div className="feature-badges" aria-hidden>
              <div className="pill dark">⚡ Scalable Solutions</div>
              <div className="pill dark">⏱ 24/7 Support</div>
              <div className="pill dark">✨ Automation Features</div>
            </div>

            <div className="invest-cta">
              <button className="contact-btn" aria-label="Contact">Contact →</button>
            </div>

            <div className="invest-deco" aria-hidden />
          </div>

          {/* Right column: image cards (scrollable) */}
          <div
            className="cards-col"
            role="list"
            aria-label="project cards"
            ref={cardsRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style>
              {`.cards-col::-webkit-scrollbar { display: none; }`}
            </style>

          {allCards.map((card, idx) => (
  <article
    className="image-card"
    role="listitem"
    aria-label={card.title}
    key={card.title + "-" + idx}
    style={{
      display: "inline-block",
      verticalAlign: "top",
      marginRight: "24px",
      width: "280px",
      height: "360px", // full-size card height
      borderRadius: "14px",
      overflow: "hidden",
      position: "relative",
      flexShrink: 0,
      cursor: "pointer",
    }}
  >
    <div
      className="card-image"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url('${card.img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div
      className="card-overlay"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        background:
          "linear-gradient(to top, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.1) 70%, transparent)",
        color: "#fff",
      }}
    >
      <div className="card-top" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="card-tag">{card.tag}</div>
        <div className="card-circle">↗</div>
      </div>
      <div className="card-bottom">
        <div className="card-title" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          {card.title}
        </div>
      </div>
    </div>
  </article>
))}

          </div>
        </div>
      </div>
    </section>
  );
}
