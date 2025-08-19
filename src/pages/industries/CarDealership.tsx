import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CarDealership = () => {
  return (
    <main>
      <Helmet>
        <title>Car Dealership Marketing That Gets Results — AutoAdvance Marketing</title>
        <meta name="description" content="Trusted car dealership marketing agency specializing in dealership digital marketing, used car dealership advertising, and Google ads for dealerships." />
        <link rel="canonical" href="https://autoadvancemarketing.com/car-dealership-marketing" />
        
        <meta property="og:title" content="Car Dealership Marketing That Gets Results — AutoAdvance Marketing" />
        <meta property="og:description" content="Trusted car dealership marketing agency specializing in dealership digital marketing, used car dealership advertising, and Google ads for dealerships." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://autoadvancemarketing.com/car-dealership-marketing" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Car Dealership Marketing Services",
          "serviceType": "Digital Marketing",
          "description": "Expert car dealership marketing agency with dealership digital marketing, used car dealership advertising, and Google ads for dealerships.",
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
            Car Dealership Marketing That Gets Results
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            We help car dealerships attract more customers with Facebook, Instagram & Google Ads plus branded social media content.
          </p>
          <Button asChild className="btn-glow text-lg px-8 py-3">
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </header>

        {/* SEO-Optimized Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dealerships rely on AutoAdvance Marketing as their trusted <strong>car dealership marketing agency</strong>. We help auto retailers scale with <strong>dealership digital marketing</strong>, <strong>used car dealership advertising</strong>, and <strong>Google ads for dealerships</strong>. From <strong>Facebook ads for car sales</strong> to optimized websites, our campaigns are designed to increase leads, test-drives, and vehicle sales.
          </p>
        </div>

        {/* What We Do Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-center mb-8">What We Do for Car Dealerships</h2>
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
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-4">Ready to Grow Your Car Dealership?</h2>
          <Button asChild className="btn-glow text-lg px-8 py-3">
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </section>
      </section>
    </main>
  );
};

export default CarDealership;