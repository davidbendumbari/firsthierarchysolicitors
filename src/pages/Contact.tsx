import { useState } from "react";
import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out. We'll respond within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans animate-fade-up">Contact Us</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold mt-4 animate-fade-up-delay-1">
            Let's <span className="text-gradient-gold">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-8 leading-relaxed animate-fade-up-delay-2">
            Schedule a confidential consultation with our team. We're ready to understand your needs and deliver results.
          </p>
        </div>
      </section>
      <div className="h-px gradient-gold" />

      <RevealSection>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <RevealItem>
                  <h2 className="font-serif text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Reach out to us for inquiries, consultations, or to learn how we can support your business.
                  </p>
                </RevealItem>
                {[
                  { icon: MapPin, label: "Office Address", value: "Abuja, Federal Capital Territory, Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 (0) 900 000 0000" },
                  { icon: Mail, label: "Email", value: "info@1sthierarchy.com" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM" },
                ].map((item, i) => (
                  <RevealItem key={item.label} delay={(i + 1) * 100}>
                    <div className="flex gap-4">
                      <item.icon className="text-gold shrink-0 mt-1" size={20} />
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <RevealItem delay={200}>
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Full Name *</label>
                        <Input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required placeholder="Your name" className="bg-secondary border-border" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Email Address *</label>
                        <Input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required placeholder="your@email.com" className="bg-secondary border-border" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                        <Input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="+234..." className="bg-secondary border-border" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Subject *</label>
                        <Input value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required placeholder="How can we help?" className="bg-secondary border-border" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Message *</label>
                      <Textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required rows={5} placeholder="Tell us about your legal needs..." className="bg-secondary border-border" />
                    </div>
                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Send Message <Send size={18} />
                    </Button>
                  </form>
                </RevealItem>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>
    </Layout>
  );
};

export default ContactPage;
