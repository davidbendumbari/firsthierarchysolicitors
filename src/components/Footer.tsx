import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 gradient-gold rounded-sm flex items-center justify-center font-serif font-bold text-primary-foreground text-lg">
              1H
            </div>
            <div>
              <span className="font-serif text-lg font-semibold text-foreground">1ST Hierarchy</span>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted-foreground">Solicitors</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4">
            Premier corporate and commercial law firm delivering exceptional legal solutions in Abuja, Nigeria.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Practice Areas</h4>
          <div className="flex flex-col gap-2">
            <Link to="/services/corporate-commercial" className="text-sm text-muted-foreground hover:text-gold transition-colors">Corporate & Commercial Law</Link>
            <Link to="/services/contracts" className="text-sm text-muted-foreground hover:text-gold transition-colors">Contract Drafting</Link>
            <Link to="/services/mergers-acquisitions" className="text-sm text-muted-foreground hover:text-gold transition-colors">Mergers & Acquisitions</Link>
            <Link to="/services/compliance" className="text-sm text-muted-foreground hover:text-gold transition-colors">Regulatory Compliance</Link>
            <Link to="/services/dispute-resolution" className="text-sm text-muted-foreground hover:text-gold transition-colors">Dispute Resolution</Link>
            <Link to="/services/legal-advisory" className="text-sm text-muted-foreground hover:text-gold transition-colors">Legal Advisory</Link>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-gold transition-colors">About Us</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-gold transition-colors">Our Services</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">No. 3 T. O. S. Benson Crescent, Off Ngozi Okonjo-Iweala Way, Utako, Abuja, FCT, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span className="text-sm text-muted-foreground"><span className="text-sm text-muted-foreground">+234 703 620 7801</span></span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span className="text-sm text-muted-foreground">info@1sthierarchy.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} 1ST Hierarchy Solicitors. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Licensed to practice law in the Federal Republic of Nigeria
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
