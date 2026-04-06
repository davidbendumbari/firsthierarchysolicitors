import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  headline: string;
  intro: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  cta: string;
}

const serviceData: Record<string, ServiceData> = {
  "corporate-commercial": {
    title: "Corporate & Commercial Law",
    metaTitle: "Corporate & Commercial Law Firm in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Expert corporate and commercial legal services in Abuja, Nigeria. Business formation, governance, restructuring, and commercial transactions.",
    headline: "Building Strong Legal Foundations for Nigerian Businesses",
    intro: "Our Corporate & Commercial Law practice provides comprehensive legal support for businesses at every stage—from incorporation and governance to complex restructuring and commercial transactions. We help enterprises navigate Nigeria's business landscape with confidence and strategic foresight.",
    features: [
      { title: "Business Formation & Incorporation", desc: "Seamless company registration, structuring, and compliance with CAC requirements and Nigerian corporate law." },
      { title: "Corporate Governance", desc: "Board advisory, shareholder agreements, corporate policies, and best governance practices for Nigerian entities." },
      { title: "Commercial Transactions", desc: "Structuring and executing complex commercial deals, joint ventures, partnerships, and strategic alliances." },
      { title: "Corporate Restructuring", desc: "Mergers, demergers, acquisitions, and reorganizations executed with precision and regulatory compliance." },
    ],
    benefits: ["Tailored legal strategies for Nigerian businesses", "Deep understanding of CAC and SEC regulations", "Proactive risk management and compliance", "Seamless business formation and governance support"],
    cta: "Discuss Your Corporate Legal Needs",
  },
  contracts: {
    title: "Contract Drafting & Negotiation",
    metaTitle: "Contract Drafting & Negotiation Lawyers in Abuja | 1ST Hierarchy",
    metaDesc: "Professional contract drafting, review, and negotiation services in Abuja. Protect your business interests with expertly crafted agreements.",
    headline: "Contracts That Protect and Empower Your Business",
    intro: "Every successful business relationship is built on a well-drafted contract. Our contract practice ensures your agreements are clear, enforceable, and strategically designed to protect your interests while fostering productive partnerships across Nigeria and beyond.",
    features: [
      { title: "Contract Drafting", desc: "Bespoke contracts crafted to reflect your specific business needs, from supply agreements to complex joint venture contracts." },
      { title: "Contract Review & Analysis", desc: "Thorough review of existing contracts to identify risks, ambiguities, and opportunities for stronger terms." },
      { title: "Negotiation Support", desc: "Skilled negotiation representation ensuring favorable terms while maintaining positive business relationships." },
      { title: "Contract Management", desc: "Ongoing contract lifecycle management, amendments, renewals, and compliance monitoring." },
    ],
    benefits: ["Reduced legal exposure and risk", "Clear, enforceable contract terms", "Faster deal closure with expert negotiation", "Ongoing contract compliance support"],
    cta: "Get Your Contracts Right",
  },
  "mergers-acquisitions": {
    title: "Mergers & Acquisitions",
    metaTitle: "Mergers & Acquisitions Lawyers in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Expert M&A legal counsel in Abuja, Nigeria. Due diligence, deal structuring, and transaction execution for mergers and acquisitions.",
    headline: "Strategic M&A Counsel for Transformative Deals",
    intro: "Mergers and acquisitions are defining moments for any enterprise. Our M&A team brings strategic acumen and meticulous attention to every aspect of your transaction—from initial due diligence to successful closing—ensuring your deal achieves its full potential.",
    features: [
      { title: "Due Diligence", desc: "Comprehensive legal, regulatory, and commercial due diligence to uncover risks and validate deal value." },
      { title: "Deal Structuring", desc: "Optimal transaction structures that maximize value, minimize tax exposure, and ensure regulatory compliance." },
      { title: "Transaction Execution", desc: "End-to-end transaction management including documentation, negotiation, and closing coordination." },
      { title: "Post-Merger Integration", desc: "Legal support for seamless integration including regulatory filings, employee transitions, and contract novations." },
    ],
    benefits: ["Thorough risk assessment and mitigation", "Tax-efficient deal structures", "Seamless regulatory compliance (SEC, CAC, FCCPC)", "Post-closing integration support"],
    cta: "Plan Your Next Transaction",
  },
  compliance: {
    title: "Regulatory Compliance",
    metaTitle: "Regulatory Compliance Lawyers in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Navigate Nigeria's regulatory landscape with confidence. Compliance advisory, audits, and risk management from Abuja's leading law firm.",
    headline: "Navigate Regulations with Confidence and Clarity",
    intro: "Nigeria's regulatory environment is complex and ever-evolving. Our compliance practice helps businesses stay ahead of regulatory requirements, minimize risk, and operate with full confidence that they meet all legal obligations across federal and state jurisdictions.",
    features: [
      { title: "Compliance Audits", desc: "Comprehensive audits to assess current compliance status and identify gaps across all regulatory frameworks." },
      { title: "Regulatory Advisory", desc: "Proactive guidance on SEC, CBN, CAC, FCCPC, and sector-specific regulations affecting your business." },
      { title: "Policy Development", desc: "Creation of internal compliance policies, procedures, and training programs tailored to your industry." },
      { title: "Government Relations", desc: "Strategic engagement with regulatory bodies and government agencies on behalf of your business." },
    ],
    benefits: ["Stay ahead of regulatory changes", "Minimize penalties and legal exposure", "Industry-specific compliance frameworks", "Confident engagement with regulators"],
    cta: "Ensure Your Compliance",
  },
  "dispute-resolution": {
    title: "Dispute Resolution & Litigation",
    metaTitle: "Dispute Resolution & Litigation Lawyers in Abuja | 1ST Hierarchy",
    metaDesc: "Expert commercial litigation and dispute resolution in Abuja. Arbitration, mediation, and court representation for businesses.",
    headline: "Resolving Disputes with Strategy and Strength",
    intro: "When business disputes arise, you need a legal team that combines strategic thinking with decisive action. Our dispute resolution practice offers the full spectrum of options—from negotiation and mediation to arbitration and litigation—always pursuing the most effective outcome for your business.",
    features: [
      { title: "Commercial Litigation", desc: "Vigorous representation in commercial disputes before Nigerian courts at all levels." },
      { title: "Arbitration", desc: "Domestic and international arbitration under LCIA, ICC, and Nigerian Arbitration and Conciliation Act frameworks." },
      { title: "Mediation & ADR", desc: "Cost-effective alternative dispute resolution strategies that preserve business relationships." },
      { title: "Enforcement", desc: "Enforcement of judgments, arbitral awards, and settlement agreements across Nigerian jurisdictions." },
    ],
    benefits: ["Strategic dispute assessment and planning", "Cost-effective resolution pathways", "Experienced court and tribunal advocacy", "Cross-jurisdictional enforcement capability"],
    cta: "Discuss Your Dispute",
  },
  "legal-advisory": {
    title: "Legal Advisory for Businesses",
    metaTitle: "Business Legal Advisory Services in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Ongoing strategic legal counsel for businesses in Abuja, Nigeria. Retainer services, risk management, and business advisory.",
    headline: "Your Strategic Legal Partner for Business Growth",
    intro: "Great businesses are built on great legal foundations. Our advisory practice provides ongoing strategic legal counsel that anticipates challenges, identifies opportunities, and ensures your business operates with clarity and confidence at every stage of growth.",
    features: [
      { title: "Retainer Services", desc: "Dedicated legal counsel on retainer, providing immediate access to expert advice when you need it most." },
      { title: "Risk Assessment", desc: "Proactive identification and mitigation of legal risks across your business operations and transactions." },
      { title: "Strategic Planning", desc: "Legal input on business strategy, market entry, expansion plans, and key commercial decisions." },
      { title: "Industry-Specific Counsel", desc: "Specialized advisory for sectors including fintech, energy, real estate, and manufacturing." },
    ],
    benefits: ["Immediate access to expert legal counsel", "Proactive risk identification and mitigation", "Legal strategy aligned with business goals", "Cost-effective retainer arrangements"],
    cta: "Become a Retainer Client",
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-serif text-3xl">Service not found</h1>
          <Button variant="gold" className="mt-8" asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold text-sm mb-8 hover:gap-3 transition-all animate-fade-up">
            <ArrowLeft size={14} /> All Practice Areas
          </Link>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold animate-fade-up-delay-1">
            {service.title}
          </h1>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed animate-fade-up-delay-2">
            {service.headline}
          </p>
        </div>
      </section>
      <div className="h-px gradient-gold" />

      <RevealSection>
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <RevealItem>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.intro}</p>
            </RevealItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {service.features.map((f, i) => (
                <RevealItem key={f.title} delay={i * 100}>
                  <div className="p-6 bg-card border border-border rounded-lg h-full hover:border-gold/30 transition-all duration-500">
                    <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </div>

            <RevealItem delay={400}>
              <div className="mt-16 p-8 bg-secondary rounded-lg border border-border">
                <h3 className="font-serif text-xl font-semibold mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealItem>

            <RevealItem delay={500}>
              <div className="mt-16 text-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">{service.cta} <ArrowRight size={18} /></Link>
                </Button>
              </div>
            </RevealItem>
          </div>
        </section>
      </RevealSection>
    </Layout>
  );
};

export default ServiceDetailPage;
