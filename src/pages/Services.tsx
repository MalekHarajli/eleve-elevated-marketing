import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Users, Layout, LineChart, Target, BarChart3, type LucideIcon } from "lucide-react";

const ServiceCard = ({
  Icon,
  title,
  points,
}: {
  Icon: LucideIcon;
  title: string;
  points: string[];
}) => (
  <article className="border rounded-lg p-6 hover-scale bg-card">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
    <div className="mt-6">
      <Button asChild className="btn-glow">
        <Link to="/contact">Get Your Free Consultation</Link>
      </Button>
    </div>
  </article>
);

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>SMMA Services | Facebook Ads Manager | Social Media Marketing Agency | Elevé</title>
        <meta name="description" content="Professional SMMA agency services including Facebook ads manager, Instagram marketing, social media advertising, and digital marketing agency solutions for businesses." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/services'} />
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
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">SMMA Agency & Facebook Ads Manager Services</h1>
          <p className="text-lg text-muted-foreground">Premier social media marketing agency delivering expert Facebook ads manager services, Instagram marketing, and comprehensive SMMA solutions designed for maximum ROI.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ServiceCard
            Icon={Megaphone}
            title="Facebook Ads Manager"
            points={["Expert Facebook ads manager services","Instagram marketing campaigns","Meta advertising optimization","Advanced social media ads targeting"]}
          />
          <ServiceCard
            Icon={Users}
            title="SMMA Solutions"
            points={["Complete social media marketing agency services","Strategic SMMA growth systems","Content creation & community management","Marketing agency near me support"]}
          />
          <ServiceCard
            Icon={Layout}
            title="Digital Marketing Agency"
            points={["Full-service marketing agency solutions","SEO & conversion optimization","Professional web design","Ongoing digital marketing support"]}
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
