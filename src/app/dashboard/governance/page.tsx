"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle, Plus, Trash2, Lock } from "lucide-react"

export default function GovernancePage() {
    const [requireApproval, setRequireApproval] = useState(true)
    const [enforceStyleGuide, setEnforceStyleGuide] = useState(true)
    const [bannedTerms, setBannedTerms] = useState([
        "synergy", "leverage", "best-in-class", "rockstar", "ninja"
    ])

    const removeTerm = (term: string) => {
        setBannedTerms(bannedTerms.filter(t => t !== term))
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Governance & Compliance</h1>
                    <p className="text-slate-400 mt-2">Manage brand standards, approval workflows, and compliance rules.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Shield className="mr-2 h-4 w-4" /> Run Compliance Audit
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Compliance Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-green-400">98%</div>
                        <p className="text-xs text-slate-500 mt-1">+2.5% from last month</p>
                        <div className="mt-4 h-2 w-full rounded-full bg-slate-800">
                            <div className="h-2 rounded-full bg-green-500" style={{ width: "98%" }} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Active Rules</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-indigo-400">24</div>
                        <p className="text-xs text-slate-500 mt-1">Across 3 categories</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-400">Pending Approvals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-amber-400">3</div>
                        <p className="text-xs text-slate-500 mt-1">Requires review</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-white">Global Settings</CardTitle>
                        <CardDescription className="text-slate-400">Configure enforcement levels for your organization.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="text-base font-medium text-white">Enforce Style Guide</div>
                                <div className="text-sm text-slate-500">Automatically flag off-brand content</div>
                            </div>
                            <Switch
                                checked={enforceStyleGuide}
                                onCheckedChange={setEnforceStyleGuide}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="text-base font-medium text-white">Require Approval</div>
                                <div className="text-sm text-slate-500">For all external communications</div>
                            </div>
                            <Switch
                                checked={requireApproval}
                                onCheckedChange={setRequireApproval}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <div className="text-base font-medium text-white">Lock Archived Assets</div>
                                <div className="text-sm text-slate-500">Prevent editing of approved documents</div>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-white">Term Blacklist</CardTitle>
                                <CardDescription className="text-slate-400">Words that will be automatically flagged.</CardDescription>
                            </div>
                            <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                                <Plus className="mr-2 h-3 w-3" /> Add Term
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {bannedTerms.map((term) => (
                                <Badge key={term} variant="secondary" className="bg-red-950/30 text-red-400 hover:bg-red-950/50 border border-red-900/50 px-3 py-1">
                                    {term}
                                    <button onClick={() => removeTerm(term)} className="ml-2 hover:text-red-300">
                                        <Trash2 className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { action: "Policy Updated", user: "Sarah Connor", time: "2 hours ago", icon: Shield, color: "text-indigo-400" },
                            { action: "Term Added", user: "Mike Ross", time: "5 hours ago", icon: AlertTriangle, color: "text-amber-400" },
                            { action: "Audit Completed", user: "System", time: "1 day ago", icon: CheckCircle, color: "text-green-400" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className={`rounded-full bg-slate-950 p-2 ${item.color}`}>
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">{item.action}</p>
                                        <p className="text-xs text-slate-500">by {item.user}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-500">{item.time}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
