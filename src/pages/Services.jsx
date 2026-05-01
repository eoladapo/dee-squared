import { Link } from 'react-router-dom';
import { 
  MdCelebration,
  MdLocalShipping, 
  MdSailing, 
  MdDomain, 
  MdDescription, 
  MdDevices,
  MdArrowForward
} from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import serviceBackground from '../assets/images/service-background.png';
import event1 from '../assets/images/event1.png';

const Services = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative py-24 px-6 md:px-12 bg-[#0A2540] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover" 
            src={serviceBackground}
            alt="Modern glass skyscraper"
          />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services Hub</h1>
            <p className="text-base text-[#768dad] max-w-2xl">
              DEE SQUARED CONTINENTAL LIMITED operates across multiple sectors, delivering integrated solutions to individuals, businesses, and institutions.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Event Management - Large Card */}
          <div className="md:col-span-8 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <MdCelebration className="text-[#775a19] text-5xl mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Event Management & Hospitality</h3>
                <p className="text-[#43474d] mb-6">
                  Elevating corporate and social gatherings through precision planning, high-end logistics, and impeccable service standards for memorable experiences.
                </p>
                <Link 
                  to="/services/event-management"
                  className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
                >
                  VIEW SERVICES <MdArrowForward className="ml-1" />
                </Link>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden h-48 md:h-auto">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={event1}
                  alt="Corporate event"
                />
              </div>
            </div>
          </div>

          {/* Consultancy & Training - Medium Card */}
          <div className="md:col-span-4 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <FaChartLine className="text-[#775a19] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Consultancy & Training</h3>
            <p className="text-[#43474d] mb-6">
              Strategic advisory services and professional training programs for institutions seeking to optimize operations and build leadership capacity.
            </p>
            <Link 
              to="/services/consultancy"
              className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
            >
              VIEW SERVICES <MdArrowForward className="ml-1" />
            </Link>
          </div>

          {/* Supply Chain & Logistics - Small Card */}
          <div className="md:col-span-4 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <MdLocalShipping className="text-[#775a19] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Supply Chain & Logistics</h3>
            <p className="text-[#43474d] mb-6">
              Global supply chain management and specialized transport solutions ensuring seamless end-to-end movement of assets and goods.
            </p>
            <Link 
              to="/services/supply-chain"
              className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
            >
              LEARN MORE <MdArrowForward className="ml-1" />
            </Link>
          </div>

          {/* Import/Export - Small Card */}
          <div className="md:col-span-4 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <MdSailing className="text-[#775a19] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Import / Export</h3>
            <p className="text-[#43474d] mb-6">
              Global trade facilitation ensuring speed and regulatory compliance, bridging markets across continents with precision.
            </p>
            <Link 
              to="/services/import-export"
              className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
            >
              LEARN MORE <MdArrowForward className="ml-1" />
            </Link>
          </div>

          {/* Real Estate - Small Card */}
          <div className="md:col-span-4 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <MdDomain className="text-[#775a19] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Real Estate</h3>
            <p className="text-[#43474d] mb-6">
              Premium property acquisition, management, and portfolio diversification for institutional investors.
            </p>
            <Link 
              to="/services/real-estate"
              className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
            >
              LEARN MORE <MdArrowForward className="ml-1" />
            </Link>
          </div>

          {/* General Contracts & Merchandise - Medium Card */}
          <div className="md:col-span-6 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <MdDescription className="text-[#775a19] text-5xl flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">General Contracts & Merchandise</h3>
                <p className="text-[#43474d] mb-4">
                  Comprehensive procurement, strategic supply chain management, and high-level general contracting services for public and private institutions.
                </p>
                <Link 
                  to="/services/general-contracts"
                  className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
                >
                  LEARN MORE <MdArrowForward className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ICT, Media & Creative Services - Medium Card */}
          <div className="md:col-span-6 group bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <MdDevices className="text-[#775a19] text-5xl flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">ICT, Media & Creative Services</h3>
                <p className="text-[#43474d] mb-4">
                  Comprehensive ICT solutions and creative media production designed to scale your enterprise with digital transformation and innovation.
                </p>
                <Link 
                  to="/services/ict-media"
                  className="inline-flex items-center text-[#775a19] font-medium hover:gap-2 transition-all"
                >
                  LEARN MORE <MdArrowForward className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ebeef1] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Partner With Excellence</h2>
          <p className="text-base text-[#43474d] mb-10 max-w-2xl mx-auto">
            Ready to elevate your projects with our integrated sector expertise? Our team of specialists is prepared to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Inquire About Our Services
            </Link>
            <button className="border-2 border-[#0A2540] text-[#0A2540] px-8 py-4 rounded-lg font-medium hover:bg-[#0A2540] hover:text-white transition-all">
              Download Corporate Profile
            </button>
          </div>
        </div>
      </section>

      {/* Global Presence Stats */}
      <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">12+</div>
            <div className="text-xs uppercase tracking-widest text-[#43474d]">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">150+</div>
            <div className="text-xs uppercase tracking-widest text-[#43474d]">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest text-[#43474d]">Support Hubs</div>
          </div>
          <div className="text-center">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">0.9k</div>
            <div className="text-xs uppercase tracking-widest text-[#43474d]">Global Experts</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
