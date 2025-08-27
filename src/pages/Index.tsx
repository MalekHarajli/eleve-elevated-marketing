import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-bmw-bright.jpg";
import heroBmwOptimized from "@/assets/hero-bmw-optimized.webp";
import automotiveAI from "@/assets/automotive-ai-analytics.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight, Target, Megaphone, Calendar, TrendingUp } from "lucide-react";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const Index = () => {
  return (
    <main>
        <Helmet>
          <title>AutoAdvance Marketing (Auto Advance Marketing) — Official Site, Detroit MI</title>
          <meta name="description" content="AutoAdvance Marketing helps Detroit businesses grow with SMMA and data-driven Facebook & Instagram ads, weekly content, and clear ROI reporting." />
          <link rel="canonical" href="https://autoadvancemarketing.com/" />

          {/* Open Graph */}
          <meta property="og:title" content="AutoAdvance Marketing (Auto Advance Marketing) — Official Site, Detroit MI" />
          <meta property="og:description" content="AutoAdvance Marketing helps Detroit businesses grow with SMMA and data-driven Facebook & Instagram ads, weekly content, and clear ROI reporting." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://autoadvancemarketing.com/" />
          <meta property="og:image" content="https://autoadvancemarketing.com/lovable-uploads/a1dc12e6-6865-40ce-bd26-6da442cf8c21.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AutoAdvance Marketing (Auto Advance Marketing) — Official Site, Detroit MI" />
          <meta name="twitter:description" content="AutoAdvance Marketing helps Detroit businesses grow with SMMA and data-driven Facebook & Instagram ads, weekly content, and clear ROI reporting." />
          <meta name="twitter:image" content="https://autoadvancemarketing.com/lovable-uploads/a1dc12e6-6865-40ce-bd26-6da442cf8c21.png" />

          {/* Structured Data - Organization + WebSite */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "WebSite"],
            name: "AutoAdvance Marketing",
            alternateName: ["Auto Advance Marketing", "AutoAdvanceMarketing"],
            url: "https://autoadvancemarketing.com/",
            logo: "https://autoadvancemarketing.com/lovable-uploads/a1dc12e6-6865-40ce-bd26-6da442cf8c21.png",
            sameAs: []
          })}</script>
        </Helmet>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
          alt="High-end BMW front view with bright headlight for AutoAdvance Marketing"
          className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 overlay-soft" />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animate-enter">
              <p className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight text-muted-foreground mb-3 sm:mb-4 leading-tight">Marketing made easy.<br /><span style={{color: "hsl(var(--primary))"}} className="animate-glow-pulse">SMMA</span><br />High-ROI Ads</p>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 sm:mb-8">
                Facebook, Instagram, and Google Ads & Socials
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild className="btn-glow w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6 sm:mb-8 text-center sm:text-left">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <article className="border rounded-lg p-4 sm:p-5 md:p-6 hover-scale bg-card">
            <BarChart3 className="text-primary mb-3 h-6 w-6" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Targeted Ad Campaign Management</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Expert management of Facebook, Instagram, and Google Ads. We create precision-targeted campaigns, optimize weekly for maximum ROI, and reach ready-to-buy customers with compelling ad creative.</p>
          </article>
          <article className="border rounded-lg p-4 sm:p-5 md:p-6 hover-scale bg-card">
            <Users className="text-primary mb-3 h-6 w-6" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Social Media Management & Growth</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Consistent, branded content to grow your audience and build trust. Includes 3 high-quality posts per week, engagement strategies, and seasonal campaigns to keep your brand top-of-mind.</p>
          </article>
          <article className="border rounded-lg p-4 sm:p-5 md:p-6 hover-scale bg-card">
            <Cog className="text-primary mb-3 h-6 w-6" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight">Website Creation & Maintenance (Add-On)</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Custom, SEO-friendly websites designed to convert visitors into customers. Includes responsive design, ongoing maintenance, and updates to keep your online presence fresh.</p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="container mx-auto px-4 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">How We Drive Results</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Our proven 4-step process transforms automotive businesses through strategic digital marketing, delivering measurable growth and ROI.</p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={automotiveAI}
                alt="Automotive AI analytics with floating data nodes and luxury car wireframe technology"
                className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover rounded-lg"
                loading="lazy"
                fetchPriority="low"
                width="380"
                height="285"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Desktop: horizontal steps with visual icons */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {/* Strategy & Onboarding */}
            <article className="relative border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Strategy & Setup</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Custom Strategy</div>
                  <div>Audience Research</div>
                  <div>Goal Setting</div>
                </div>
              </div>
              {/* Connector */}
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="text-primary w-6 h-6" />
              </div>
            </article>

            {/* Targeted Ads */}
            <article className="relative border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Targeted Ads</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Meta Ads</div>
                  <div>Google Ads</div>
                  <div>Precision Targeting</div>
                </div>
              </div>
              {/* Connector */}
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="text-primary w-6 h-6" />
              </div>
            </article>

            {/* Consistent Content */}
            <article className="relative border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Content Creation</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>3 Posts Weekly</div>
                  <div>Brand Building</div>
                  <div>Engagement Growth</div>
                </div>
              </div>
              {/* Connector */}
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="text-primary w-6 h-6" />
              </div>
            </article>

            {/* Optimization & Reporting */}
            <article className="border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Optimization</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Performance Tracking</div>
                  <div>Monthly Reports</div>
                  <div>ROI Optimization</div>
                </div>
              </div>
            </article>
          </div>

          {/* Mobile: stacked steps with visual icons */}
          <div className="md:hidden space-y-4">
            <article className="border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Strategy & Setup</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Custom Strategy</div>
                  <div>Audience Research</div>
                  <div>Goal Setting</div>
                </div>
              </div>
            </article>
            <div className="flex justify-center"><ArrowRight className="text-primary rotate-90 w-6 h-6" /></div>

            <article className="border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Megaphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Targeted Ads</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Meta Ads</div>
                  <div>Google Ads</div>
                  <div>Precision Targeting</div>
                </div>
              </div>
            </article>
            <div className="flex justify-center"><ArrowRight className="text-primary rotate-90 w-6 h-6" /></div>

            <article className="border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Content Creation</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>3 Posts Weekly</div>
                  <div>Brand Building</div>
                  <div>Engagement Growth</div>
                </div>
              </div>
            </article>
            <div className="flex justify-center"><ArrowRight className="text-primary rotate-90 w-6 h-6" /></div>

            <article className="border rounded-lg p-6 bg-card hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Optimization</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <div>Performance Tracking</div>
                  <div>Monthly Reports</div>
                  <div>ROI Optimization</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="container mx-auto px-4 pt-6 sm:pt-8 pb-16 sm:pb-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6 text-center sm:text-left">What Clients Say</h2>
          <ReviewsCarousel />
        </div>
      </section>
    </main>
  );
};

export default Index;
