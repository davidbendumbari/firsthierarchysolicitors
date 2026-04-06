import Layout from "@/components/Layout";
import { RevealSection, RevealItem } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";
import nafisatImg from "@/assets/nafisat.png";
import clintonImg from "@/assets/clinton.png";

const team = [
  {
    name: "Nafisat Abubakar",
    role: "Founder & Managing Partner",
    image: nafisatImg,
    bio: "Nafisat Abubakar is the visionary founder of 1ST Hierarchy Solicitors. With over a decade of experience in corporate and commercial law, she has established herself as a trusted advisor to leading businesses across Nigeria. Her expertise spans corporate governance, regulatory compliance, and complex commercial transactions. Nafisat holds an LL.B from the University of Abuja and a B.L. from the Nigerian Law School. She is a member of the Nigerian Bar Association and the International Bar Association.",
    specializations: ["Corporate Governance", "Regulatory Compliance", "Commercial Transactions", "Business Formation"],
  },
  {
    name: "Clinton Biragbara",
    role: "Partner",
    image: clintonImg,
    bio: "Clinton Biragbara brings exceptional depth in litigation, dispute resolution, and mergers & acquisitions. Known for his strategic thinking and meticulous approach, Clinton has successfully represented clients in high-value commercial disputes and complex M&A transactions. He holds an LL.B and LL.M and is admitted to practice in multiple Nigerian courts. His practice combines sharp advocacy with sound commercial judgment.",
    specializations: ["Mergers & Acquisitions", "Dispute Resolution", "Commercial Litigation", "Contract Negotiation"],
  },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We pursue the highest standards in every matter we handle, ensuring exceptional outcomes." },
  { icon: Users, title: "Client-Centricity", desc: "Your objectives drive our strategy. We listen, understand, and deliver solutions tailored to you." },
  { icon: Target, title: "Precision", desc: "Every document, every argument, every strategy is crafted with meticulous attention to detail." },
  { icon: Heart, title: "Integrity", desc: "We uphold the highest ethical standards, building lasting relationships founded on trust." },
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
          Founded in Abuja, 1ST Hierarchy Solicitors is a premier corporate and commercial law firm dedicated to empowering businesses with sophisticated, results-driven legal solutions. We combine deep expertise with a commitment to understanding each client's unique challenges and goals.
        </p>
      </div>
    </section>

    <div className="h-px gradient-gold" />

    {/* Values */}
    <RevealSection>
      <section className="py-24">
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <RevealItem><span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Our Team</span></RevealItem>
            <RevealItem delay={150}><h2 className="font-serif text-3xl lg:text-5xl font-bold mt-4">Meet the Partners</h2></RevealItem>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <RevealItem key={member.name} delay={i * 200}>
                <div className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-gold/30 transition-all duration-500">
                  <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center font-serif text-2xl font-bold text-primary-foreground mb-6">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
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
