import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
                cyan: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                    950: "#083344",
                },
                slate: {
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#cbd5e1",
                    400: "#94a3b8",
                    500: "#64748b",
                    600: "#475569",
                    700: "#334155",
                    800: "#1e293b",
                    850: "#172033", // Custom deep blue-grey
                    900: "#0f172a",
                    950: "#020617", // Rich Black / Deep Blue
                },
                navy: {
                    50: "#f0f4f8",
                    100: "#d9e2ec",
                    200: "#bcccdc",
                    300: "#9fb3c8",
                    400: "#829ab1",
                    500: "#627d98",
                    600: "#486581",
                    700: "#334e68",
                    800: "#243b53",
                    900: "#102a43",
                    950: "#0a1c2e",
                },
                glass: {
                    100: "rgba(255, 255, 255, 0.05)",
                    200: "rgba(255, 255, 255, 0.1)",
                    300: "rgba(255, 255, 255, 0.2)",
                    400: "rgba(255, 255, 255, 0.3)",
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
                serif: ["var(--font-fraunces)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(to bottom, #020617, #0f172a, #172554)",
                "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out",
                "slide-up": "slideUp 0.8s ease-out",
                "float": "float 8s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 3s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(6, 182, 212, 0.3)" },
                    "100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.6), 0 0 10px rgba(59, 130, 246, 0.5)" },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
export default config;
