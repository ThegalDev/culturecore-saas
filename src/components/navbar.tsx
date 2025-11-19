import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-serif text-xl font-bold tracking-tight text-white">CultureCore</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        About
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10">Log in</Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-200 font-semibold">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
