import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Heart, CheckCircle2, Handshake, Lightbulb } from "lucide-react";
import nafisatImg from "@/assets/nafisat.png";
import clintonImg from "@/assets/clinton.png";
import duduImg from "@/assets/dudu.jpg";
import jamesImg from "@/assets/james.jpg";
import ladifatuImg from "@/assets/ladifatu.jpg";

const team = [
  {
    name: "Nafisah Abubakar",
    role: "Principal Partner",
    image: nafisatImg,
    bio: [
      "Nafisah Abubakar is the founder and Principal Partner of 1ST Hierarchy Solicitors (established 2011). Called to the Nigerian Bar seventeen years ago, she brings a blended skill set as a corporate lawyer, company secretary, and project manager, with over a decade of experience in the developmental and non-profit space.",
      "She specializes in corporate and commercial legal services, company secretarial services, advisory, and commercial contract management. Her clients span the public sector, oil and gas, energy, technology, financial services, education, renewable energy, construction, hospitality, and fashion.",
      "Nafisah has acted as solicitor on capital raising, private equity, and debt exercises contributing over ₦7 billion raised from the capital market, private investors, and sukuk bonds. She also serves as Legal Adviser and Head of Secretariat for Rural Women Energy Security (RUWES) Nigeria, and was appointed National Senior Expert on EU-funded energy and hydrogen projects.",
      "She holds an LL.M from the University of South Wales (UK), a B.L from the Nigerian Law School (Kano), and an LL.B from the University of Abuja, and is currently undertaking an executive leadership program with the University of Oxford and Saïd Business School.",
    ],
    specializations: ["Corporate & Commercial", "Company Secretarial", "Capital Raising & M&A", "Energy & Renewables", "Regulatory Advisory"],
  },
  {
    name: "Clinton Biragbara Nenniibarini",
    role: "Junior Partner",
    image: clintonImg,
    bio: [
      "Clinton Biragbara joined 1ST Hierarchy in 2014 as a Legal Officer and, by virtue of his hard work and dedication, rose to the rank of Junior Partner in 2016. Called to the Nigerian Bar as a Barrister and Solicitor in 2012, he brings over a decade of experience, first as a litigation lawyer and subsequently as a corporate lawyer.",
      "Clinton holds an LL.B from the University of Jos and a B.L qualification from the Nigerian Law School (Enugu campus). He also holds a National Diploma in Law from Rivers State College of Arts and Science, and is a Certified Mediator and Arbitrator.",
    ],
    specializations: ["Corporate & Commercial", "Property", "Taxation", "Alternative Dispute Resolution"],
  },
  {
    name: "James Osita Ibegbunam",
    role: "Senior Associate",
    image: jamesImg,
    bio: [
      "James Ibegbunam joined the firm in 2023. Called to the Nigerian Bar as a Barrister and Solicitor in 2019, he has over five years of experience working first as a litigation lawyer and then as a corporate lawyer.",
      "James holds an LL.B from the University of Jos and a B.L qualification from the Nigerian Law School (Enugu campus). His key areas of expertise include commercial, corporate, and property law.",
    ],
    specializations: ["Commercial", "Corporate", "Property"],
  },
  {
    name: "Ladifatu Ahmed Isa",
    role: "Junior Associate",
    image: ladifatuImg,
    bio: [
      "Ladifatu Ahmed Isa joined the Firm as a Junior Associate in 2025. She was called to the Nigerian Bar as a Barrister and Solicitor of the Supreme Court of Nigeria in 2020 and has over five years of post call experience, having begun her career in litigation before transitioning into corporate practice.",
      "Her areas of expertise include property law, corporate law, and commercial law, where she provides practical and client focused legal support across a range of transactions and advisory matters.",
      "Ladifatu holds a Bachelor of Laws (LL.B) degree from Igbinedion University, Okada, Edo State, and a Barrister at Law (B.L) qualification from the Nigerian Law School, Abuja Campus. She also holds a Master's degree in Law Enforcement and Criminal Justice from Ahmadu Bello University, Zaria.",
    ],
    specializations: ["Property", "Corporate", "Commercial"],
  },
  {
    name: "Dudu Sunday",
    role: "Head of Administration",
    image: duduImg,
    bio: [
      "Dudu Sunday joined 1ST Hierarchy in 2017 as an Administrative Officer. He is a dedicated administrative professional with a strong background in public administration, holding a Bachelor's degree in Public Administration from Nasarawa State University and a National Diploma in the same field from the Federal Polytechnic, Nasarawa.",
      "With a solid foundation in organization management and administrative processes, Dudu brings efficiency, structure, and professionalism to his role. As Head of Administration, he oversees the firm's daily administrative operations, ensuring smooth workflow and effective coordination across departments.",
      "His commitment to excellence and attention to detail contribute significantly to maintaining the firm's high standards of service delivery.",
    ],
    specializations: ["Administration", "Operations", "Coordination"],
  },
];

const values = [
  { icon: Handshake, title: "Respect", desc: "We treat every client, colleague, and counterpart with dignity, courtesy, and genuine regard." },
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards, building lasting relationships founded on trust." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace forward thinking and creative solutions to navigate complex legal challenges." },
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every matter we handle, ensuring exceptional outcomes." },
  { icon: Users, title: "Teamwork", desc: "We collaborate seamlessly across disciplines to deliver the strongest results for our clients." },
];

const registrations = [
  "Corporate Affairs Commission (CAC) Registered Law Firm",
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
              We have a reputation for providing exceptional legal service, known for our commitment to excellence, expediency, and the ability to find innovative solutions to the most complex of legal and corporate problems. Years of working with diverse clients in the private and public sector have given us deep expertise across Engineering and Construction, ICT, Renewable Energy, Government, Financial Services, Hospitality, Agribusiness, Education, Fashion, and more.
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
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">CORE VALUES</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">What We Stand For</h2></RevealItem>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <RevealItem key={v.title} delay={i * 100}>
                <div className="p-6">
                  <v.icon className="text-gold mb-4" size={36} />
                  <h3 className="font-serif text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-left">{v.desc}</p>
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
                  <div className="mt-4 space-y-4">
                    {member.bio.map((para, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
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
        <h2 className="font-serif text-3xl lg:text-4xl font-bold">Contact Us</h2>
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
