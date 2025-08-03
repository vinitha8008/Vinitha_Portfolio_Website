import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // 👈 mobile toggle state

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Hobbies", path: "/hobbies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary">
              Vinitha Peddareddy
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)} // 👈 toggle menu
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile nav items */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)} // close menu on link click
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium transition-smooth text-center",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
