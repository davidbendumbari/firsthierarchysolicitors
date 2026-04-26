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
  corporate: {
    title: "Corporate",
    metaTitle: "Corporate Law Firm in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Acquisitions, mergers, capital raising, corporate governance, company secretarial and corporate advisory services in Abuja, Nigeria.",
    headline: "End-to-End Corporate Counsel for Ambitious Enterprises",
    intro: "Our Corporate practice partners with boards, executives, and shareholders to structure, govern, and grow Nigerian businesses. From acquisitions and mergers to capital raising and statutory compliance, we deliver advice grounded in deep regulatory experience and informed by our role as Company Secretary to several Nigerian companies.",
    features: [
      { title: "Acquisitions & Mergers", desc: "Strategic counsel on M&A transactions, including the 100% acquisition of First Bank Nigeria Mortgages and the FBN/TrustBond merger that established First-Trust Mortgage Bank PLC." },
      { title: "Capital Raising", desc: "Solicitor experience on capital market, private equity, debt, and sukuk transactions — contributing to over ₦7 billion raised for clients." },
      { title: "Corporate Governance & Secretarial", desc: "Board advisory, shareholder agreements, statutory filings, and full company secretarial support for listed and private companies." },
      { title: "Statutory & Regulatory Interface", desc: "Engagement with CAC, SEC, FCCPC and sector regulators on behalf of clients across financial services, energy, ICT, and construction." },
    ],
    benefits: [
      "Capital markets and private equity experience",
      "Trusted Company Secretary to multiple boards",
      "Tailored corporate structuring and governance",
      "Strong public-sector and regulator relationships",
    ],
    cta: "Discuss Your Corporate Matter",
  },
  commercial: {
    title: "Commercial",
    metaTitle: "Commercial Lawyers in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Legal drafting, commercial contracts, statutory registrations, procurement support and regulatory advisory in Abuja, Nigeria.",
    headline: "Commercial Counsel That Powers Day-to-Day Business",
    intro: "Our Commercial team handles the legal infrastructure that lets your business operate smoothly — from contracts and registrations to procurement support and regulatory advisory. We work as an extension of your team, focused on practical, enforceable outcomes.",
    features: [
      { title: "Legal Drafting & Contracts", desc: "Bespoke drafting and full lifecycle management of commercial contracts — supply, services, distribution, joint ventures, and more." },
      { title: "Company & Instrument Registration", desc: "Corporate and company registration with CAC, plus registration of legal instruments and statutory filings." },
      { title: "Licenses & Statutory Registrations", desc: "Securing and maintaining sector licenses and statutory registrations across regulated industries." },
      { title: "Procurement, Tenders & Risk Advisory", desc: "Support across the procurement and tender process, plus risk management and regulatory advisory tailored to your sector." },
    ],
    benefits: [
      "Practical, enforceable contract terms",
      "Faster registrations and licensing",
      "Sector-specific regulatory insight",
      "Procurement and tender expertise",
    ],
    cta: "Get Commercial Support",
  },
  "energy-construction": {
    title: "Energy, Construction & Engineering",
    metaTitle: "Energy, Construction & Engineering Lawyers in Abuja | 1ST Hierarchy",
    metaDesc: "Joint ventures, concessions, APG/BG/LPO processing, service provision and land access arrangements for energy, construction & engineering projects in Nigeria.",
    headline: "Specialist Legal Support for Infrastructure & Energy Projects",
    intro: "We bring focused legal expertise to the energy, construction, and engineering sectors — drawing on real project experience including EU-funded LPG and hydrogen initiatives. We help clients structure deals, manage risk, and engage effectively with public and private stakeholders.",
    features: [
      { title: "Joint Venture Arrangements", desc: "Structuring and documenting joint ventures between local and international partners across the energy and construction value chain." },
      { title: "Sale & Purchase Arrangements", desc: "Negotiating and documenting sale and purchase agreements for assets, equipment, and project interests." },
      { title: "APG / BG / LPO Processing", desc: "Support with Advance Payment Guarantees, Bank Guarantees, and Local Purchase Orders for project execution." },
      { title: "Concession, Service & Land Access", desc: "Concession arrangements, service provision contracts, and land access agreements with private and public counterparties." },
    ],
    benefits: [
      "Real EU-funded energy project experience",
      "Strong public-sector engagement",
      "Robust contract and risk frameworks",
      "Renewable energy and hydrogen expertise",
    ],
    cta: "Talk to Our Energy Team",
  },
  property: {
    title: "Property",
    metaTitle: "Property & Real Estate Lawyers in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Sale and lease negotiations, commercial leasing, conveyancing, and property development & management services in Abuja, Nigeria.",
    headline: "Property Counsel for Owners, Developers & Tenants",
    intro: "From single-asset transactions to multi-phase developments, our Property practice supports clients through every stage of acquisition, leasing, and management — with a clear focus on title security and commercial outcomes.",
    features: [
      { title: "Sale & Lease Negotiations", desc: "Negotiation and documentation of property sales and lease agreements that protect your commercial interests." },
      { title: "Commercial Leasing", desc: "Drafting and advising on commercial lease arrangements for landlords and tenants in Abuja and beyond." },
      { title: "Commercial Conveyancing", desc: "Title investigation, conveyancing, and registration with relevant land registries and authorities." },
      { title: "Property Development & Management", desc: "Legal support across development structuring, financing arrangements, and ongoing property management." },
    ],
    benefits: [
      "Secure title and clean transactions",
      "Strong landlord and tenant frameworks",
      "Development-ready legal structures",
      "Practical, deal-focused advice",
    ],
    cta: "Plan Your Property Transaction",
  },
  adr: {
    title: "Alternative Dispute Resolution (ADR)",
    metaTitle: "Dispute Resolution & Mediation Lawyers in Abuja | 1ST Hierarchy",
    metaDesc: "Mediation, workplace relations management, and litigation management services in Abuja, Nigeria.",
    headline: "Resolving Disputes Strategically and Commercially",
    intro: "Disputes are best resolved with clear strategy and commercial judgment. Our ADR practice combines mediation, workplace relations management, and active litigation management to deliver outcomes that protect value and, where possible, preserve commercial relationships.",
    features: [
      { title: "Dispute Resolution & Mediation", desc: "Certified mediators on our team work to resolve commercial disputes efficiently and confidentially." },
      { title: "Workplace Relations Management", desc: "Advisory and resolution support for employment, HR, and workplace relations issues." },
      { title: "Litigation Management", desc: "Strategic management of litigation portfolios, including coordination of external counsel and court advocacy." },
      { title: "Negotiation & Settlement", desc: "Skilled negotiation support to secure favourable settlements without unnecessary escalation." },
    ],
    benefits: [
      "Certified mediators and arbitrators",
      "Commercially focused outcomes",
      "Cost-effective resolution pathways",
      "Strong workplace relations expertise",
    ],
    cta: "Discuss Your Dispute",
  },
  taxation: {
    title: "Taxation",
    metaTitle: "Tax Lawyers in Abuja | 1ST Hierarchy Solicitors",
    metaDesc: "Tax Clearance and VAT Certificate processing, plus practical tax advisory services in Abuja, Nigeria.",
    headline: "Practical Tax Counsel for Businesses & Individuals",
    intro: "Our Taxation practice handles the routine and the complex — from processing Tax Clearance and VAT certificates to providing practical tax advisory tailored to your transactions and operations.",
    features: [
      { title: "Tax Clearance Processing", desc: "End-to-end processing of Tax Clearance Certificates with relevant federal and state tax authorities." },
      { title: "VAT Certificate Processing", desc: "Registration for VAT and processing of VAT certificates required for business operations and contracting." },
      { title: "Tax Advisory", desc: "Practical advice on tax-efficient structures, transactions, and compliance obligations." },
      { title: "Regulatory Engagement", desc: "Engagement with FIRS and state tax authorities on behalf of clients where required." },
    ],
    benefits: [
      "Faster certificate processing",
      "Clear, practical tax guidance",
      "Compliance peace of mind",
      "Trusted regulator engagement",
    ],
    cta: "Get Tax Support",
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
