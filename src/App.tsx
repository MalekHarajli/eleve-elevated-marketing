import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import TintShop from "./pages/industries/TintShop";
import CollisionRepair from "./pages/industries/CollisionRepair";
import OilChange from "./pages/industries/OilChange";
import TireShop from "./pages/industries/TireShop";
import CarDealership from "./pages/industries/CarDealership";
import Detailing from "./pages/industries/Detailing";
import BrakeShop from "./pages/industries/BrakeShop";
import TransmissionShop from "./pages/industries/TransmissionShop";
import WrapShop from "./pages/industries/WrapShop";
import AutoGlass from "./pages/industries/AutoGlass";
import CarAudio from "./pages/industries/CarAudio";
import CustomShop from "./pages/industries/CustomShop";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/tint-shop-marketing" element={<TintShop />} />
            <Route path="/collision-repair-marketing" element={<CollisionRepair />} />
            <Route path="/oil-change-marketing" element={<OilChange />} />
            <Route path="/tire-shop-marketing" element={<TireShop />} />
            <Route path="/car-dealership-marketing" element={<CarDealership />} />
            <Route path="/detailing-marketing" element={<Detailing />} />
            <Route path="/brake-shop-marketing" element={<BrakeShop />} />
            <Route path="/transmission-shop-marketing" element={<TransmissionShop />} />
            <Route path="/wrap-shop-marketing" element={<WrapShop />} />
            <Route path="/auto-glass-marketing" element={<AutoGlass />} />
            <Route path="/car-audio-marketing" element={<CarAudio />} />
            <Route path="/custom-shop-marketing" element={<CustomShop />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SiteFooter />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
