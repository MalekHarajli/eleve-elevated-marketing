import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 whitespace-nowrap">
            <img src="/lovable-uploads/17064b5e-75fa-41f7-9c8c-d6125f47bcef.png" alt="AutoAdvance Marketing logo" className="h-6 w-6 object-contain" />
            <Link to="/" className="relative hover:text-primary transition-colors">
              <span className="text-foreground">AutoAdvance Marketing</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
            </Link>
          </h3>
          <p className="text-muted-foreground mt-2">
            Helping Detroit businesses rise above the noise with <br />data-driven Meta Ads and engaging social content.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-primary mb-3">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="story-link">Home</Link></li>
            <li><Link to="/services" className="story-link">Services</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-primary mb-3">Contact</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={16} /> +1(313)-970-5903</li>
            <li className="flex items-center gap-2"><Mail size={16} /> autoadvancem@gmail.com</li>
            <li className="flex items-center gap-2"><Instagram size={16} /> @autoadvancemarketing</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {year} AutoAdvance Marketing. All rights reserved.</span>
            <span>Designed for performance and growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
