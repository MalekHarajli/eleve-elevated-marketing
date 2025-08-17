import { Link, NavLink } from "react-router-dom";

import { Instagram } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="AutoAdvance Marketing Home">
          <img src="/lovable-uploads/703de4ae-7ffc-45a2-82c7-dfafcecd712c.png" alt="AutoAdvance Marketing logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
          <span className="text-lg sm:text-xl font-heading font-semibold tracking-tight whitespace-nowrap relative">
            <span className="text-foreground">AutoAdvance Marketing</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={({ isActive }) => `story-link text-sm lg:text-base ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `story-link text-sm lg:text-base ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `story-link text-sm lg:text-base ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="md:hidden flex items-center gap-4">
            <NavLink to="/services" className={({ isActive }) => `text-xs ${isActive ? 'text-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors`}>Services</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-xs ${isActive ? 'text-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors`}>Contact</NavLink>
          </div>
          <a
            href="https://www.instagram.com/AutoAdvanceMarketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AutoAdvance Marketing on Instagram"
            title="AutoAdvance Marketing on Instagram"
            className="inline-flex text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
