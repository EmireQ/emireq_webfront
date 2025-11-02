// src/App.jsx
import React from "react";
import SiteTitle from "./title.jsx";
import Header from "./Header.jsx";
import SearchHero from "./SearchHero.jsx";
import DashboardStatsCard from "./DashBoardStatscard.jsx";
import ProgressBarStaticHalf from "./ProgressBar.jsx";
import CategoryGrid from "./CategoryGrid.jsx";
import CryptoInsights from "./CryptoInsights.jsx";
import StartupPortfolioSection from "./PortfolioSection.jsx";
import CompanyList from "./CompanyCard.jsx";
import ArticleLayout from "./ArticleLayout.jsx";
import NewsletterCTA from "./NewsLetterCTA.jsx";
import Footer from "./Footer.jsx";
import AdaptableHeader from "./AdaptableHeader.jsx";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fbfd",
        fontFamily: "'DM Sans', Arial, sans-serif",
        color: "#2F2F33",
      }}
    >
      {/* GLOBAL HEADER */}
      <Header />

      {/* HERO TITLE SECTION */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 32,
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <SiteTitle
          title="Tokenize real-world opportunities"
          label="emireq"
          width={220}
          height={50}
        />
      </div>

      {/* MAIN CONTENT */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SearchHero />

        <div style={{ marginTop: 32 }}>
          <DashboardStatsCard />
        </div>

        <div style={{ marginTop: 56 }}>
          <ProgressBarStaticHalf />
        </div>

        <div style={{ marginTop: 56 }}>
          <CategoryGrid />
        </div>

        <div style={{ marginTop: 56, marginBottom: 48 }}>
          <CryptoInsights />
        </div>

        {/* SECTIONS BLOCKS */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 24px",
            boxSizing: "border-box",
            marginBottom: 96,
          }}
        >
          <div style={{ width: "100%", maxWidth: 1280 }}>
 <div style={{ marginTop: -200 }}></div>
            {/* --- PORTFOLIO SECTION --- */}
            <AdaptableHeader
              badge="Portfolio"
              title="We Invest in Founders Building the Future"
              subtitle="Join successful startups that have raised funding through our platform. From pre-seed to Series A, we support founders at every stage."
              buttonLabel="Learn More"
              onButtonClick={() => alert("Header is active!")}
              image={null}
            />

            <div style={{ marginTop: 200 }}>
              <StartupPortfolioSection />
            </div>

            {/* --- BUSINESS LISTING SECTION --- */}
            <div style={{ marginTop: -150  }}>
              <AdaptableHeader
                badge="Business Listing"
                title="Profitable businesses ready for acquisition"
                subtitle="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
                buttonLabel="View all listing"
                onButtonClick={() => alert("Header is active!")}
                image={null}
              />
            </div>

            <div style={{ marginTop: 120 }}>
              <CompanyList />
            </div>

            {/* --- BLOG / ARTICLES SECTION --- */}
            <div style={{ marginTop: -40 }}>
              <AdaptableHeader
                badge="Our Blog"
                title="We Invest In Founders Building the Future"
                subtitle="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu."
                buttonLabel="All News & Blogs"
                onButtonClick={() => alert("Header is active!")}
                image={null}
              />
            </div>

            <div style={{ marginTop: 110 }}>
              <ArticleLayout />
            </div>

            {/* --- NEWSLETTER + FOOTER --- */}
            <div style={{ marginTop: -20 }}>
              <NewsletterCTA />
            </div>

            <div style={{ marginTop: 120 }}>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
