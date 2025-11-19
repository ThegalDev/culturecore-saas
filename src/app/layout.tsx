import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    axes: ["SOFT", "WONK", "opsz"]
});

export const metadata: Metadata = {
    title: "CultureCore | Enterprise Brand Voice Architect",
    description: "Advanced AI-driven brand voice synthesis for the modern enterprise.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(outfit.variable, fraunces.variable, "font-sans min-h-screen flex flex-col")}>
                {children}
            </body>
        </html>
    );
}
