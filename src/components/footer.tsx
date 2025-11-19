import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-navy-900/10 bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <span className="font-serif text-xl font-bold text-navy-900">CultureCore</span>
                        <p className="text-sm text-navy-900/60">
                            Defining the corporate soul of the modern enterprise through advanced AI synthesis.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-900">Product</h4>
                        <ul className="space-y-2 text-sm text-navy-900/60">
                            <li><Link href="#" className="hover:text-navy-900">Features</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-900">Company</h4>
                        <ul className="space-y-2 text-sm text-navy-900/60">
                            <li><Link href="#" className="hover:text-navy-900">About</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">Blog</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-900">Legal</h4>
                        <ul className="space-y-2 text-sm text-navy-900/60">
                            <li><Link href="#" className="hover:text-navy-900">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">Terms</Link></li>
                            <li><Link href="#" className="hover:text-navy-900">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-navy-900/10 pt-8 text-center text-sm text-navy-900/40">
                    &copy; {new Date().getFullYear()} CultureCore Enterprise Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
