import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-bmw-bright.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight } from "lucide-react";
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
          <meta property="og:image" content="https://autoadvancemarketing.com/favicon-48x48.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AutoAdvance Marketing (Auto Advance Marketing) — Official Site, Detroit MI" />
          <meta name="twitter:description" content="AutoAdvance Marketing helps Detroit businesses grow with SMMA and data-driven Facebook & Instagram ads, weekly content, and clear ROI reporting." />
          <meta name="twitter:image" content="https://autoadvancemarketing.com/favicon-48x48.png" />

          {/* Structured Data - Organization + WebSite */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "WebSite"],
            name: "AutoAdvance Marketing",
            alternateName: ["Auto Advance Marketing", "AutoAdvanceMarketing"],
            url: "https://autoadvancemarketing.com/",
            logo: "https://autoadvancemarketing.com/favicon-48x48.png",
            sameAs: []
          })}</script>
        </Helmet>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
           alt="High-end BMW front view with bright headlight for AutoAdvance Marketing"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 overlay-soft" />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animate-enter">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 leading-tight">AutoAdvance Marketing</h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">Also known as Auto Advance Marketing (same company)</p>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 leading-tight">Marketing made easy.<br /><span style={{color: "hsl(var(--primary))"}} className="animate-glow-pulse">SMMA</span><br />High-ROI Ads</p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 sm:mb-8">
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
          <h2 className="text-2xl font-semibold text-primary mb-8">How We Drive Results</h2>

          {/* Desktop: horizontal steps with gold connectors */}
          <div className="hidden md:flex items-stretch">
            {/* Strategy & Onboarding */}
            <article className="flex-1 border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Strategy & Onboarding
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Custom marketing</div>
                <div>- Target audience</div>
                <div>- Tracking setup</div>
                <div>- Goals</div>
              </div>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Targeted Ads */}
            <article className="flex-1 border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Targeted Ads
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Precision targeting</div>
                <div>- Instagram Ads</div>
                <div>- Facebook Ads</div>
                <div>- Google Ads</div>
              </div>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Consistent Content */}
            <article className="flex-1 border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Consistent Content
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- 3 posts per week</div>
                <div>- More engagement</div>
                <div>- Increase growth</div>
                <div>- Build trust</div>
              </div>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Optimization & Reporting */}
            <article className="flex-1 border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Optimization & Reporting
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Ongoing tracking</div>
                <div>- Improvements</div>
                <div>- Refinements</div>
                <div>- Monthly ROI</div>
              </div>
            </article>
          </div>

          {/* Mobile: stacked steps with vertical connectors */}
          <div className="md:hidden flex flex-col">
            <article className="border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Strategy & Onboarding
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Custom marketing</div>
                <div>- Target audience</div>
                <div>- Tracking setup</div>
                <div>- Goals</div>
              </div>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Targeted Ads
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Precision targeting</div>
                <div>- Instagram Ads</div>
                <div>- Facebook Ads</div>
                <div>- Google Ads</div>
              </div>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Consistent Content
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- 3 posts per week</div>
                <div>- More engagement</div>
                <div>- Increase growth</div>
                <div>- Build trust</div>
              </div>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Optimization & Reporting
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Ongoing tracking</div>
                <div>- Improvements</div>
                <div>- Refinements</div>
                <div>- Monthly ROI</div>
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
