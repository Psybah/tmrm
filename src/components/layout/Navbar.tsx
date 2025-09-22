
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="TMRM Logo" className="h-8" />
            <span className="ml-2 text-sm font-medium hidden md:block">Jamuhiyat Jalalullahi Society of Nigeria</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-tmrm-green hover:text-tmrm-green-dark focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "absolute left-0 right-0 z-10 flex-col items-center px-4 pb-4 bg-white border-b md:static md:z-auto md:flex md:flex-row md:border-none md:pb-0 transition-all duration-300 ease-in-out",
            isOpen ? "top-full opacity-100" : "top-[-490px] md:opacity-100 opacity-0 md:top-0"
          )}
        >
          <nav className="flex flex-col w-full mt-4 space-y-2 md:mt-0 md:flex-row md:space-y-0 md:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.path)
                    ? "bg-tmrm-green/10 text-tmrm-green"
                    : "text-gray-700 hover:bg-tmrm-green/10 hover:text-tmrm-green"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex mt-4 md:mt-0 w-full md:w-auto">
            <Button
              asChild
              className="w-full md:w-auto bg-tmrm-gold hover:bg-tmrm-gold-light text-white"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
