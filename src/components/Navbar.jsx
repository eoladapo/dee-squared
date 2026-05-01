import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiChevronDown } from 'react-icons/hi';
import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  const services = [
    { name: 'All Services', path: '/services' },
    { name: 'Consultancy & Training', path: '/services/consultancy' },
    { name: 'Event Management', path: '/services/event-management' },
    { name: 'Supply Chain & Logistics', path: '/services/supply-chain' },
    { name: 'Import / Export', path: '/services/import-export' },
    { name: 'Real Estate', path: '/services/real-estate' },
    { name: 'ICT, Media & Creative', path: '/services/ict-media' },
    { name: 'General Contracts', path: '/services/general-contracts' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md text-[#0A2540] font-inter tracking-tight font-medium sticky top-0 border-b border-slate-100 shadow-sm z-50">
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-[1280px] mx-auto w-full">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DEE SQUARED" className="h-16 w-auto object-contain mix-blend-multiply" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1 font-medium' : 'text-[#0A2540]/70 hover:text-[#0A2540] transition-colors'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1 font-medium' : 'text-[#0A2540]/70 hover:text-[#0A2540] transition-colors'}`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 ${isServicesActive ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1 font-medium' : 'text-[#0A2540]/70 hover:text-[#0A2540] transition-colors'}`}
            >
              Services
              <HiChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`block px-4 py-3 hover:bg-[#C5A059]/10 transition-colors ${
                      location.pathname === service.path ? 'text-[#C5A059] font-medium bg-[#C5A059]/5' : 'text-[#0A2540]/70'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1 font-medium' : 'text-[#0A2540]/70 hover:text-[#0A2540] transition-colors'}`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="bg-[#0A2540] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Inquiry
          </Link>
          <button 
            className="md:hidden text-[#0A2540]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-[#C5A059] font-medium' : 'text-[#0A2540]/70'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-[#C5A059] font-medium' : 'text-[#0A2540]/70'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Services Submenu */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center justify-between w-full ${isServicesActive ? 'text-[#C5A059] font-medium' : 'text-[#0A2540]/70'}`}
              >
                Services
                <HiChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block py-2 ${
                        location.pathname === service.path ? 'text-[#C5A059] font-medium' : 'text-[#0A2540]/60'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-[#C5A059] font-medium' : 'text-[#0A2540]/70'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
