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
            <Link to="/services/corporate" className="text-sm text-muted-foreground hover:text-gold transition-colors">Corporate</Link>
            <Link to="/services/commercial" className="text-sm text-muted-foreground hover:text-gold transition-colors">Commercial</Link>
            <Link to="/services/energy-construction" className="text-sm text-muted-foreground hover:text-gold transition-colors">Energy, Construction & Engineering</Link>
            <Link to="/services/property" className="text-sm text-muted-foreground hover:text-gold transition-colors">Property</Link>
            <Link to="/services/adr" className="text-sm text-muted-foreground hover:text-gold transition-colors">Alternative Dispute Resolution</Link>
            <Link to="/services/taxation" className="text-sm text-muted-foreground hover:text-gold transition-colors">Taxation</Link>
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
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+2347036207801" className="text-sm text-muted-foreground hover:text-gold transition-colors">+234 703 620 7801</a>
                <a href="tel:+2348036003580" className="text-sm text-muted-foreground hover:text-gold transition-colors">+234 803 600 3580</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:legal@1sthierarchy.com" className="text-sm text-muted-foreground hover:text-gold transition-colors">legal@1sthierarchy.com</a>
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
