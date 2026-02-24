export interface Topic {
  id: number;
  title: string;
  domain: string;
  definition: string;
  keyConcepts: string[];
  examples: string[];
  realWorldApplications: string[];
  advantages: string[];
  limitations: string[];
  vivaQuestions: { question: string; hint: string }[];
  defenceAnswer: {
    intro: string;
    coreExplanation: string[];
    exampleApplication: string;
    conclusion: string;
  };
  diagram?: string;
  keyTerms: string[];
  speakingTips: string[];
}

export interface Domain {
  name: string;
  icon: string;
  color: string;
}

export const DOMAINS: Domain[] = [
  { name: "OS & Architecture", icon: "🖥️", color: "#3B82F6" },
  { name: "Programming & OOP", icon: "💻", color: "#8B5CF6" },
  { name: "Web Technologies", icon: "🌐", color: "#06B6D4" },
  { name: "Networking & Telecom", icon: "📡", color: "#F59E0B" },
  { name: "Databases", icon: "🗄️", color: "#10B981" },
  { name: "Software Engineering", icon: "⚙️", color: "#EF4444" },
  { name: "AI & ML", icon: "🤖", color: "#EC4899" },
  { name: "Cybersecurity", icon: "🔒", color: "#6366F1" },
];
