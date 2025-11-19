import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Sparkles, Zap, Globe, Shield } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero-background-3d.png"
                        alt="Abstract 3D Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <div className="animate-fade-in space-y-8">
                        <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300 backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                            v2.0 Now Available
                        </div>

                        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl text-balance">
                            <span className="block text-white">Shape Your</span>
                            <span className="text-gradient block mt-2">Corporate Soul</span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl text-balance leading-relaxed">
                            The enterprise-grade platform for defining, synthesizing, and governing your organization's unique cultural DNA.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href="/dashboard">
                                <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-500 border-0 relative overflow-hidden group">
                                    <span className="relative z-10 flex items-center">Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-8 w-24 bg-slate-700/50 rounded animate-pulse"></div>
                            <div className="h-8 w-24 bg-slate-700/50 rounded animate-pulse delay-75"></div>
                            <div className="h-8 w-24 bg-slate-700/50 rounded animate-pulse delay-150"></div>
                            <div className="h-8 w-24 bg-slate-700/50 rounded animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative py-32 bg-slate-950">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="mb-20 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            Enterprise-Grade Intelligence
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-400">
                            Powerful tools designed for modern organizations to maintain cultural consistency at scale.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Link href="/dashboard">
                            <Card className="glass-panel border-slate-800 p-8 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/50 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 border border-slate-800 group-hover:border-cyan-500/50 shadow-lg shadow-cyan-900/20">
                                    <Sparkles className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">AI Voice Synthesis</h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Instantly generate a comprehensive brand voice guide based on 15+ corporate archetypes or your own custom ethos.
                                </p>
                            </Card>
                        </Link>

                        <Link href="/dashboard/rewriter">
                            <Card className="glass-panel border-slate-800 p-8 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/50 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300 border border-slate-800 group-hover:border-blue-500/50 shadow-lg shadow-blue-900/20">
                                    <Zap className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-200 transition-colors">Smart Rewriter</h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Transform drafts into on-brand communications with a single click. Our engine aligns tone, vocabulary, and structure.
                                </p>
                            </Card>
                        </Link>

                        <Link href="/dashboard">
                            <Card className="glass-panel border-slate-800 p-8 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/50 text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300 border border-slate-800 group-hover:border-indigo-500/50 shadow-lg shadow-indigo-900/20">
                                    <Shield className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">Governance & Compliance</h3>
                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Ensure every email, policy, and announcement adheres to your strict corporate standards and emotional pillars.
                                </p>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-3xl" />
                <div className="container relative z-10 px-4 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Ready to Standardize Your Culture?
                    </h2>
                    <p className="mb-10 mx-auto max-w-2xl text-lg text-slate-300">
                        Join forward-thinking enterprises using CultureCore to build consistent, powerful internal brands.
                    </p>
                    <Link href="/dashboard">
                        <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-950 hover:bg-cyan-50 font-bold shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}
