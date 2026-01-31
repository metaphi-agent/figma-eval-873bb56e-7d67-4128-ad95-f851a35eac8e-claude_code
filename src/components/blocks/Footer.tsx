import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#171a21] text-[--color-text-dim] mt-auto">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#66737e] flex items-center justify-center rounded">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" className="text-white">
                  <rect width="32" height="32" rx="4" fill="#66737e"/>
                  <text x="16" y="22" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">V</text>
                </svg>
              </div>
              <svg width="80" height="32" viewBox="0 0 80 32" fill="currentColor" className="text-[#66737e]">
                <text x="0" y="24" fontSize="20" fontWeight="bold" fill="currentColor">STEAM</text>
              </svg>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex gap-16">
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Valve
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-white transition-colors">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/steamworks" className="hover:text-white transition-colors">
                    Steamworks
                  </Link>
                </li>
                <li>
                  <Link to="/distribution" className="hover:text-white transition-colors">
                    Steam Distribution
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal" className="hover:text-white transition-colors">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link to="/ssa" className="hover:text-white transition-colors">
                    Steam Subscriber Agreement
                  </Link>
                </li>
                <li>
                  <Link to="/refunds" className="hover:text-white transition-colors">
                    Refunds
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-end">
            <a
              href="https://facebook.com/steam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm2.5 10h-1.5v5h-2v-5h-1V8h1V7c0-1.5.5-2.5 2.5-2.5h1.5v2H12c-.5 0-.5.5-.5 1v.5h1.5l-.5 2z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/steam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
