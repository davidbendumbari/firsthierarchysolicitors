import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Heart, CheckCircle2 } from "lucide-react";
import nafisatImg from "@/assets/nafisat.png";
import clintonImg from "@/assets/clinton.png";

const team = [
  {
    name: "Nafisah Abubakar",
    role: "Principal Partner",
    image: nafisatImg,
    bio: "Nafisah Abubakar is a highly trained and experienced Legal Practitioner who was called to the Nigerian Bar as a Barrister and Solicitor seventeen years ago. With a blended skill set and diverse experience, she has spent seventeen years working as a corporate lawyer, a company secretary, and a project manager, as well as thirteen years in the developmental and non-profit space. As founder and Principal Partner of 1ST Hierarchy Solicitors (established 2011), she specializes in corporate and commercial legal services, company secretarial services, advisory services, and commercial contract management — serving clients across the public sector, oil and gas, energy, technology, financial services, education, renewable energy, construction, hospitality, and fashion. Through 1ST Hierarchy, Nafisah has acted as solicitor on capital raising, private equity, and debt exercises contributing over Seven Billion Naira (₦7,000,000,000) raised from the capital market, private investors, and sukuk bonds. Notable engagements include serving as solicitor to Afriswiss Capital Asset Management Limited on the 100% acquisition of First Bank Nigeria Mortgages (2016), and joint solicitor to FBN Mortgages on the merger with TrustBond Mortgage Bank PLC (2019) — leading to the establishment of First-Trust Mortgage Bank PLC in 2020. She also serves as Legal Adviser and Head of Secretariat for Rural Women Energy Security (RUWES) Nigeria, and was appointed National Senior Expert on two EU-funded projects: the Nigerian Energy Support Programme (NESP) II LPG Intervention, and a German-Nigerian Hydrogen Office study, where she helped develop policy recommendations and a Hydrogen development roadmap for Nigeria. Nafisah holds an LL.M from the University of South Wales (UK), a B.L from the Nigerian Law School (Kano), and an LL.B from the University of Abuja. She is currently undertaking an executive leadership program with the University of Oxford and Saïd Business School.",
    specializations: ["Corporate & Commercial", "Company Secretarial", "Capital Raising & M&A", "Energy & Renewables", "Regulatory Advisory"],
  },
  {
    name: "Clinton Biragbara Nenniibarini",
    role: "Junior Partner",
    image: clintonImg,
    bio: "Clinton Biragbara joined 1ST Hierarchy in 2014 as a Legal Officer and, by virtue of his hard work and dedication, rose to the rank of Junior Partner in 2016. Called to the Nigerian Bar as a Barrister and Solicitor in 2012, he brings over a decade of experience — first as a litigation lawyer and subsequently as a corporate lawyer. Clinton holds an LL.B from the University of Jos and a B.L qualification from the Nigerian Law School (Enugu campus). He also holds a National Diploma in Law from Rivers State College of Arts and Science, and is a Certified Mediator and Arbitrator.",
    specializations: ["Corporate & Commercial", "Property", "Taxation", "Alternative Dispute Resolution"],
  },
  {
    name: "James Osita Ibegbunam",
    role: "Senior Associate",
    image: "",
    bio: "James Ibegbunam joined the firm in 2023. Called to the Nigerian Bar as a Barrister and Solicitor in 2019, he has over five years of experience working first as a litigation lawyer and then as a corporate lawyer. James holds an LL.B from the University of Jos and a B.L qualification from the Nigerian Law School (Enugu campus). His key areas of expertise include commercial, corporate, and property law.",
    specializations: ["Commercial", "Corporate", "Property"],
  },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every matter we handle, ensuring exceptional outcomes." },
  { icon: Users, title: "Client-Centricity", desc: "Your objectives drive our strategy. We listen, understand, and deliver solutions tailored to you." },
  { icon: Target, title: "Diligence", desc: "Every document, every argument, every strategy is crafted with meticulous attention to detail." },
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards, building lasting relationships founded on trust." },
];

const registrations = [
  "Corporate Affairs Commission (CAC) — Registered Law Firm",
  "Chartered Institute of Chartered Secretaries and Administrators (ICSA UK)",
  "Nigerian Bar Association (NBA)",
  "International Association of Risk and Compliance Professionals (IARCP)",
  "Institute of Corporate Governance Nigeria",
  "Institute of Corporate Administration Nigeria",
  "Institute of Management Specialists",
  "Association of Professional Mediators and Negotiators",
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans animate-fade-up">About Us</span>
        <h1 className="font-serif text-4xl lg:text-6xl font-bold mt-4 animate-fade-up-delay-1">
          A Legacy of Legal <span className="text-gradient-gold">Excellence</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-8 leading-relaxed animate-fade-up-delay-2">
          Founded in 2011 by Nafisah Abubakar, 1ST Hierarchy Solicitors is a corporate and commercial law firm based in Abuja, serving on the Board of several companies in the position of Company Secretary. Our client base spans the public sector, ICT, oil and gas, academia, financial services, engineering and construction, non-profits, entertainment, and fashion.
        </p>
      </div>
    </section>

    <div className="h-px gradient-gold" />

    {/* What We Do */}
    <RevealSection>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">What We Do</span></RevealItem>
          <RevealItem delay={150}>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Exceptional Legal Service</h2>
          </RevealItem>
          <RevealItem delay={300}>
            <p className="text-muted-foreground text-lg mt-8 leading-relaxed">
              We have a reputation for providing exceptional legal service — known for our commitment to excellence, expediency, and the ability to find innovative solutions to the most complex of legal and corporate problems. Years of working with diverse clients in the private and public sector have given us deep expertise across Engineering and Construction, ICT, Renewable Energy, Government, Financial Services, Hospitality, Agribusiness, Education, Fashion, and more.
            </p>
          </RevealItem>
        </div>
      </section>
    </RevealSection>

    {/* Values */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Our Values</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">What We Stand For</h2></RevealItem>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealItem key={v.title} delay={i * 100}>
                <div className="text-center p-6">
                  <v.icon className="text-gold mx-auto mb-4" size={36} />
                  <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Team */}
    <RevealSection>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Our Management Team</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Meet the People Behind the Practice</h2></RevealItem>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <RevealItem key={member.name} delay={i * 200}>
                <div className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-gold/30 transition-all duration-500 h-full">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-2 border-gold/30 mb-6"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-full border-2 border-gold/30 mb-6 flex items-center justify-center bg-secondary">
                      <span className="font-serif text-3xl text-gold">
                        {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  )}
                  <h3 className="font-serif text-2xl font-bold group-hover:text-gold transition-colors">{member.name}</h3>
                  <p className="text-gold text-sm mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">{member.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.specializations.map((spec) => (
                      <span key={spec} className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full border border-border">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Professional Registrations */}
    <RevealSection>
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Business & Professional Registrations</span></RevealItem>
            <RevealItem delay={150}>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Accredited & Affiliated</h2>
            </RevealItem>
          </div>
          <RevealItem delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-card border border-border rounded-lg p-8">
              {registrations.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </RevealItem>
        </div>
      </section>
    </RevealSection>

    {/* CTA */}
    <section className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold">Work With Us</h2>
        <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
          Ready to discuss your legal needs? Our team is here to help.
        </p>
        <Button variant="gold" size="lg" className="mt-8" asChild>
          <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
