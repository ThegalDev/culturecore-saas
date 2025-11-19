"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Settings, LogOut, User, Menu, X, Shield, Zap } from "lucide-react"

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: "/dashboard", label: "Voice Architect", icon: LayoutDashboard },
        { href: "/dashboard/rewriter", label: "Document Studio", icon: Zap },
        { href: "/dashboard", label: "Governance", icon: Shield },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ]

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-4 top-4 z-50 rounded-md bg-slate-900 p-2 text-white shadow-lg md:hidden"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800 bg-slate-950 transition-transform duration-300 md:static md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center border-b border-slate-800 px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-xl font-bold tracking-tight text-white">CultureCore</span>
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                    <nav className="space-y-1 px-3">
                        {links.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                            : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="border-t border-slate-800 p-4">
                    <div className="flex items-center gap-3 rounded-md bg-slate-900/50 p-3 border border-slate-800">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-cyan-400">
                            <User className="h-4 w-4" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-sm font-medium text-white">Enterprise User</p>
                            <p className="truncate text-xs text-slate-500">admin@corp.com</p>
                        </div>
                        <button className="text-slate-500 hover:text-white transition-colors">
                            <LogOut className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
