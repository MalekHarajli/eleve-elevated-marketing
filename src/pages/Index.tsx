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
          <title>High-Performance Ads & Social Media Growth | AutoAdvance Marketing</title>
          <meta name="description" content="Social media marketing agency for Facebook, Instagram, and Google ads management, branded content, and high-converting websites. Book a free consultation." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />

          {/* Open Graph */}
          <meta property="og:title" content="High-Performance Ads & Social Media Growth | AutoAdvance Marketing" />
          <meta property="og:description" content="Social media marketing agency for Facebook, Instagram, and Google ads management, branded content, and high-converting websites. Book a free consultation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />
          <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="High-Performance Ads & Social Media Growth | AutoAdvance Marketing" />
          <meta name="twitter:description" content="Social media marketing agency for Facebook, Instagram, and Google ads management, branded content, and high-converting websites. Book a free consultation." />
          <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AutoAdvance Marketing",
            description: "SMMA and Facebook ads manager delivering ROI-focused campaigns.",
            url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
            logo: typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png',
            areaServed: ["United States", "Detroit, MI"],
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+1(313)-970-5903",
              email: "autoadvancem@gmail.com",
              availableLanguage: ["English"]
            }]
          })}</script>
        </Helmet>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
           alt="High-end BMW front view with bright headlight for AutoAdvance Marketing"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 overlay-soft" />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl animate-enter">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">Marketing made easy.<br /><span style={{color: "hsl(var(--primary))"}} className="animate-glow-pulse">SMMA</span><br />High-ROI Ads</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Facebook, Instagram, and Google Ads & Socials
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button asChild className="btn-glow w-full sm:w-auto">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 pt-16 pb-8">
        <h2 className="text-2xl font-semibold text-primary mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <article className="border rounded-lg p-5 sm:p-6 hover-scale bg-card">
            <BarChart3 className="text-brand-gold mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">Targeted Ad Campaign Management</h3>
            <p className="text-muted-foreground">Expert management of Facebook, Instagram, and Google Ads. We create precision-targeted campaigns, optimize weekly for maximum ROI, and reach ready-to-buy customers with compelling ad creative.</p>
          </article>
          <article className="border rounded-lg p-5 sm:p-6 hover-scale bg-card">
            <Users className="text-brand-gold mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">Social Media Management & Growth</h3>
            <p className="text-muted-foreground">Consistent, branded content to grow your audience and build trust. Includes 3 high-quality posts per week, engagement strategies, and seasonal campaigns to keep your brand top-of-mind.</p>
          </article>
          <article className="border rounded-lg p-5 sm:p-6 hover-scale bg-card">
            <Cog className="text-brand-gold mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">Website Creation & Maintenance (Add-On)</h3>
            <p className="text-muted-foreground">Custom, SEO-friendly websites designed to convert visitors into customers. Includes responsive design, ongoing maintenance, and updates to keep your online presence fresh.</p>
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
                <div>- Goals</div>
                <div>- Target audience</div>
                <div>- Custom marketing</div>
                <div>- Tracking setup</div>
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
                <div>- Facebook Ads</div>
                <div>- Instagram Ads</div>
                <div>- Google Ads</div>
                <div>- Precision targeting</div>
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
                <div>- Increase growth</div>
                <div>- More engagement</div>
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
                <div>- Refinements</div>
                <div>- Improvements</div>
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
                <div>- Goals</div>
                <div>- Target audience</div>
                <div>- Custom marketing</div>
                <div>- Tracking setup</div>
              </div>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card flex flex-col justify-center text-center">
              <div className="text-foreground font-semibold text-lg mb-3 relative">
                Targeted Ads
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              </div>
              <div className="text-muted-foreground">
                <div>- Facebook Ads</div>
                <div>- Instagram Ads</div>
                <div>- Google Ads</div>
                <div>- Precision targeting</div>
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
                <div>- Increase growth</div>
                <div>- More engagement</div>
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
                <div>- Refinements</div>
                <div>- Improvements</div>
                <div>- Monthly ROI</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="container mx-auto px-4 pt-8 pb-24">
          <h2 className="text-2xl font-semibold text-primary mb-6">What Clients Say</h2>
          <ReviewsCarousel />
        </div>
      </section>
    </main>
  );
};

export default Index;
