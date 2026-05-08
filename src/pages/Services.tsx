import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Building2, Briefcase, HardHat, Home, Scale, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate",
    desc: "Acquisitions, mergers, capital raising, government and regulatory interface, statutory compliance, shareholder agreements, corporate structuring, corporate governance, company secretarial, and corporate advisory services.",
    path: "/services/corporate",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    desc: "Legal drafting, commercial contracts management, corporate/company registration, legal instrument registration, statutory registrations, licenses, procurement and tender support, and risk management & regulatory advisory.",
    path: "/services/commercial",
  },
  {
    icon: HardHat,
    title: "Energy, Construction & Engineering",
    desc: "Joint venture arrangements, sale and purchase arrangements, APG/BG/LPO processing, concession arrangements, service provision arrangements, and land access arrangements.",
    path: "/services/energy-construction",
  },
  {
    icon: Home,
    title: "Property",
    desc: "Sale and lease negotiations, commercial leasing arrangements, commercial conveyancing, and property development & management.",
    path: "/services/property",
  },
  {
    icon: Scale,
    title: "Alternative Dispute Resolution",
    desc: "Dispute resolution and mediation, workplace relations management, and litigation management, pursued strategically to deliver effective outcomes.",
    path: "/services/adr",
  },
  {
    icon: Calculator,
    title: "Taxation",
    desc: "Processing of Tax Clearance and VAT Certificates, alongside practical tax advisory tailored to your business operations.",
    path: "/services/taxation",
  },
];

const ServicesPage = () => (
  <Layout>
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans animate-fade-up">Our Expertise</span>
        <h1 className="font-serif text-4xl lg:text-6xl font-bold mt-4 animate-fade-up-delay-1">
          Comprehensive <span className="text-gradient-gold">Legal Solutions</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-8 leading-relaxed animate-fade-up-delay-2">
          We look after the legal needs of our corporate and individual clients, bringing experience and smart thinking to every task. Below are our core areas of competence and expertise.
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

    {/* Billing */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Billing</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Flexible, Transparent Pricing</h2></RevealItem>
            <RevealItem delay={300}>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Our billing is geared toward cost-effective, flexible payment options, where clients pay for services rendered, not time spent. To ensure transparency we offer the following options:
              </p>
            </RevealItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealItem delay={400}>
              <div className="p-8 bg-card border border-border rounded-lg h-full">
                <h3 className="font-serif text-xl font-semibold mb-3 text-center">Retainers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  A fixed periodic fee, paid monthly, quarterly, or yearly, under either a global retainer covering all aspects of your legal work, or a specific retainer covering identified areas. Calculated to equate to the average value of work over time, smoothing peaks and troughs and giving you budgeting certainty.
                </p>
              </div>
            </RevealItem>
            <RevealItem delay={500}>
              <div className="p-8 bg-card border border-border rounded-lg h-full">
                <h3 className="font-serif text-xl font-semibold mb-3 text-center">Fixed Fees</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  We will quote and stick to a fixed fee for any transaction or piece of legal work at your request, giving you full clarity on cost before we begin.
                </p>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Service Delivery Standards */}
    <RevealSection>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Service Delivery</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Our Action & Delivery Standards</h2></RevealItem>
            <RevealItem delay={300}>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Guided by our core values of integrity, teamwork, quality, diligence, and commitment, we hold ourselves to the following service standards:
              </p>
            </RevealItem>
          </div>
          <RevealItem delay={400}>
            <div className="bg-card border border-border rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Answering telephone calls within 15–30 seconds of ringing",
                "Returning telephone calls within the same working day",
                "Acknowledging receipt of emails promptly",
                "Commencing assigned tasks within 24 hours of receipt",
                "Replying to routine correspondence within two days",
                "Preparing standard form documentation within 48–72 hours",
              ].map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </RevealItem>
        </div>
      </section>
    </RevealSection>
  </Layout>
);

export default ServicesPage;
