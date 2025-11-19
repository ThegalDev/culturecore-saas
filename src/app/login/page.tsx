"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Loader2 } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            router.push("/dashboard")
        }, 1500)
    }

    const handleGoogleLogin = () => {
        setIsGoogleLoading(true)
        setTimeout(() => {
            router.push("/dashboard")
        }, 2000)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 p-4">
            <div className="absolute inset-0 bg-[url('/assets/hero-background-3d.png')] bg-cover bg-center opacity-20" />

            <Card className="relative w-full max-w-md border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                            <span className="text-2xl font-bold text-white">C</span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
                    <CardDescription className="text-slate-400">
                        Sign in to your CultureCore account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:text-white transition-all duration-300"
                        onClick={handleGoogleLogin}
                        disabled={isLoading || isGoogleLoading}
                    >
                        {isGoogleLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                        )}
                        Sign in with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-slate-900 px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                className="border-slate-700 bg-slate-950/50 text-white placeholder:text-slate-600 focus:border-cyan-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-300">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                className="border-slate-700 bg-slate-950/50 text-white focus:border-cyan-500/50"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                            disabled={isLoading || isGoogleLoading}
                        >
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Sign In
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t border-slate-800/50 pt-6">
                    <div className="text-center text-sm text-slate-500">
                        Don&apos;t have an account?{" "}
                        <Link href="/dashboard" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
