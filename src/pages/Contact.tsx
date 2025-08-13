import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    toast({
      title: "Consultation booked!",
      description: `Thanks${name ? `, ${name}` : ''}! We'll reach out shortly to schedule your session.`,
    });
    e.currentTarget.reset();
  };

  return (
    <main>
        <Helmet>
          <title>Contact AutoAdvance Marketing — SMMA & Ads Manager</title>
          <meta name="description" content="Talk to our team about Facebook and Instagram ads. Serving Detroit and clients nationwide." />
          <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/contact'} />

          {/* Open Graph */}
          <meta property="og:title" content="Contact AutoAdvance Marketing — SMMA & Ads Manager" />
          <meta property="og:description" content="Talk to our team about Facebook and Instagram ads. Serving Detroit and clients nationwide." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/contact'} />
          <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact AutoAdvance Marketing — SMMA & Ads Manager" />
          <meta name="twitter:description" content="Talk to our team about Facebook and Instagram ads. Serving Detroit and clients nationwide." />
          <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/4e4a385a-969d-4ff6-b1e5-16f37c5f87d7.png` : 'https://eleve-marketing.example.com/logo.png'} />

          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AutoAdvance Marketing",
            description: "Leading SMMA agency and Facebook ads manager specializing in social media marketing agency services",
            url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
            areaServed: ["United States", "Detroit, MI"],
            serviceType: ["SMMA Services", "Facebook Ads Manager", "Instagram Marketing", "Social Media Marketing Agency"],
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+1(313)-970-5903",
              email: "autoadvancem@gmail.com",
              areaServed: ["United States", "Detroit, MI"],
              availableLanguage: ["English"]
            }]
          })}</script>
        </Helmet>

      <section className="container mx-auto py-16">
        <header className="max-w-2xl mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Contact Our SMMA Agency</h1>
          <p className="text-lg text-muted-foreground">Get expert Facebook ads manager services and social media marketing agency solutions. Free consultation with a top-rated marketing agency near me.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="space-y-5 border rounded-lg p-6 bg-card">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="business">Business Name</Label>
                <Input id="business" name="business" required autoComplete="organization" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required className="min-h-[140px]" />
            </div>
            <Button type="submit" className="btn-glow w-full md:w-auto">Book My Free Consultation</Button>
          </form>

          <aside className="space-y-6">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Phone size={16} /> +1(313)-970-5903</li>
                <li className="flex items-center gap-2"><Mail size={16} /> autoadvancem@gmail.com</li>
              </ul>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <iframe
                title="AutoAdvance Marketing — Detroit, MI"
                src="https://maps.google.com/maps?q=Detroit%2C%20MI&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;