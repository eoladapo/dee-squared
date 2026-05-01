import { Link } from 'react-router-dom';
import { FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white w-full rounded-none border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 px-6 md:px-12 max-w-[1280px] mx-auto w-full">
        <div className="space-y-6">
          <img src={logo} alt="DEE SQUARED" className="h-16 w-auto object-contain brightness-0 invert" />
          <p className="text-white/70 max-w-xs text-sm">
            A leading multi-service company delivering integrated solutions across Africa's most vital sectors.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors">
              <FaGlobe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-[#C5A059] transition-colors">
              <FaPhone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-[#C5A059] uppercase tracking-wider text-xs">Solutions</h4>
          <nav className="flex flex-col space-y-3">
            <Link to="/services" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Infrastructure
            </Link>
            <Link to="/services/consultancy" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Consulting
            </Link>
            <Link to="/services/supply-chain" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Logistics
            </Link>
            <Link to="/services" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Energy
            </Link>
            <Link to="/services/event-management" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Event Management
            </Link>
            <Link to="/services/import-export" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Import/Export
            </Link>
            <Link to="/services/real-estate" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Real Estate
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-[#C5A059] uppercase tracking-wider text-xs">Company</h4>
          <nav className="flex flex-col space-y-3">
            <Link to="/about" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              About Us
            </Link>
            <Link to="/services" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Our Services
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Contact
            </Link>
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Careers
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-[#C5A059] underline-offset-4">
              Terms of Service
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-[#C5A059] uppercase tracking-wider text-xs">Newsletter</h4>
          <p className="text-white/70 text-xs">
            Stay updated with our multi-sector insights and company news.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-[#C5A059] outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-[#C5A059] text-[#0A2540] font-semibold py-2 rounded hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8 border-t border-white/10 text-center md:text-left text-white/50 text-xs">
        © 2024 DEE SQUARED CONTINENTAL LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
