import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function Logo({ className = '', height = 80, width = 200 }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/logo.png"
        alt="PaintingA2 - Ann Arbor Painting Directory"
        height={height}
        width={width}
        priority
        className="hover:opacity-90 transition-opacity"
      />
    </Link>
  );
}
