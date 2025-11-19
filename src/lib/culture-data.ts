export interface CultureArchetype {
    id: string;
    name: string;
    description: string;
    traits: string[];
}

export const ARCHETYPES: CultureArchetype[] = [
    {
        id: "warm-family",
        name: "Warm & Family-Oriented",
        description: "Prioritizes relationships, support, and a sense of belonging. Communication is empathetic and inclusive.",
        traits: ["Supportive", "Inclusive", "Empathetic", "Loyal"]
    },
    {
        id: "traditional-corporate",
        name: "Traditional Corporate & Formal",
        description: "Values hierarchy, stability, and professionalism. Communication is structured, precise, and respectful of protocol.",
        traits: ["Structured", "Professional", "Reliable", "Hierarchical"]
    },
    {
        id: "minimalist-professional",
        name: "Minimalist & Professional",
        description: "Focuses on efficiency and clarity. Communication is concise, direct, and free of fluff.",
        traits: ["Concise", "Efficient", "Clean", "Objective"]
    },
    {
        id: "fast-startup",
        name: "Fast-Moving Startup",
        description: "Embraces speed, agility, and iteration. Communication is energetic, urgent, and action-oriented.",
        traits: ["Agile", "Urgent", "Energetic", "Iterative"]
    },
    {
        id: "tech-forward",
        name: "Tech-Forward & Gen-Z",
        description: "Digital-native and trend-aware. Communication is casual, emoji-friendly, and uses modern internet slang appropriately.",
        traits: ["Modern", "Casual", "Digital-Native", "Relatable"]
    },
    {
        id: "luxury-high-end",
        name: "Luxury & High-End",
        description: "Exudes exclusivity and sophistication. Communication is polished, elegant, and aspirational.",
        traits: ["Sophisticated", "Elegant", "Exclusive", "Refined"]
    },
    {
        id: "playful-humorous",
        name: "Playful & Humorous",
        description: "Uses wit and humor to connect. Communication is fun, lighthearted, and memorable.",
        traits: ["Witty", "Fun", "Lighthearted", "Engaging"]
    },
    {
        id: "direct-data",
        name: "Direct, No-Nonsense & Data-Driven",
        description: "Relies on facts and logic. Communication is objective, analytical, and evidence-based.",
        traits: ["Analytical", "Objective", "Factual", "Logical"]
    },
    {
        id: "government-regulated",
        name: "Government / Regulated",
        description: "Strict adherence to rules and clarity. Communication is formal, precise, and compliant.",
        traits: ["Compliant", "Formal", "Precise", "Authoritative"]
    },
    {
        id: "non-profit",
        name: "Non-Profit / Community-Oriented",
        description: "Driven by mission and impact. Communication is inspiring, heartfelt, and call-to-action focused.",
        traits: ["Mission-Driven", "Inspiring", "Community-Focused", "Heartfelt"]
    },
    {
        id: "innovative-disruptive",
        name: "Innovative / Disruptive",
        description: "Challengers of the status quo. Communication is bold, visionary, and provocative.",
        traits: ["Bold", "Visionary", "Provocative", "Forward-Thinking"]
    },
    {
        id: "customer-centric",
        name: "Customer-Centric",
        description: "Obsessed with the user experience. Communication is helpful, service-oriented, and appreciative.",
        traits: ["Service-Oriented", "Helpful", "Appreciative", "User-First"]
    },
    {
        id: "creative-artistic",
        name: "Creative / Artistic",
        description: "Values expression and originality. Communication is evocative, descriptive, and imaginative.",
        traits: ["Expressive", "Imaginative", "Original", "Evocative"]
    },
    {
        id: "purpose-driven",
        name: "Purpose-Driven",
        description: "Guided by a higher 'why'. Communication is ethical, transparent, and values-based.",
        traits: ["Ethical", "Transparent", "Values-Based", "Authentic"]
    },
    {
        id: "risk-taking",
        name: "Risk-Taking / Entrepreneurial",
        description: "Bold and adventurous. Communication is confident, daring, and focuses on opportunity.",
        traits: ["Daring", "Confident", "Adventurous", "Opportunity-Focused"]
    }
];
