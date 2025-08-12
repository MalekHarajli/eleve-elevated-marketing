import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-elevate.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
        <Helmet>
          <title>Elevé Marketing — SMMA & Facebook Ads Manager</title>
          <meta name="description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />

          {/* Open Graph */}
          <meta property="og:title" content="Elevé Marketing — SMMA & Facebook Ads Manager" />
          <meta property="og:description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />
          <meta property="og:image" content={typeof window !== 'undefined' ? new URL(heroImage, window.location.origin).toString() : 'https://eleve-marketing.example.com/og.jpg'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Elevé Marketing — SMMA & Facebook Ads Manager" />
          <meta name="twitter:description" content="Top-tier social media marketing agency delivering ROI-focused Meta and Instagram ads. Book your free consultation." />
          <meta name="twitter:image" content={typeof window !== 'undefined' ? new URL(heroImage, window.location.origin).toString() : 'https://eleve-marketing.example.com/og.jpg'} />

          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Elevé Marketing",
            description: "SMMA and Facebook ads manager delivering ROI-focused campaigns.",
            url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
            logo: typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/350fe1e0-3c18-4a82-a450-310da93a1d13.png` : 'https://eleve-marketing.example.com/logo.png',
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
          alt="Modern, premium business background for Elevé Marketing"
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
      <section className="container mx-auto pb-16">
        <div className="border rounded-lg p-8 bg-card">
          <h2 className="text-2xl font-semibold mb-6">How We Drive Results</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground">
            <div className="text-center">
              <div className="text-foreground font-medium mb-1">Ads</div>
              <p className="max-w-[22ch]">Targeted Meta Ads reach ready-to-buy audiences.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary" />
            <div className="text-center">
              <div className="text-foreground font-medium mb-1">Content</div>
              <p className="max-w-[22ch]">Consistent, branded content that nurtures trust.</p>
            </div>
            <ArrowRight className="hidden md:block text-primary" />
            <div className="text-center">
              <div className="text-foreground font-medium mb-1">Measurable ROI</div>
              <p className="max-w-[22ch]">Transparent reporting tied to real business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto pb-24">
        <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Elevé took our local ads from break-even to profitable in 60 days.", name: "Alex P." },
            { quote: "Our socials finally reflect our brand — engagement is way up.", name: "Riley C." },
            { quote: "Clear strategy, seamless execution, and results we can measure.", name: "Morgan D." },
          ].map((t) => (
            <blockquote key={t.name} className="border rounded-lg p-6 bg-card hover-scale">
              <p className="mb-3">“{t.quote}”</p>
              <cite className="text-muted-foreground not-italic">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
