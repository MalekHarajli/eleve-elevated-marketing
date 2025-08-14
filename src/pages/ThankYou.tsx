import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | AutoAdvance</title>
        <meta name="description" content="Thank you for your consultation request. We'll get back to you within 24 hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Thank You!</h1>
            <p className="text-muted-foreground">
              We've received your consultation request and will reach out within 24 hours.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Button asChild className="w-full">
              <Link to="/">Back to Home</Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYou;