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
  <article className="border rounded-lg p-6 hover-scale bg-card">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-primary" />
      <div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        {(title === "Premium Website Package" || title === "Basic Website Package") && (
          <p className="text-sm text-white">(Add-On)</p>
        )}
      </div>
    </div>
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
    <div className="mt-6">
      <Button asChild className="btn-glow">
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
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/services'} />

          {/* Open Graph */}
          <meta property="og:title" content="Services — SMMA, Facebook & Instagram Ads | AutoAdvance Marketing" />
          <meta property="og:description" content="SMMA services: Meta ads management, Instagram marketing, and full-funnel strategy for growth." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/services'} />
          <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Services — SMMA, Facebook & Instagram Ads | AutoAdvance Marketing" />
          <meta name="twitter:description" content="SMMA services: Meta ads management, Instagram marketing, and full-funnel strategy for growth." />
          <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

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

      <section className="container mx-auto py-16">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">SERVICES WE OFFER</h1>
          <p className="text-lg text-muted-foreground">Premier social media marketing agency delivering expert Facebook ads manager services, Instagram marketing, and comprehensive SMMA solutions designed for maximum ROI.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
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

        <div className="mt-14 border rounded-lg p-8 bg-card">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Target className="text-primary" />
              <span>Strategy</span>
              <BarChart3 className="text-primary" />
              <span>Execution</span>
              <LineChart className="text-primary" />
              <span>Results</span>
            </div>
            <div className="md:ml-auto">
              <Button asChild className="btn-glow">
                <Link to="/contact">Get Your Custom Growth Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
