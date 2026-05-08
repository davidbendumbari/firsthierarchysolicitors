import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="1ST Hierarchy Solicitors logo" className="h-16 w-auto object-contain mx-auto" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4 text-center">
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
              <a href="tel:+2347036207801" className="text-sm text-muted-foreground hover:text-gold transition-colors">+234 703 620 7801</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:legal@1sthierarchy.com" className="text-sm text-muted-foreground hover:text-gold transition-colors">legal@1sthierarchy.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Find Us</h4>
        <div className="rounded-lg overflow-hidden border border-border">
          <iframe
            title="1ST Hierarchy Solicitors office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9049697052437!2d7.444638412214011!3d9.072421790953072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ad7a747dd97%3A0x20883a807e8f56e0!2s3%20T.O.S.%20Benson%20Crescent%2C%20Mabushi%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1777284734039!5m2!1sen!2sng"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Developed by <span className="text-gold">SozInsights Ltd</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
