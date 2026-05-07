import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Building2, Briefcase, HardHat, Home, Scale, Calculator, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abuja.webp";

const services = [
  { icon: Building2, title: "Corporate", desc: "Acquisitions, mergers, capital raising, governance, company secretarial and corporate advisory.", path: "/services/corporate" },
  { icon: Briefcase, title: "Commercial", desc: "Contract drafting & management, registrations, licenses, procurement and regulatory advisory.", path: "/services/commercial" },
  { icon: HardHat, title: "Energy, Construction & Engineering", desc: "Joint ventures, concessions, APG/BG/LPO processing, service provision and land access arrangements.", path: "/services/energy-construction" },
  { icon: Home, title: "Property", desc: "Sale & lease negotiations, commercial leasing, conveyancing, and property development & management.", path: "/services/property" },
  { icon: Scale, title: "Alternative Dispute Resolution", desc: "Mediation, workplace relations management, and litigation management for commercial disputes.", path: "/services/adr" },
  { icon: Calculator, title: "Taxation", desc: "Tax Clearance and VAT certificate processing, plus practical tax advisory for your business.", path: "/services/taxation" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Abuja skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans font-medium">Abuja's Premier Law Firm</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mt-6 leading-[1.1] animate-fade-up-delay-1">
            Where Legal <br />
            <span className="text-gradient-gold">Excellence</span> Meets <br />
            Business Strategy
          </h1>
          <div className="mt-8 animate-fade-up-delay-2">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Mission Statement</span>
            <p className="text-muted-foreground text-lg sm:text-xl mt-4 max-w-xl leading-relaxed">
              To provide corporate and institutional clients in Nigeria with<br />
              efficient and effective legal solutions that safeguard<br />
              operations and drive sustainable growth.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation <ArrowRight size={18} /></Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">Our Practice Areas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Gold divider */}
    <div className="h-px gradient-gold" />

    {/* Value Proposition */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: "Since 2011", label: "Serving Nigerian Businesses" },
              { num: "10+", label: "Industry Sectors" },
              { num: "Multi-Sector", label: "Public, Energy, ICT, Finance & More" },
            ].map((stat, i) => (
              <RevealItem key={stat.label} delay={i * 150}>
                <div className="text-4xl lg:text-5xl font-serif font-bold text-gradient-gold">{stat.num}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider mt-2">{stat.label}</div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Mission section removed - now in hero */}

    {/* Core Values */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <RevealItem>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Core Values</span>
            </RevealItem>
            <RevealItem delay={150}>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">
                The Principles That <span className="text-gradient-gold">Guide Us</span>
              </h2>
            </RevealItem>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Respect", "Integrity", "Innovation", "Excellence", "Teamwork"].map((value, i) => (
              <RevealItem key={value} delay={i * 100}>
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-gold/40 transition-all duration-500 h-full">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-gradient-gold">{value}</h3>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Services */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <RevealItem>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Practice Areas</span>
            </RevealItem>
            <RevealItem delay={150}>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Our Legal Expertise</h2>
            </RevealItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <RevealItem key={service.title} delay={i * 100}>
                <Link
                  to={service.path}
                  className="group block p-8 bg-card border border-border rounded-lg hover:border-gold/30 transition-all duration-500 h-full"
                >
                  <service.icon className="text-gold mb-4" size={32} />
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm mt-4 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>


    {/* CTA */}
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 gradient-gold rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl lg:text-5xl font-bold">Let Us Help</h2>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
          Partner with 1ST Hierarchy Solicitors and experience the confidence that comes with world-class legal representation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Contact Us Today <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
