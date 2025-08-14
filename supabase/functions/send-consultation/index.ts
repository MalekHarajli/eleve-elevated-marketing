import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  businessName?: string;
  email: string;
  phone: string;
  message: string;
  pageUrl: string;
  timestamp: string;
  companyWebsite?: string; // honeypot field
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body: ConsultationRequest = await req.json();
    console.log("Received consultation request:", { ...body, companyWebsite: body.companyWebsite ? "[HONEYPOT FILLED]" : "[EMPTY]" });

    // Honeypot check - silently drop if filled
    if (body.companyWebsite && body.companyWebsite.trim() !== "") {
      console.log("Honeypot triggered, silently dropping request");
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate required fields
    const { name, email, phone, message } = body;
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields: name, email, phone, message" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate message length
    if (message.length > 1000) {
      return new Response(JSON.stringify({ error: "Message must be 1000 characters or less" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Check for Resend API key
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email
    const emailSubject = `New Consultation — ${name}${body.businessName ? ` (${body.businessName})` : ''}`;
    const emailBody = `Name: ${name}
Business: ${body.businessName || 'Not provided'}
Email: ${email}
Phone: ${phone}

Message:
${message}

Page URL: ${body.pageUrl}
Submitted At: ${body.timestamp}`;

    console.log("Sending email with subject:", emailSubject);

    const emailResponse = await resend.emails.send({
      from: "AutoAdvance <onboarding@resend.dev>",
      to: ["autoadvancem@gmail.com"],
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
    });

    console.log("Email sent successfully:", emailResponse);

    // Store in database (optional - don't fail if this fails)
    try {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error: dbError } = await supabase
        .from("leads")
        .insert({
          name,
          business_name: body.businessName || null,
          email,
          phone,
          message,
        });

      if (dbError) {
        console.error("Database insert failed (continuing anyway):", dbError);
      } else {
        console.log("Lead stored in database successfully");
      }
    } catch (dbError) {
      console.error("Database operation failed (continuing anyway):", dbError);
    }

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in send-consultation function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);