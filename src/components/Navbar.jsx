import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Our Services", href: "#our_services" },
    { name: "Why choose us", href: "#why_choose" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Our Team", href: "#our_team" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-poppins border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Left Section: Logo and Navigation */}
          <div className="flex items-center space-x-12">
            {" "}
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/Revlabs_logo.png"
                alt="RevLabs"
                className="h-8 w-auto"
              />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-primary px-3 py-2 font-medium transition-colors duration-200 text-md"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>{" "}
          {/* Right Section: CTA Button */}
          <div className="hidden md:block ml-auto">
            <button className="bg-primary text-white hover:bg-primary-dark px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md">
              Get in touch
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-text-primary focus:outline-none focus:text-text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-text-secondary hover:text-primary hover:bg-secondary-dark rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-primary text-white hover:bg-primary-dark px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
