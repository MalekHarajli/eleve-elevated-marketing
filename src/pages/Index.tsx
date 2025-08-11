import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-elevate.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Users, Cog, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Marketing Elevated | Elevé Marketing — Social Media Marketing & Meta Ads</title>
        <meta name="description" content="Elevé Marketing: social media marketing and Meta Ads agency helping local businesses grow with high-ROI ad campaigns and consistent content." />
        <meta name="keywords" content="social media marketing, advertising agency, Meta Ads, local business growth" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elevé Marketing",
          url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
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
              <h1 className="text-5xl md:text-6xl font-semibold mb-4">Marketing Elevated.</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Helping brands rise above the noise through data-driven advertising and impactful social media.
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
            <h3 className="text-xl font-semibold mb-2">High-ROI Ad Campaigns</h3>
            <p className="text-muted-foreground">Meta Ads built to convert. We obsess over targeting, creative, and optimization to maximize return.</p>
          </article>
          <article className="border rounded-lg p-6 hover-scale bg-card">
            <Users className="text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Consistent Social Media Growth</h3>
            <p className="text-muted-foreground">Stay top-of-mind with engaging, on-brand content that builds community and drives action.</p>
          </article>
          <article className="border rounded-lg p-6 hover-scale bg-card">
            <Cog className="text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">Done-for-You Marketing Systems</h3>
            <p className="text-muted-foreground">From strategy to reporting, we set up the systems so you can focus on running your business.</p>
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
