export type Problem = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  descriptionTitle?: string;
  keyRequirementsTitle?: string;
  keyRequirements: string[];
  expectedSolutionTitle?: string;
  expectedSolutionIntro?: string;
  expectedSolution: string[];
};

export type Theme = {
  id: string;
  number: number;
  title: string;
  problems: Problem[];
};

export const themes: Theme[] = [
  {
    id: "theme-1",
    number: 1,
    title:
      "Integrated Smart Hostel Monitoring & Information Management System",
    problems: [
      {
        id: "PS-001",
        shortTitle: "Smart Screening",
        title: "Smart & Respectful Screening at Hostel Entry Points",
        description:
          "Students sneak prohibited items like outside food or alcohol by hiding them in containers. Current checks rely on visual inspection, making detection difficult. Strict manual checks raise privacy concerns. A solution is needed to balance discipline with dignity.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Detect concealed prohibited items inside containers",
          "Minimize manual/physical inspection",
          "Respect student privacy and dignity",
          "Be cost-effective and practical",
          "Avoid complex infrastructure",
          "Ensure fairness and transparency",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Quick screening mechanism",
          "Non-intrusive detection approach",
          "Minimal manual inspection",
          "Privacy-preserving design",
          "Deployable hostel-friendly model",
        ],
      },
      {
        id: "PS-002",
        shortTitle: "Hostel Management Portal",
        title: "Smart Hostel Information & Management Portal",
        description:
          "Hostel administration currently uses manual or disconnected systems, making it difficult to manage records, track complaints, and communicate efficiently.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Maintain student records and room allocation",
          "Track maintenance requests and complaints",
          "Record late entries and activity logs",
          "Provide admin dashboard",
          "Enable student access to information",
          "Ensure role-based access and privacy",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Centralized web platform",
          "Student + admin modules",
          "Maintenance tracking system",
          "Dashboard for operations",
          "Secure access control system",
        ],
      },
      {
        id: "PS-003",
        shortTitle: "AI Intrusion Monitoring",
        title: "AI-Based Intrusion & Activity Monitoring System",
        description:
          "Hostel safety relies on manual supervision. There is no automated way to detect animal intrusion or abnormal activity, leading to delayed response and lack of insights.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Detect animal intrusion (PIR/camera)",
          "Detect abnormal activity without facial recognition",
          "Send real-time alerts",
          "Provide incident heatmaps",
          "Ensure privacy (no personal identification)",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Sensor/vision-based system",
          "Anomaly detection logic",
          "Real-time alert mechanism",
          "Analytics dashboard",
          "Privacy-preserving system",
        ],
      },
      {
        id: "PS-004",
        shortTitle: "Guest Management",
        title: "Smart Hostel Guest Management System",
        description:
          "Guest management is manual and inefficient, leading to security risks, poor tracking, and billing issues.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Automate guest request and approval",
          "Provide secure time-bound access",
          "Track guest movement and visits",
          "Simplify billing system",
          "Provide real-time monitoring",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Digital guest management platform",
          "Automated approval workflow",
          "Access control system",
          "Billing integration",
          "Admin dashboard with tracking",
        ],
      },
    ],
  },

  {
    id: "theme-2",
    number: 2,
    title: "Unified Water Intelligence & Sustainability",
    problems: [
      {
        id: "PS-005",
        shortTitle: "Water Monitoring",
        title:
          "Smart Water Monitoring & Leakage Detection for Hostel Facilities",
        description:
          "Manual monitoring of water systems leads to wastage, inefficiency, and undetected leaks.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Monitor tank levels automatically",
          "Prevent overflow and dry running",
          "Detect leaks or abnormal flow",
          "Monitor water quality",
          "Send alerts to staff",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Sensor-based monitoring",
          "Automated pump control",
          "Leak detection system",
          "Water quality module",
          "Dashboard + alerts",
        ],
      },
      {
        id: "PS-006",
        shortTitle: "RO Monitoring",
        title:
          "Smart Drinking Water Quality Monitoring for Hostel RO Systems",
        description:
          "Water quality monitoring is manual, making it hard to detect unsafe conditions in time.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Monitor pH and turbidity",
          "Detect contamination",
          "Track water flow",
          "Send alerts for unsafe conditions",
          "Provide monitoring dashboard",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Water quality sensing system",
          "Real-time alerts",
          "Flow tracking",
          "Dashboard system",
          "Low-cost implementation",
        ],
      },
    ],
  },

  {
    id: "theme-3",
    number: 3,
    title: "Mess & Dining Optimization",
    problems: [
      {
        id: "PS-007",
        shortTitle: "Mess Menu & Nutrition",
        title: "Smart Mess Menu & Nutrition Information System",
        description:
          "Students lack visibility into nutrition and preferences, leading to wastage and poor planning.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Display menu digitally",
          "Show nutrition info",
          "Allow feedback and ratings",
          "Collect food preferences",
          "Reduce food wastage using analytics",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Digital menu platform",
          "Nutrition tracking",
          "Feedback system",
          "Preference collection",
          "Analytics dashboard",
        ],
      },
      {
        id: "PS-008",
        shortTitle: "Food Feedback & Waste",
        title: "Smart Mess Food Feedback and Waste Analysis System",
        description:
          "Feedback collection is inconsistent and food wastage is not tracked properly.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Collect structured feedback",
          "Track consumption vs wastage",
          "Analyze sentiments",
          "Provide real-time insights",
          "Ensure low-cost implementation",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Feedback collection system",
          "Waste tracking system",
          "Analytics + sentiment analysis",
          "Real-time dashboard",
          "Actionable insights for admins",
        ],
      },
    ],
  },

  {
    id: "theme-4",
    number: 4,
    title: "Efficient Laundry Facility Coordination System",
    problems: [
      {
        id: "PS-009",
        shortTitle: "Laundry Coordination",
        title: "Smart Laundry Coordination for Hostel Students",
        description:
          "Students face confusion due to lack of tracking, schedules, and notifications in laundry services.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Communicate schedules",
          "Track laundry items",
          "Notify students",
          "Reduce unnecessary visits",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Laundry tracking platform",
          "Schedule communication",
          "Notification system",
          "Student + staff interface",
        ],
      },
    ],
  },

  {
    id: "theme-5",
    number: 5,
    title: "Student Well-being & Counselling",
    problems: [
      {
        id: "PS-010",
        shortTitle: "Stress & Counselling",
        title:
          "Happiness Index, Stress Analytics & Counselling Management System",
        description:
          "No structured system exists to track student well-being or manage counselling sessions.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Daily mood logging",
          "Counselling booking system",
          "Auto scheduling",
          "Anonymized analytics",
          "Alert wardens for high stress",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Mood tracking system",
          "Appointment booking",
          "Scheduling system",
          "Analytics dashboard",
          "Privacy-focused design",
        ],
      },
      {
        id: "PS-011",
        shortTitle: "Hospital Authorization",
        title: "Hospital Visit Authorization & Escalation System",
        description:
          "Manual hospital visit processes lead to delays, poor tracking, and communication gaps.",
        descriptionTitle: "Problem Statement",
        keyRequirementsTitle: "Key Requirements",
        keyRequirements: [
          "Online request + approval system",
          "Guard assignment tracking",
          "Emergency escalation alerts",
          "Real-time tracking",
          "Feedback + analytics",
        ],
        expectedSolutionTitle: "Expected Solution",
        expectedSolution: [
          "Digital approval workflow",
          "Tracking system",
          "Alert mechanism",
          "Visit analytics dashboard",
          "Secure communication system",
        ],
      },
    ],
  },
];