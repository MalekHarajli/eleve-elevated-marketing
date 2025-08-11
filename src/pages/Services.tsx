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
        <title>Services | Elevé Marketing — Social Media Marketing & Meta Ads</title>
        <meta name="description" content="Growth-focused services: Meta Ads management, social media management, and website creation. Book a free consultation for your custom growth plan." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/services'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Meta Ads Management", serviceType: "Advertising", description: "Audience targeting, creative & copy, weekly optimization, reporting" }},
            { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Social Media Management", serviceType: "Social Media", description: "3 branded posts/week, seasonal campaigns, engagement, analytics" }},
            { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Website Creation & Maintenance", serviceType: "Web Design", description: "Responsive design, SEO setup, conversion pages, monthly upkeep" }},
          ]
        })}</script>
      </Helmet>

      <section className="container mx-auto py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Growth-Focused Marketing Services</h1>
          <p className="text-lg text-muted-foreground">We deliver growth-focused marketing services designed to bring fast results and long-term retention. Get your custom growth plan — no pricing page, just strategy.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ServiceCard
            Icon={Megaphone}
            title="Meta Ads Management"
            points={["Audience targeting & segmentation","High-converting creative & copy","Weekly optimization","Transparent reporting"]}
          />
          <ServiceCard
            Icon={Users}
            title="Social Media Management"
            points={["3 branded posts/week","Seasonal campaigns","Community engagement","Monthly analytics"]}
          />
          <ServiceCard
            Icon={Layout}
            title="Website Creation & Maintenance"
            points={["Responsive design","SEO setup","Conversion-focused pages","Monthly upkeep"]}
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
