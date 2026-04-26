import { useState } from "react";

const features = [
  {
    id: 1,
    tag: "ENGAGEMENT",
    title: "Gamification Layer",
    subtitle: "Points, levels, leaderboards, and content gating.",
    problem:
      "Most Whop creators funnel their members to Discord for actual community interaction. Whop handles payments and access, but the daily engagement happens offplatform. This is a retention risk: if a competitor undercuts on payment processing, creators have no engagement layer keeping them on Whop. As one Reddit user put it, 'Whether Whop\u2019s community stays active depends almost entirely on how much the creator is feeding it.'",
    competitor: "Skool",
    competitorDetail:
      "Members earn points for posting and getting likes. They level up publicly (Levels 1 through 9) and appear on weekly and all-time leaderboards. Creators can gate chat access behind Level 2 and course content behind higher levels. This reduces spam automatically (new members can't post until they've participated) and creates behavioral incentive for daily engagement without the creator doing anything manually.",
    proposal:
      "Build a native points and leveling system. Members earn points for posting, commenting, completing courses, and referring others. Public leaderboards per community. Let creators gate premium content, channels, or features behind engagement levels. This gives members a reason to engage on Whop instead of Discord, and gives creators a retention mechanic that compounds over time without manual effort.",
    impact:
      "Increases daily active usage on Whop's native tools. Reduces Discord dependency. Creates switching costs that keep creators on the platform long term. Makes the AM's job easier because the platform is doing behavioral work automatically.",
    sources: "Skool Plugins, Reddit r/onlinecourses comparison thread, multiple Skool vs Whop reviews",
    metrics: [
      { label: "Points system", whop: "Not available", comp: "Skool: Native" },
      { label: "Public leaderboards", whop: "Not available", comp: "Skool: Weekly + all-time" },
      { label: "Level-gated content", whop: "Not available", comp: "Skool: Plugin (free)" },
      { label: "Auto spam reduction", whop: "Manual moderation", comp: "Skool: Level-based gating" },
    ],
  },
  {
    id: 2,
    tag: "DASHBOARD",
    title: "Creator Health Metrics",
    subtitle: "Engagement, retention, and conversion on the main dashboard.",
    problem:
      "Whop's default analytics dashboard shows Gross Revenue, Net Revenue, New Users, MRR, ARR, and Payments Breakdown. These are accounting metrics. Churn rate and churned revenue exist as optional widgets you can add, but engagement percentage, retention rate, and conversion rate are not tracked at all. A creator can see how much money they made but can't see how healthy their community actually is.",
    competitor: "Skool + Circle",
    competitorDetail:
      "Skool's dashboard shows Members, MRR, Engagement %, and Retention % in the top row by default. Below that, a Growth section tracks Visitors, Signups, Conversion Rate, and New MRR. Circle takes it further with Activity Scores that benchmark your community's engagement against similar-sized communities on the platform.",
    proposal:
      "Add Engagement % (active members / total members), Retention % (month-over-month), and a Visitor to Signup to Paying Member conversion funnel to Whop's default analytics view. The churn widgets already exist as opt-in, but making health metrics the default view (not just revenue metrics) would help creators and AMs catch declining engagement before it shows up as lost revenue.",
    impact:
      "Creators spot problems earlier. AMs can prioritize accounts by health, not just revenue. Shifts the dashboard from backward-looking (what you earned) to forward-looking (what's about to change).",
    sources: "Skool dashboard (firsthand), Circle Activity Scores, Whop dashboard (firsthand as seller)",
    metrics: [
      { label: "Engagement %", whop: "Not tracked", comp: "Skool: Default view" },
      { label: "Retention %", whop: "Churn widget (opt-in)", comp: "Skool: Default view" },
      { label: "Conversion rate", whop: "Not tracked", comp: "Skool: Default view" },
      { label: "Community benchmark", whop: "Not available", comp: "Circle: Activity Scores" },
    ],
  },
  {
    id: 3,
    tag: "GROWTH",
    title: "Traffic Source Attribution",
    subtitle: "Where are your visitors actually coming from?",
    problem:
      "When a creator posts content on TikTok, runs ads on Meta, or gets mentioned in a YouTube video, they have no way to see inside Whop which channel drove the traffic. The dashboard tracks revenue endpoints but not acquisition sources. Creators who are spending money or time on marketing are flying blind on what's actually working.",
    competitor: "Skool",
    competitorDetail:
      "Skool's dashboard includes a 'Where your about page visitors come from' section that breaks down traffic by source: organic search, social media, direct, referral. Skool also offers Meta Pixel tracking and Google Ads tracking as Pro plugins for paid ad attribution.",
    proposal:
      "Add a native traffic source breakdown to the analytics dashboard. Show where storefront visitors are coming from: organic, social, direct, referral, and paid. For creators running ads, offer native Meta Pixel and Google Ads tracking integration so they can measure ROAS without third-party setup. Whop already has Zapier integration with Facebook Conversions, but building this natively would make it accessible to non-technical creators.",
    impact:
      "Creators double down on what works. AMs can advise creators on growth strategy with real data instead of guessing. Reduces reliance on external analytics tools.",
    sources: "Skool dashboard (firsthand), Skool Pro plugins list, Whop Zapier integration page",
    metrics: [
      { label: "Traffic sources", whop: "Not tracked", comp: "Skool: Default view" },
      { label: "Meta Pixel native", whop: "Via Zapier only", comp: "Skool: Pro plugin" },
      { label: "Google Ads tracking", whop: "Via Zapier only", comp: "Skool: Pro plugin" },
      { label: "Referral tracking", whop: "Affiliate system", comp: "Skool: Built into sources" },
    ],
  },
  {
    id: 4,
    tag: "RETENTION",
    title: "Cancellation Flow Intervention",
    subtitle: "Intercept churn at the moment it happens.",
    problem:
      "When a member cancels on Whop, they click cancel and they're gone. Whop collects cancel reasons in the Users table (which is smart), but this data is only visible after the member has already left. There's no intervention at the point of cancellation.",
    competitor: "Skool + Kajabi",
    competitorDetail:
      "Skool offers a 'Cancellation video' Pro plugin that shows members a personalized video from the creator on the cancel page before the cancellation completes. Kajabi lets creators offer a membership pause or a discount at the point of cancellation.",
    proposal:
      "Build a customizable cancellation flow. When a member clicks cancel, show a creator-recorded video, offer a pause option (30, 60, or 90 days), or present a discount on next month. Whop already has the ability to pause payment collection via Zapier actions, so the backend capability exists. Making it self-serve at the cancel page would be the next step.",
    impact:
      "Recovers passive churn at the highest-intent moment. Gives AMs a concrete retention tool to configure per account. Turns existing cancel reason data from reactive reporting into proactive intervention.",
    sources: "Skool Plugins page (firsthand), Kajabi cancel flow, Whop Users table (firsthand), Whop Zapier actions",
    metrics: [
      { label: "Cancel-page video", whop: "Not available", comp: "Skool: Pro plugin" },
      { label: "Pause option at cancel", whop: "Via Zapier only", comp: "Kajabi: Native" },
      { label: "Discount offer at cancel", whop: "Not available", comp: "Kajabi: Native" },
      { label: "Cancel reason collection", whop: "Available (Users table)", comp: "Available" },
    ],
  },
  {
    id: 5,
    tag: "AUTOMATION",
    title: "Native Re-engagement Workflows",
    subtitle: "Automated nudges before members drift away.",
    problem:
      "Whop supports automated messages when members join or leave, but nothing in between. The gap between 'joined' and 'left' is where passive churn lives. A member stops logging in, engagement drops, and eventually they cancel or their card expires. Whop has Zapier integration that could handle this, but most creators aren't technical enough to build Zaps.",
    competitor: "Circle",
    competitorDetail:
      "Circle has a visual workflow builder where creators set up conditional sequences without code. Examples: 'If a member hasn't logged in for 14 days, send a DM.' 'If someone joins and doesn't post within 7 days, send a welcome nudge.' Circle also sends automated weekly digest emails to members showing what they missed.",
    proposal:
      "Build a native visual workflow builder inside Whop's dashboard. Start with 3-4 simple triggers: inactive for X days, payment failing, course completed, engagement score dropping. The building blocks already exist through Zapier and webhooks, but wrapping them in a no-code UI inside the dashboard would make automations accessible to every creator. Also add automated weekly digest emails.",
    impact:
      "Catches passive churn before it becomes a cancellation. Reduces AM workload on manual check-ins. Scales retention across the entire creator base.",
    sources: "Circle workflow builder, Circle weekly digests, Whop Zapier integration (confirmed), Whop automated messages (confirmed)",
    metrics: [
      { label: "Join/leave messages", whop: "Available", comp: "Circle: Available" },
      { label: "Inactivity triggers", whop: "Via Zapier only", comp: "Circle: Visual builder" },
      { label: "Conditional sequences", whop: "Via Zapier only", comp: "Circle: No-code native" },
      { label: "Weekly digest emails", whop: "Not available", comp: "Circle: Automated" },
    ],
  },
  {
    id: 6,
    tag: "AI",
    title: "Creator-Trained AI Agent",
    subtitle: "24/7 member support using the creator's own content.",
    problem:
      "Creators can't be online 24/7, but members have questions at all hours. Whop has an AI Chat app in its app store, but it's generic. It doesn't know anything about the specific creator's courses, posts, or community context.",
    competitor: "Circle",
    competitorDetail:
      "Circle launched AI Agents trained on the creator's own posts, comments, courses, and uploaded resources. Members ask questions and get answers sourced from the creator's actual content. Creators manage everything from a shared AI inbox and only step in when needed.",
    proposal:
      "Let creators train an AI agent on their own Whop content: courses, posts, guides, and community discussions. When a member asks a question, the agent responds with answers pulled from the creator's own material. Include a shared inbox so creators can review AI responses. For a community like Malice with years of posts on sneaker drops and reselling strategies, this would make the membership dramatically more valuable.",
    impact:
      "Increases perceived community value. Reduces creator burnout and response time. Keeps members engaged around the clock. Differentiates Whop's AI offering from generic chatbots.",
    sources: "Circle AI Agents launch, Whop AI Chat app (confirmed in app store)",
    metrics: [
      { label: "Generic AI chat", whop: "App available", comp: "Circle: Available" },
      { label: "Trained on creator content", whop: "Not available", comp: "Circle: Native" },
      { label: "Shared AI inbox", whop: "Not available", comp: "Circle: Native" },
      { label: "Learns from new posts", whop: "Not available", comp: "Circle: Continuous" },
    ],
  },
  {
    id: 7,
    tag: "ANALYTICS",
    title: "Member-Level Activity Tracking",
    subtitle: "See which individual members are drifting before they leave.",
    problem:
      "Whop's Users table shows member status, email, product, total spend, and cancel reason. But there's no visibility into individual engagement patterns: when they last logged in, how often they participate, or whether their activity is trending up or down.",
    competitor: "Skool + Circle",
    competitorDetail:
      "Skool shows a daily visual activity chart on every member's profile, covering the past year. Circle tracks who's active and who's gone quiet, letting admins filter their member list by engagement level.",
    proposal:
      "Add a member health view: last login date, posts and comments in the last 30 days, activity trend (up, down, flat), and a color-coded health indicator. Let creators sort and filter their member list by engagement level. This gives AMs a concrete list of 'these 15 members need a check-in this week' instead of guessing.",
    impact:
      "Enables proactive retention at the individual level. Makes the AM role data-driven instead of reactive. Pairs naturally with re-engagement workflows for automated follow-up.",
    sources: "Skool member profiles, Circle engagement filtering, Whop Users table (firsthand as seller)",
    metrics: [
      { label: "Last login visible", whop: "Not surfaced", comp: "Skool: Profile view" },
      { label: "Activity history chart", whop: "Not available", comp: "Skool: Daily (1 year)" },
      { label: "Engagement filtering", whop: "Not available", comp: "Circle: Native" },
      { label: "Health indicator", whop: "Not available", comp: "Circle: Activity Scores" },
    ],
  },
];

function Tag({ children, color }) {
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 9,
        fontWeight: 700,
        color,
        letterSpacing: 1.5,
        padding: "3px 8px",
        background: color + "18",
        borderRadius: 4,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function FeatureNav({ features, activeId, onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "16px 16px", overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}>
      {features.map((f) => {
        const active = f.id === activeId;
        return (
          <div key={f.id} onClick={() => onSelect(f.id)} style={{ padding: "14px 16px", background: active ? "rgba(255,90,31,0.07)" : "transparent", border: `1px solid ${active ? "rgba(255,90,31,0.25)" : "rgba(255,255,255,0.04)"}`, borderRadius: 10, cursor: "pointer", transition: "all 0.25s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <Tag color={active ? "#ff5a1f" : "#555"}>{f.tag}</Tag>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#444" }}>0{f.id}</span>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: active ? "#fff" : "#aaa", letterSpacing: -0.2, marginBottom: 3 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.35 }}>{f.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}

function CompTable({ metrics }) {
  return (
    <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
      <div className="comp-grid" style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 600, letterSpacing: 1, color: "#555", textTransform: "uppercase" }}>
        <span>Feature</span><span>Whop</span><span>Competitor</span>
      </div>
      {metrics.map((m, i) => (
        <div key={i} className="comp-grid" style={{ padding: "10px 16px", borderBottom: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", fontSize: 12 }}>
          <span style={{ color: "#bbb", fontWeight: 500 }}>{m.label}</span>
          <span style={{ color: m.whop.includes("Not") || m.whop.includes("only") ? "#f87171" : m.whop.includes("opt-in") ? "#fbbf24" : "#4ade80", fontSize: 11, fontWeight: 500 }}>{m.whop}</span>
          <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 500 }}>{m.comp}</span>
        </div>
      ))}
    </div>
  );
}

function DetailSection({ label, color, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, color, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 7, display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 5, height: 5, background: color, borderRadius: "50%", display: "inline-block" }} />{label}
      </div>
      <p style={{ fontSize: 13.5, color: "#c8c8c8", margin: 0, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

function FeatureDetail({ feature }) {
  return (
    <div key={feature.id} style={{ animation: "fadeUp 0.35s ease" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <Tag color="#ff5a1f">{feature.tag}</Tag>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#555" }}>vs {feature.competitor}</span>
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: -0.8, margin: 0, marginBottom: 6, lineHeight: 1.15 }}>{feature.title}</h2>
      <p style={{ fontSize: 14, color: "#888", margin: 0, marginBottom: 28, lineHeight: 1.5 }}>{feature.subtitle}</p>
      <DetailSection label="The Problem" color="#f87171">{feature.problem}</DetailSection>
      <DetailSection label={`What ${feature.competitor} Does`} color="#4ade80">{feature.competitorDetail}</DetailSection>
      <DetailSection label="What I'd Build" color="#ff5a1f">{feature.proposal}</DetailSection>
      <DetailSection label="Why It Matters" color="#fbbf24">{feature.impact}</DetailSection>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, color: "#666", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>Comparison</div>
        <CompTable metrics={feature.metrics} />
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 0.3, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>Sources: {feature.sources}</div>
    </div>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(1);
  const activeFeature = features.find((f) => f.id === activeId);

  return (
    <div style={{ minHeight: "100vh", background: "#09090b", color: "#e8e8e8", fontFamily: "'Outfit', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #09090b; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,90,31,0.25); border-radius: 4px; }
        .main-grid { display: grid; grid-template-columns: 360px 1fr; min-height: 70vh; position: relative; z-index: 1; }
        .nav-col { border-right: 1px solid rgba(255,255,255,0.06); }
        .detail-col { padding: 28px 36px; overflow-y: auto; max-height: calc(100vh - 200px); }
        .hero-title { font-size: 42px; }
        .header-bar { padding: 18px 32px; }
        .hero-section { padding: 52px 32px 36px; }
        .footer-bar { padding: 20px 32px; flex-direction: row; }
        .stats-row { display: flex; gap: 24px; }
        .comp-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; }
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr; min-height: auto; }
          .nav-col { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .detail-col { padding: 20px 16px; max-height: none; }
          .hero-title { font-size: 28px; }
          .header-bar { padding: 14px 16px; }
          .hero-section { padding: 32px 16px 24px; }
          .footer-bar { padding: 16px; flex-direction: column; gap: 8px; align-items: flex-start; }
          .stats-row { gap: 16px; }
          .comp-grid { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <div className="header-bar" style={{ position: "relative", zIndex: 1, borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="data:image/png;base64,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" alt="Whop" style={{ width: 34, height: 34, borderRadius: 9 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: -0.3 }}>Product Feature Proposals</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#555", letterSpacing: 0.4, marginTop: 1 }}>For Whop · By Angad Bhatia</div>
          </div>
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 0.5, textTransform: "uppercase" }}>April 2026</div>
      </div>

      {/* Hero */}
      <div className="hero-section" style={{ position: "relative", zIndex: 1, maxWidth: 880, background: "radial-gradient(ellipse at top left, rgba(255,90,31,0.06) 0%, transparent 50%)" }}>
        <h1 className="hero-title" style={{ fontWeight: 900, color: "#fff", letterSpacing: -1.8, lineHeight: 1.08, marginBottom: 16 }}>
          7 features that would make<br /><span style={{ color: "#ff5a1f" }}>Whop creators</span> harder to leave.
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.6, maxWidth: 660 }}>
          I've been a paying member of communities on Whop and recently signed up for Skool and Circle to compare firsthand. These are real gaps I found, sourced from competitor platforms, creator feedback, and my own experience on both sides of the platform.
        </p>
        <div className="stats-row" style={{ marginTop: 24, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555" }}>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>7</span><br />feature proposals</div>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />competitors analyzed</div>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />platforms tested firsthand</div>
        </div>
      </div>

      <div style={{ height: 1, background: "linear-gradient(90deg, rgba(255,90,31,0.3) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />

      {/* Main */}
      <div className="main-grid">
        <div className="nav-col">
          <FeatureNav features={features} activeId={activeId} onSelect={setActiveId} />
        </div>
        <div className="detail-col">
          <FeatureDetail feature={activeFeature} />
        </div>
      </div>

      {/* Footer */}
      <div className="footer-bar" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#3a3a3a", letterSpacing: 0.5, textTransform: "uppercase", position: "relative", zIndex: 1 }}>
        <span>Angad Bhatia</span>
        <span>Built for <span style={{ color: "#ff5a1f" }}>Whop</span> · Sourced from Skool, Circle, Kajabi</span>
      </div>
    </div>
  );
}
