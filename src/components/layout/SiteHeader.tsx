import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Elevé Marketing Home">
          <span className="text-xl font-semibold tracking-tight">Elevé Marketing</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `story-link ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild className="btn-glow">
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
