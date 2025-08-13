import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="AutoAdvance Marketing Home">
          <img src="/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png" alt="AutoAdvance Marketing logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-semibold tracking-tight whitespace-nowrap">AutoAdvance Marketing</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
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
            className="hidden lg:inline-flex text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram />
            <span className="sr-only">Instagram</span>
          </a>
          <Button asChild className="btn-glow">
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
