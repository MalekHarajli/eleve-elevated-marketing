import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-elevate.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight } from "lucide-react";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const Index = () => {
  return (
    <main>
        <Helmet>
          <title>AutoAdvance Marketing — SMMA & Facebook Ads Manager</title>
          <meta name="description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />

          {/* Open Graph */}
          <meta property="og:title" content="AutoAdvance Marketing — SMMA & Facebook Ads Manager" />
          <meta property="og:description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />
          <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AutoAdvance Marketing — SMMA & Facebook Ads Manager" />
          <meta name="twitter:description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
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
              telephone: "+1-313-970-5903",
              email: "EleveMarketing@gmail.com",
              availableLanguage: ["English"]
            }]
          })}</script>
        </Helmet>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroImage}
           alt="Modern, premium business background for AutoAdvance Marketing"
          className="w-full h-[70vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 overlay-soft" />
        <div className="absolute inset-0">
          <div className="container mx-auto h-full flex items-center">
            <div className="max-w-3xl animate-enter">
              <h1 className="text-5xl md:text-6xl font-semibold mb-4">SMMA Agency & Facebook Ads Manager</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Premier social media marketing agency specializing in Facebook ads manager services, Instagram marketing, and high-ROI digital campaigns.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button asChild className="btn-glow">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
                <Link to="/services" className="story-link">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <article className="border rounded-lg p-6 hover-scale bg-card">
            <BarChart3 className="text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Expert Facebook Ads Manager</h3>
            <p className="text-muted-foreground">Professional Facebook ads manager services with advanced Meta advertising strategies. Specialized Instagram marketing and social media ads optimization.</p>
          </article>
          <article className="border rounded-lg p-6 hover-scale bg-card">
            <Users className="text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Full-Service SMMA Solutions</h3>
            <p className="text-muted-foreground">Complete social media marketing agency services including content creation, community management, and strategic SMMA growth systems.</p>
          </article>
          <article className="border rounded-lg p-6 hover-scale bg-card">
            <Cog className="text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Marketing Agency Near Me</h3>
            <p className="text-muted-foreground">Your local digital marketing agency partner providing end-to-end marketing solutions, from strategy to execution and reporting.</p>
          </article>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="container mx-auto py-16">
          <h2 className="text-2xl font-semibold mb-8">How We Drive Results</h2>

          {/* Desktop: horizontal steps with gold connectors */}
          <div className="hidden md:flex items-stretch">
            {/* Step 1 */}
            <article className="flex-1 border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Strategy & Onboarding</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 1 — Strategy & Onboarding</div>
              <p className="text-muted-foreground">Every free consultation begins with understanding your goals, audience, and competition. We set up tracking tools, align on a custom marketing plan, and prepare your brand for high-impact advertising.</p>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Step 2 */}
            <article className="flex-1 border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We launch campaigns that get in front of ready-to-buy customers.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 2 — Targeted Ads</div>
              <p className="text-muted-foreground">We create and manage high-ROI Meta Ads campaigns using precise targeting, compelling creative, and weekly optimization to maximize your budget.</p>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Step 3 */}
            <article className="flex-1 border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We keep your audience engaged and growing.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 3 — Consistent Content</div>
              <p className="text-muted-foreground">Our team delivers 3 high-quality, branded social media posts per week, designed to increase awareness, engagement, and trust with your followers.</p>
            </article>
            <div className="flex items-center px-4"><ArrowRight className="text-brand-gold" aria-hidden="true" /></div>

            {/* Step 4 */}
            <article className="flex-1 border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We refine, improve, and prove results.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 4 — Optimization & Reporting</div>
              <p className="text-muted-foreground">We continuously monitor and adjust campaigns for better performance. Monthly transparent reports show exactly how your marketing translates to measurable business outcomes.</p>
            </article>
          </div>

          {/* Mobile: stacked steps with vertical connectors */}
          <div className="md:hidden flex flex-col">
            <article className="border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">Strategy & Onboarding</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 1 — Strategy & Onboarding</div>
              <p className="text-muted-foreground">Every free consultation begins with understanding your goals, audience, and competition. We set up tracking tools, align on a custom marketing plan, and prepare your brand for high-impact advertising.</p>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We launch campaigns that get in front of ready-to-buy customers.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 2 — Targeted Ads</div>
              <p className="text-muted-foreground">We create and manage high-ROI Meta Ads campaigns using precise targeting, compelling creative, and weekly optimization to maximize your budget.</p>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We keep your audience engaged and growing.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 3 — Consistent Content</div>
              <p className="text-muted-foreground">Our team delivers 3 high-quality, branded social media posts per week, designed to increase awareness, engagement, and trust with your followers.</p>
            </article>
            <div className="flex justify-center my-3"><ArrowRight className="text-brand-gold rotate-90" aria-hidden="true" /></div>

            <article className="border rounded-lg p-6 bg-card">
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">We refine, improve, and prove results.</div>
              <div className="text-foreground font-semibold text-lg mb-2">Step 4 — Optimization & Reporting</div>
              <p className="text-muted-foreground">We continuously monitor and adjust campaigns for better performance. Monthly transparent reports show exactly how your marketing translates to measurable business outcomes.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="container mx-auto pb-24">
          <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>
          <ReviewsCarousel />
        </div>
      </section>
    </main>
  );
};

export default Index;
