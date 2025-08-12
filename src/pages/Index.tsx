import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-elevate.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>SMMA Agency | Facebook Ads Manager | Instagram Marketing Agency | Elevé Marketing</title>
        <meta name="description" content="Top SMMA agency specializing in Facebook ads manager services, Instagram marketing, and social media marketing agency solutions. ROI-focused marketing agency near me." />
        <meta name="keywords" content="SMMA, social media marketing agency, Facebook ads manager, Instagram marketing agency, marketing agency near me, digital marketing agency, social media ads, Meta ads manager" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elevé Marketing",
          description: "Leading SMMA agency and Facebook ads manager specializing in social media marketing agency services",
          url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
          serviceType: ["Social Media Marketing Agency", "Facebook Ads Manager", "Instagram Marketing", "SMMA Services", "Digital Marketing Agency"],
          areaServed: ["United States", "Detroit, MI"],
          sameAs: []
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
