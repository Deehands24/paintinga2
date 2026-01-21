import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-umich-navy text-white pt-12 pb-8 border-t-4 border-umich-maize">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-umich-maize">PaintingA2</h2>
                            <p className="text-xs text-gray-400 mt-1">Ann Arbor's Premier Painting Directory</p>
                        </div>
                        <p className="text-sm text-gray-300">
                            Connecting homeowners with trusted, verified painting professionals in Ann Arbor and Washtenaw County.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-umich-maize mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/listings" className="hover:text-white transition-colors">Browse Painters</Link></li>
                            <li><Link href="/articles" className="hover:text-white transition-colors">Articles & Tips</Link></li>
                            <li><Link href="/for-painters" className="hover:text-white transition-colors">For Painters</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-umich-maize mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-umich-maize mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Ann Arbor, MI</li>
                            <li><a href="mailto:hello@paintinga2.com" className="hover:text-white transition-colors">hello@paintinga2.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} PaintingA2. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with pride in Michigan ✋</p>
                </div>
            </div>
        </footer>
    );
}
