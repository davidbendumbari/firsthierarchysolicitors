import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Building2, ShieldCheck, Gavel, Briefcase, ArrowRight } from "lucide-react";

const services = [
  { icon: Building2, title: "Corporate & Commercial Law", desc: "From business incorporation to complex corporate restructuring, we provide end-to-end legal support for enterprises of all sizes.", path: "/services/corporate-commercial" },
  { icon: FileText, title: "Contract Drafting & Negotiation", desc: "We draft, review, and negotiate contracts that protect your interests while fostering successful business relationships.", path: "/services/contracts" },
  { icon: Scale, title: "Mergers & Acquisitions", desc: "Navigate the complexities of M&A with confidence. We guide you through due diligence, structuring, and closing.", path: "/services/mergers-acquisitions" },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Stay ahead of Nigeria's evolving regulatory landscape with proactive compliance strategies and expert guidance.", path: "/services/compliance" },
  { icon: Gavel, title: "Dispute Resolution & Litigation", desc: "When disputes arise, our litigation team delivers vigorous, strategic representation to protect your business interests.", path: "/services/dispute-resolution" },
  { icon: Briefcase, title: "Legal Advisory for Businesses", desc: "Retain ongoing access to strategic legal counsel that grows with your business and anticipates challenges ahead.", path: "/services/legal-advisory" },
];

const ServicesPage = () => (
  <Layout>
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans animate-fade-up">Practice Areas</span>
        <h1 className="font-serif text-4xl lg:text-6xl font-bold mt-4 animate-fade-up-delay-1">
          Comprehensive <span className="text-gradient-gold">Legal Solutions</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-8 leading-relaxed animate-fade-up-delay-2">
          Our practice areas are designed to address every facet of corporate and commercial law, delivering strategic counsel that drives your business forward.
        </p>
      </div>
    </section>
    <div className="h-px gradient-gold" />

    <RevealSection>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <RevealItem key={service.title} delay={i * 100}>
                <Link
                  to={service.path}
                  className="group flex gap-6 p-8 bg-card border border-border rounded-lg hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <service.icon className="text-gold shrink-0 mt-1" size={36} />
                  <div>
                    <h3 className="font-serif text-xl font-semibold group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm mt-4 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  </Layout>
);

export default ServicesPage;
