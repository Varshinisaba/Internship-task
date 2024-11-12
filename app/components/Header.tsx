import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <span className="logo">Logo</span>
        <span className="company-name">SentinelGuardAI</span>
      </div>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/apply">Apply</Link>
      </nav>
    </header>
  );
}

