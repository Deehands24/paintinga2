import Link from 'next/link';

interface PageHeaderProps {
  navLinks?: Array<{
    href: string;
    label: string;
    active?: boolean;
  }>;
}

export default function PageHeader({
  navLinks = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Browse Painters' },
    { href: '/articles', label: 'Articles' }
  ]
}: PageHeaderProps) {
  return (
    <header className="bg-umich-navy shadow-md border-b-4 border-umich-maize sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-umich-maize">PaintingA2</h1>
            <p className="text-sm text-gray-300 mt-1">
              Ann Arbor&apos;s Premier Painting Directory
            </p>
          </div>
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? 'text-umich-maize font-bold transition-colors'
                    : 'text-white hover:text-umich-maize font-medium transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
