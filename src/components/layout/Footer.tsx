import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-stone-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none mb-4">
              Agency
            </h3>
            <p className="text-stone-400 max-w-sm leading-relaxed">
              A full-service digital studio crafting experiences that inspire,
              engage, and deliver measurable results.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
              Connect
            </h4>
            <p className="text-sm mb-2">hello@agency.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
