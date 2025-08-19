import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const TintShop = () => {
  return (
    <main>
      <Helmet>
        <title>Tint Shop Marketing That Gets Results — AutoAdvance Marketing</title>
        <meta name="description" content="Expert tint shop marketing agency specializing in window tinting digital marketing, auto tint shop advertising, and tint shop social media marketing for maximum ROI." />
        <link rel="canonical" href="https://autoadvancemarketing.com/tint-shop-marketing" />
        
        <meta property="og:title" content="Tint Shop Marketing That Gets Results — AutoAdvance Marketing" />
        <meta property="og:description" content="Expert tint shop marketing agency specializing in window tinting digital marketing, auto tint shop advertising, and tint shop social media marketing for maximum ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoadvancemarketing.com/tint-shop-marketing" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Tint Shop Marketing Services",
          "serviceType": "Digital Marketing",
          "description": "Expert tint shop marketing agency with window tinting digital marketing, auto tint shop advertising, and social media marketing solutions.",
          "provider": {
            "@type": "Organization",
            "name": "AutoAdvance Marketing"
          }
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <header className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-4 leading-tight">
            Tint Shop Marketing That Gets Results
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            We help tint shops attract more customers with Facebook, Instagram & Google Ads plus branded social media content.
          </p>
          <Button asChild className="btn-glow text-lg px-8 py-3">
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </header>

        {/* SEO-Optimized Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            As a dedicated <strong>tint shop marketing agency</strong>, AutoAdvance Marketing helps shops boost visibility and bring in consistent customers. Business owners looking for <strong>window tinting digital marketing</strong>, <strong>auto tint shop advertising</strong>, or <strong>tint shop social media marketing</strong> find our strategies deliver real results. From <strong>tint shop Google ads</strong> to powerful Facebook campaigns, we specialize in attracting high-quality leads and driving measurable growth.
          </p>
        </div>

        {/* What We Do Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-center mb-8">What We Do for Tint Shops</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {[
              "Run Facebook, Instagram & Google Ads",
              "Post 3 branded social updates per week", 
              "Build high-converting websites",
              "Provide monthly ROI & performance reports"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 border rounded-lg bg-card">
                <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-center mb-8">Why Choose AutoAdvance Marketing</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              "Automotive-focused marketing experts",
              "Transparent ROI reporting",
              "Proven campaigns in the auto industry"
            ].map((item) => (
              <div key={item} className="text-center p-6 border rounded-lg bg-card">
                <p className="text-sm sm:text-base font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-card border rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">Ready to Grow Your Tint Shop?</h2>
          <Button asChild className="btn-glow text-lg px-8 py-3">
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </section>
      </section>
    </main>
  );
};

export default TintShop;