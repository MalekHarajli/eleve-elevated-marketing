import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <img src="/lovable-uploads/350fe1e0-3c18-4a82-a450-310da93a1d13.png" alt="Elevé Marketing logo" className="h-6 w-6 object-contain" />
            Elevé Marketing
          </h3>
          <p className="text-muted-foreground mt-2">
            Helping Detroit businesses rise above the noise with data-driven Meta Ads and engaging social content.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="story-link">Home</Link></li>
            <li><Link to="/services" className="story-link">Services</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={16} /> (313) 970-5903</li>
            <li className="flex items-center gap-2"><Mail size={16} /> EleveMarketing@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {year} Elevé Marketing. All rights reserved.</span>
          <span>Designed for performance and growth.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
