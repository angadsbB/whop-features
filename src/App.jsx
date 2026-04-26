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
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "10px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 600, letterSpacing: 1, color: "#555", textTransform: "uppercase" }}>
        <span>Feature</span><span>Whop</span><span>Competitor</span>
      </div>
      {metrics.map((m, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", padding: "10px 16px", borderBottom: i < metrics.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", fontSize: 12 }}>
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
      `}</style>

      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAEAklEQVR4nO1Vz2tcVRT+zr33zZtfTmaKSiwRmU4gkyw06kJx0X9AitIk6kKkDeJCaEsp1pQuuikpbbU2CuqiaBUE0U1BGi0IIrgRbSZJU2iwVmMaKUkrmTcv837f42LyJmOSNhUFF+ZbPO7iO+c733fn3gNsYhP/EegfEzYIVrScQhDkmmRiQwJBxgRJEGvLaYkhIhGHEa0QmkdBWCFgHQIhPitaThF/GA+mjMGOzPaCujdBM67+4Lp77oYDaAKIoBnlrDnYkX4yb7RJvuJE788439xyGtFE0EyPtSVf6jCfyKmUwKQdvTPj/rDoEWlmkACIqO+B9Eh3tj1JiDSYIAAS7854Q9OWp7Wv+dWHsifKmYxkaI4JdOQn58S1WsQINB/uzB0ppQ2poRkMCPK0fG3afm+mppmJgK0p4+r2+5IU2gEbRCBoBsCpVOLp76uj8/bhzvzRrlQYRL6GBEAINUzJyjB6v/tjouq93VPYU0wGfhAyCQCEQCOr2IXs/PbW724giDDnBP2VxTqLpJQgJpAAUgl18LI1Or90qJQ/2pV0/TBiGPGPTQgIqV4cr05UvdM9hT3FhOMFDFIEQWBGSsFmueNidc4NCBCaIYjOz9efq1gRkYKIWJumHJpeOnmtNlTKDXelXD8SWB4M3Rg5JXdNWp/MLb3VXdhXTDhepOJ5iYCEgAexs2J9fdMRRLp5BxQhZOy4P/35ozlTYehK/fjP1qFSfricdP1IxjQNCLAy1K7J2sfX7ZGewt6i2dBYJjCkhAfRd9G6cLPeSIvWq6aIQubnt2ZLaTV8dfFgqe14V9r3I8RXoVGUoeTuydpHc/bpni37iqbjhTL2oZmUgEfYOVa7sFA3iALmeMb/er80E8BDpfyxcqruRworGgJsKGP3lHV21j7VXdi/Lel4YasPJcgj9I1ZXy04TR/LmVtlNEMRS6Lf3MANOQFicOyDDSUHp6yzs/abPas1IkAJ4RP1jdXWaqx2E3sizfxMe+az3nuE1qFmSTCUGpyqfThrnypv2V8yHS9qviuaoQR8kn2V6pfz9bUa68sgnohn2zOfPpJTCIWUr1xaOjNbe6NcOFBKul7YfFo0WJIISPSPVUcX1tdY3bQmQoYiOndj6YUJyyLj5Uv2mdnayXL+wLak44WitVckQqKBSkOD1tW4rZu4e9Asimnj17p/rKvt9VLS9SOxMleQggISA5Xq+dv06q5kEE95b1uq8lQhjEJPQxHAiMCmkCFhoFL9Yt5p0O5U8Z1lQmZFNF51+ytVn2QmQaYgU1I6IesQ/ePW3Whs7KZJYuDhXGpv0Xw8azDjx1o48otz2XYlIdpA4u9gZe8RNYtrWWX/HloX8/o7eBOb+J/gT6UU1rPEw5AdAAAAAElFTkSuQmCC" alt="Whop" style={{ width: 34, height: 34, borderRadius: 9 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: -0.3 }}>Product Feature Proposals</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#555", letterSpacing: 0.4, marginTop: 1 }}>For Whop · By Angad Bhatia</div>
          </div>
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 0.5, textTransform: "uppercase" }}>April 2026</div>
      </div>

      {/* Hero */}
      <div style={{ position: "relative", zIndex: 1, padding: "52px 32px 36px", maxWidth: 880, background: "radial-gradient(ellipse at top left, rgba(255,90,31,0.06) 0%, transparent 50%)" }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, color: "#fff", letterSpacing: -1.8, lineHeight: 1.08, marginBottom: 16 }}>
          7 features that would make<br /><span style={{ color: "#ff5a1f" }}>Whop creators</span> harder to leave.
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.6, maxWidth: 660 }}>
          I've been a paying member of communities on Whop and recently signed up for Skool and Circle to compare firsthand. These are real gaps I found, sourced from competitor platforms, creator feedback, and my own experience on both sides of the platform.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 24, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#555" }}>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>7</span><br />feature proposals</div>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />competitors analyzed</div>
          <div><span style={{ color: "#ff5a1f", fontWeight: 700, fontSize: 20 }}>3</span><br />platforms tested firsthand</div>
        </div>
      </div>

      <div style={{ height: 1, background: "linear-gradient(90deg, rgba(255,90,31,0.3) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)" }} />

      {/* Main */}
      <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "360px 1fr", minHeight: "70vh" }}>
        <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <FeatureNav features={features} activeId={activeId} onSelect={setActiveId} />
        </div>
        <div style={{ padding: "28px 36px", overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}>
          <FeatureDetail feature={activeFeature} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#3a3a3a", letterSpacing: 0.5, textTransform: "uppercase", position: "relative", zIndex: 1 }}>
        <span>Angad Bhatia</span>
        <span>Built for <span style={{ color: "#ff5a1f" }}>Whop</span> · Sourced from Skool, Circle, Kajabi</span>
      </div>
    </div>
  );
}
