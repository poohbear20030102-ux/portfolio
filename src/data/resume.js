export const profile = {
  name: "Tianlei Tang",
  title: "Senior Backend Engineer",
  location: "Bogor Regency, West Java, ID",
  email: "franktang700@gmail.com",
  phone: "+1 (662) 254-4955",
  tagline: "Systems that don't fall over.",
};

export const skillGroups = [
  {
    id: "mainframe",
    title: "Mainframe",
    skills: ["CICS", "JCL", "VSAM", "z/OS", "HLASM", "TSO/ISPF", "DFSORT", "IDCAMS", "IEBCOPY", "Batch"],
  },
  {
    id: "systems",
    title: "Systems",
    skills: ["C", "C++", "Distributed Systems", "Concurrency", "Performance"],
  },
  {
    id: "integration",
    title: "Integration",
    skills: ["APIs", "Hybrid Cloud", "Modernization", "Event-Driven"],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: ["CI/CD", "Observability", "Debugging", "Fault Tolerance"],
  },
  {
    id: "leadership",
    title: "Leadership",
    skills: ["Tech Leadership", "Mentoring", "Architecture", "Code Review"],
  },
];

export const experience = [
  {
    id: "instacart",
    company: "Instacart",
    role: "Senior Backend Engineer",
    location: "San Francisco, CA",
    start: "Jun 2021",
    end: "May 2026",
    current: false,
    highlights: [
      "Order & inventory microservices",
      "Event-driven fulfillment pipelines",
      "High-traffic API tuning",
      "Fault-tolerant infra & observability",
    ],
    stack: ["Microservices", "Event Streaming", "Caching", "CI/CD"],
  },
  {
    id: "google",
    company: "Google",
    role: "Senior Software Engineer",
    location: "Mountain View, CA",
    start: "Dec 2016",
    end: "Jun 2021",
    current: false,
    highlights: [
      "Global-scale search backend",
      "High-throughput C/C++ services",
      "Replication & consensus systems",
      "Production-scale debugging",
    ],
    stack: ["C++", "Distributed Systems", "Consensus", "CI/CD"],
  },
  {
    id: "bloomberg",
    company: "Bloomberg",
    role: "Software Engineer",
    location: "New York, NY",
    start: "Mar 2015",
    end: "Dec 2016",
    current: false,
    highlights: [
      "Low-latency market data feeds",
      "Deterministic C/C++ systems",
      "Global data distribution",
      "Redundancy & failover",
    ],
    stack: ["C++", "Low Latency", "Market Data"],
  },
];

export const education = [
  {
    school: "UCLA",
    degree: "M.S. Electrical Engineering",
    period: "2013 – 2015",
  },
  {
    school: "Shanghai Jiao Tong University",
    degree: "B.S. Electrical Engineering",
    period: "2009 – 2013",
  },
];

export const certifications = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
  },
];

export const projects = [
  {
    id: "fulfillment",
    title: "Fulfillment Pipeline",
    org: "Instacart",
    period: "2021 – 2026",
    description: "Event-driven order & inventory sync.",
    tags: ["Event Streaming", "Microservices"],
    image: "datacenter",
  },
  {
    id: "search",
    title: "Search Infrastructure",
    org: "Google",
    period: "2016 – 2021",
    description: "Global-scale C/C++ backend.",
    tags: ["C++", "Multi-Region"],
    image: "circuit",
  },
  {
    id: "marketdata",
    title: "Market Data Feed",
    org: "Bloomberg",
    period: "2015 – 2016",
    description: "Low-latency trading data.",
    tags: ["C++", "Low Latency"],
    image: "chart",
  },
  {
    id: "mainframe",
    title: "z/OS Batch Systems",
    org: "Mainframe Foundations",
    period: "Career Base",
    description: "CICS · JCL · VSAM.",
    tags: ["CICS", "JCL", "VSAM"],
    image: "matrix",
  },
];
