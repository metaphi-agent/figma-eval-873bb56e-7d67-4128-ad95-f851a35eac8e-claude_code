import { FacebookIcon, TwitterIcon } from '../ui/Icons';

const footerLinks = {
  column1: [
    { label: 'About Valve', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Steamworks', href: '#' },
    { label: 'Steam Distribution', href: '#' },
    { label: 'Support', href: '#' },
  ],
  column2: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Legal', href: '#' },
    { label: 'Steam Subscriber Agreement', href: '#' },
    { label: 'Refunds', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-highlight py-12">
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="flex items-start justify-between">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="./assets/images/valve-logo.png"
                alt="Valve"
                className="h-8 opacity-70"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-2xl font-bold text-text-dim">VALVE</span>
              <div className="w-px h-8 bg-text-dim/30 mx-2" />
              <span className="text-2xl font-light text-text-dim tracking-wider">STEAM</span>
            </div>
            <div className="text-sm text-text-dim max-w-[350px]">
              <p>&copy; 2023 Valve Corporation. All rights reserved.</p>
              <p className="mt-1">All trademarks are property of their respective owners in the US and other countries.</p>
              <p className="mt-1">VAT included in all prices where applicable.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-24">
            <nav className="flex flex-col gap-3">
              {footerLinks.column1.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-dim hover:text-text-main transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              {footerLinks.column2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-dim hover:text-text-main transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-dim hover:text-text-main transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-text-dim hover:text-text-main transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
