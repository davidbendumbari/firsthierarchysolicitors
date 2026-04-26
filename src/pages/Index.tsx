import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Building2, Briefcase, HardHat, Home, Scale, Calculator, ArrowRight, Quote } from "lucide-react";
import heroImage from "@/assets/hero-abuja.webp";

const services = [
  { icon: Building2, title: "Corporate", desc: "Acquisitions, mergers, capital raising, governance, company secretarial and corporate advisory.", path: "/services/corporate" },
  { icon: Briefcase, title: "Commercial", desc: "Contract drafting & management, registrations, licenses, procurement and regulatory advisory.", path: "/services/commercial" },
  { icon: HardHat, title: "Energy, Construction & Engineering", desc: "Joint ventures, concessions, APG/BG/LPO processing, service provision and land access arrangements.", path: "/services/energy-construction" },
  { icon: Home, title: "Property", desc: "Sale & lease negotiations, commercial leasing, conveyancing, and property development & management.", path: "/services/property" },
  { icon: Scale, title: "Alternative Dispute Resolution", desc: "Mediation, workplace relations management, and litigation management for commercial disputes.", path: "/services/adr" },
  { icon: Calculator, title: "Taxation", desc: "Tax Clearance and VAT certificate processing, plus practical tax advisory for your business.", path: "/services/taxation" },
];

const testimonials = [
  { name: "Adebayo Ogunleye", role: "CEO, Pinnacle Industries Ltd.", text: "1ST Hierarchy Solicitors provided exceptional counsel during our corporate restructuring. Their attention to detail and strategic thinking saved us significant time and resources." },
  { name: "Amina Yusuf", role: "MD, Sahel Capital Partners", text: "Their expertise in regulatory compliance is unmatched. We trust them completely with our most complex legal matters across West Africa." },
  { name: "Chukwuemeka Nwosu", role: "Founder, TechBridge Nigeria", text: "From incorporation to our Series A funding round, 1ST Hierarchy has been an indispensable partner. Their commercial awareness sets them apart." },
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
          <p className="text-muted-foreground text-lg sm:text-xl mt-8 max-w-xl leading-relaxed animate-fade-up-delay-2">
            Delivering sophisticated corporate and commercial legal solutions that protect, empower, and elevate your business across Nigeria.
          </p>
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
              { num: "₦7B+", label: "Raised on Client Transactions" },
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

    {/* Mission */}
    <RevealSection>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <RevealItem>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Our Mission</span>
          </RevealItem>
          <RevealItem delay={150}>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">
              Built on Integrity. <span className="text-gradient-gold">Driven by Excellence.</span>
            </h2>
          </RevealItem>
          <RevealItem delay={300}>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8">
              At 1ST Hierarchy Solicitors, we believe that exceptional legal counsel is the foundation of every successful enterprise. We combine deep expertise in Nigerian corporate law with a forward-thinking approach, ensuring our clients navigate complexities with clarity, confidence, and a decisive competitive edge.
            </p>
          </RevealItem>
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
        <h2 className="font-serif text-3xl lg:text-5xl font-bold">Ready to Elevate Your Legal Strategy?</h2>
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
