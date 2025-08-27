import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 sm:py-10 px-4 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 whitespace-nowrap">
            <img 
              src="/lovable-uploads/a1dc12e6-6865-40ce-bd26-6da442cf8c21.png" 
              alt="AutoAdvance Marketing logo" 
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain" 
              loading="lazy"
            />
            <Link to="/" className="relative hover:text-primary transition-colors">
              <span className="text-foreground text-sm sm:text-base">AutoAdvance <span className="text-primary">Marketing</span></span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
            </Link>
          </h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Helping Detroit businesses rise above the noise with data-driven Meta Ads and engaging social content.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-primary mb-3 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
            <li><Link to="/" className="story-link">Home</Link></li>
            <li><Link to="/services" className="story-link">Services</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-primary mb-3 text-sm sm:text-base">Contact</h4>
          <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
            <li className="flex items-center gap-2"><Phone size={14} className="sm:w-4 sm:h-4" /> +1(313)-970-5903</li>
            <li className="flex items-center gap-2"><Mail size={14} className="sm:w-4 sm:h-4" /> autoadvancem@gmail.com</li>
            <li className="flex items-center gap-2"><Instagram size={14} className="sm:w-4 sm:h-4" /> @autoadvancemarketing</li>
            <li className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex items-center justify-center text-xs sm:text-sm font-bold">T</span>
              @autoadvancemarketing
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {year} AutoAdvance <span className="text-primary">Marketing</span>. All rights reserved.</span>
            <span>Designed for performance and growth.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
