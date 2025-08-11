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
        <title>Contact | Elevé Marketing — Book Your Free Consultation</title>
        <meta name="description" content="Let’s grow your business in Detroit. Book your free consultation today to see how Elevé Marketing can elevate your brand with Meta Ads and social media." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://eleve-marketing.example.com/contact'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elevé Marketing",
          url: typeof window !== 'undefined' ? window.location.origin : 'https://eleve-marketing.example.com',
          areaServed: "Detroit, MI",
          contactPoint: [{
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+1-313-970-5903",
            email: "EleveMarketing@gmail.com",
            areaServed: "Detroit, MI",
            availableLanguage: ["English"]
          }]
        })}</script>
      </Helmet>

      <section className="container mx-auto py-16">
        <header className="max-w-2xl mb-8">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Let’s Grow Your Business</h1>
          <p className="text-lg text-muted-foreground">Book your free consultation today and find out how Elevé Marketing can elevate your brand in Detroit.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="space-y-5 border rounded-lg p-6 bg-card">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div>
                <Label htmlFor="business">Business Name</Label>
                <Input id="business" name="business" required placeholder="Elevé Cafe" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required placeholder="Tell us about your goals…" className="min-h-[140px]" />
            </div>
            <Button type="submit" className="btn-glow w-full md:w-auto">Book My Free Consultation</Button>
          </form>

          <aside className="space-y-6">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Phone size={16} /> (313) 970-5903</li>
                <li className="flex items-center gap-2"><Mail size={16} /> EleveMarketing@gmail.com</li>
              </ul>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <iframe
                title="Elevé Marketing — Detroit, MI"
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
