import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Users, Layout, LineChart, Target, BarChart3, type LucideIcon } from "lucide-react";

const ServiceCard = ({
  Icon,
  title,
  points,
  ctaLabel,
}: {
  Icon: LucideIcon;
  title: string;
  points: string[];
  ctaLabel: string;
}) => (
  <article className="border rounded-lg p-4 sm:p-5 md:p-6 hover-scale bg-card">
    <div className="flex items-start gap-3 mb-4">
      <Icon className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
      <div className="min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold text-primary leading-tight">{title}</h3>
        {(title === "Premium Website Package" || title === "Basic Website Package") && (
          <p className="text-xs sm:text-sm text-white">(Add-On)</p>
        )}
      </div>
    </div>
    <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
    <div className="mt-6">
      <Button asChild className="btn-glow w-full sm:w-auto text-sm sm:text-base">
        <Link to="/contact">{ctaLabel}</Link>
      </Button>
    </div>
  </article>
);

const Services = () => {
  return (
    <main>
        <Helmet>
          <title>Services — SMMA, Facebook & Instagram Ads | AutoAdvance Marketing</title>
          <meta name="description" content="SMMA services: Meta ads management, Instagram marketing, and full-funnel strategy for growth." />
          <link rel="canonical" href="https://autoadvancemarketing.com/services" />

          {/* Open Graph */}
          <meta property="og:title" content="Services — SMMA, Facebook & Instagram Ads | AutoAdvance Marketing" />
          <meta property="og:description" content="SMMA services: Meta ads management, Instagram marketing, and full-funnel strategy for growth." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://autoadvancemarketing.com/services" />
          <meta property="og:image" content="https://autoadvancemarketing.com/favicon-48x48.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Services — SMMA, Facebook & Instagram Ads | AutoAdvance Marketing" />
          <meta name="twitter:description" content="SMMA services: Meta ads management, Instagram marketing, and full-funnel strategy for growth." />
          <meta name="twitter:image" content="https://autoadvancemarketing.com/favicon-48x48.png" />

          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Facebook Ads Manager Services", serviceType: "SMMA", description: "Expert Facebook ads manager with Meta advertising, Instagram marketing, and social media ads optimization" }},
              { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Social Media Marketing Agency", serviceType: "SMMA", description: "Full-service SMMA solutions including content creation, community management, and strategic growth" }},
              { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Digital Marketing Agency Services", serviceType: "Marketing Agency", description: "Complete marketing agency near me services with responsive design, SEO, and conversion optimization" }},
            ]
          })}</script>
        </Helmet>

      <section className="container mx-auto px-4 py-12 sm:py-16">
        <header className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="mb-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              AutoAdvance Marketing — Home
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold mb-3 sm:mb-4 leading-tight">SERVICES WE OFFER</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Premier social media marketing agency delivering expert Facebook ads manager services, Instagram marketing, and comprehensive SMMA solutions designed for maximum ROI.</p>
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <ServiceCard
            Icon={Megaphone}
            title="Meta Ads Management"
            points={[
              "Facebook & Instagram ad creation and management",
              "Advanced audience targeting to reach ready-to-buy customers",
              "Weekly optimization for maximum ROI",
              "Transparent performance tracking",
            ]}
            ctaLabel="Get Your Free Consultation"
          />
          <ServiceCard
            Icon={Users}
            title="Social Media Management"
            points={[
              "3 high-quality branded posts per week",
              "Engagement and seasonal campaign management",
              "Content designed to grow awareness and trust",
              "Monthly analytics reports",
            ]}
            ctaLabel="Get Your Free Consultation"
          />
          <ServiceCard
            Icon={Layout}
            title="Basic Website Package"
            points={[
              "1-page and multi-page website builds",
              "Responsive design",
              "Ongoing updates and maintenance",
              "Available as an add-on service for marketing clients",
            ]}
            ctaLabel="Get Your Custom Growth Plan"
          />
          <ServiceCard
            Icon={BarChart3}
            title="Premium Website Package"
            points={[
              "3-5 page professional website with advanced features",
              "Custom design with conversion optimization",
              "Priority maintenance & weekly updates",
              "Advanced SEO setup",
              "24/7 technical support and performance monitoring",
            ]}
            ctaLabel="Upgrade to Premium"
          />
        </div>

        <div className="mt-10 sm:mt-14 border rounded-lg p-4 sm:p-6 md:p-8 bg-card">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
              <Target className="text-primary h-5 w-5" />
              <span>Strategy</span>
              <BarChart3 className="text-primary h-5 w-5" />
              <span>Execution</span>
              <LineChart className="text-primary h-5 w-5" />
              <span>Results</span>
            </div>
            <div className="w-full md:w-auto md:ml-auto">
              <Button asChild className="btn-glow w-full md:w-auto text-sm sm:text-base">
                <Link to="/contact">
                  <span className="hidden sm:inline">Get Your Custom Growth Plan</span>
                  <span className="sm:hidden">Get Growth Plan</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
