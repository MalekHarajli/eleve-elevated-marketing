import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load non-critical routes for code splitting
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load industry pages
const TintShop = lazy(() => import("./pages/industries/TintShop"));
const CollisionRepair = lazy(() => import("./pages/industries/CollisionRepair"));
const OilChange = lazy(() => import("./pages/industries/OilChange"));
const TireShop = lazy(() => import("./pages/industries/TireShop"));
const CarDealership = lazy(() => import("./pages/industries/CarDealership"));
const Detailing = lazy(() => import("./pages/industries/Detailing"));
const BrakeShop = lazy(() => import("./pages/industries/BrakeShop"));
const TransmissionShop = lazy(() => import("./pages/industries/TransmissionShop"));
const WrapShop = lazy(() => import("./pages/industries/WrapShop"));
const AutoGlass = lazy(() => import("./pages/industries/AutoGlass"));
const CarAudio = lazy(() => import("./pages/industries/CarAudio"));
const CustomShop = lazy(() => import("./pages/industries/CustomShop"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
          <SiteFooter />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
