import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Check honeypot field
      const companyWebsite = formData.get('companyWebsite') as string;
      if (companyWebsite && companyWebsite.trim() !== '') {
        // Silently ignore spam submission
        setIsSubmitting(false);
        return;
      }

      // Extract form data
      const data = {
        name: formData.get('name') as string,
        businessName: formData.get('businessName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
      };

      // Validate required fields
      if (!data.name || !data.email || !data.phone || !data.message) {
        throw new Error('Please fill in all required fields');
      }

      // Validate message length
      if (data.message.length > 1000) {
        throw new Error('Message must be 1000 characters or less');
      }

      console.log('Contact form: invoking send-consultation with data', {
        name: data.name,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone,
        messageLength: data.message?.length,
        pageUrl: data.pageUrl,
        timestamp: data.timestamp,
      });

      // Call the edge function
      const { error } = await supabase.functions.invoke('send-consultation', {
        body: data,
      });

      console.log('Contact form: send-consultation completed', { error });

      if (error) {
        throw new Error(error.message || 'Failed to send consultation request');
      }

      // Success
      toast({
        title: "Thanks! We'll reach out within 24 hours.",
        description: `Your consultation request has been sent successfully.`,
      });

      // Reset form and redirect
      const form = e.currentTarget;
      if (form) {
        form.reset();
      }
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);

    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error.message || 'Failed to send your request. Please try again.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="container mx-auto px-4 py-12 sm:py-16">
        <header className="max-w-2xl mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight">Contact Our Specialists</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Get expert Facebook ads manager services and social media marketing agency solutions. Free consultation with a top-rated marketing agency near me.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5 border rounded-lg p-4 sm:p-5 md:p-6 bg-card">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">Start Today</h3>
            {/* Honeypot field - hidden from users */}
            <Input 
              name="companyWebsite" 
              autoComplete="off"
              tabIndex={-1}
              style={{ 
                position: 'absolute', 
                left: '-9999px', 
                width: '1px', 
                height: '1px', 
                opacity: 0 
              }}
              aria-hidden="true"
            />
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                <Input id="name" name="name" required autoComplete="name" className="h-10 sm:h-11 mt-1" />
              </div>
              <div>
                <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
                <Input id="businessName" name="businessName" autoComplete="organization" className="h-10 sm:h-11 mt-1" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" className="h-10 sm:h-11 mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                <Input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="h-10 sm:h-11 mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium">Message * <span className="text-xs text-muted-foreground">(max 1000 characters)</span></Label>
              <Textarea id="message" name="message" required maxLength={1000} className="min-h-[120px] sm:min-h-[140px] p-3 mt-1 text-sm" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="btn-glow w-full sm:w-auto text-sm sm:text-base px-6 py-3">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="hidden sm:inline">Sending...</span>
                  <span className="sm:hidden">Sending</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Book My Free Consultation</span>
                  <span className="sm:hidden">Book Consultation</span>
                </>
              )}
            </Button>
          </form>

          <aside className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
              <div className="border rounded-lg p-4 sm:p-5 md:p-6 bg-card flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">Contact Info</h3>
                <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
                  <div className="flex items-center gap-2"><Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> 
                    <span className="break-all">+1(313)-970-5903</span>
                  </div>
                  <div className="flex items-center gap-2"><Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> 
                    <span className="break-all">autoadvancem@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2"><Instagram size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> 
                    <span className="break-all">@autoadvancemarketing</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden flex-1 min-h-[200px] sm:min-h-[250px]">
                <iframe
                  title="Downtown Detroit Map"
                  src="https://maps.google.com/maps?q=Downtown%20Detroit%2C%20MI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contact;