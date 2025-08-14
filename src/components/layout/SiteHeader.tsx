import { Link, NavLink } from "react-router-dom";

import { Instagram } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="AutoAdvance Marketing Home">
          <img src="/lovable-uploads/703de4ae-7ffc-45a2-82c7-dfafcecd712c.png" alt="AutoAdvance Marketing logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-heading font-semibold tracking-tight whitespace-nowrap relative">
            <span className="text-foreground">Auto Advance</span>
            <span style={{color: "hsl(var(--primary))"}}> Marketing</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.instagram.com/AutoAdvanceMarketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AutoAdvance Marketing on Instagram"
            title="AutoAdvance Marketing on Instagram"
            className="inline-flex text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
