import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdArchitecture,
  MdDiamond,
  MdInventory2,
  MdCorporateFare,
  MdCheckCircle,
  MdChevronRight,
  MdRequestQuote
} from 'react-icons/md';
import contract from '../assets/images/contract.png';
import contract1 from '../assets/images/contract1.png';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const GeneralContracts = () => {
  return (
    <motion.main
      className="max-w-[1280px] mx-auto px-6 md:px-12 py-12"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-[#43474d] mb-8">
        <span>Services</span>
        <MdChevronRight className="w-4 h-4" />
        <span className="text-[#000f22] font-bold">General Contracts & Merchandise</span>
      </nav>

      {/* Hero Section */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <div className="inline-flex items-center bg-[#fed488] text-[#785a1a] px-3 py-1 rounded-full text-xs uppercase tracking-widest">
            Sector Excellence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#000f22] leading-tight">
            General Contracts & Professional Merchandise
          </h1>
          <p className="text-lg text-[#43474d] max-w-xl">
            DEE SQUARED CONTINENTAL LIMITED provides comprehensive procurement, strategic supply chain management, and high-level general contracting services for public and private institutions.
          </p>
          <div className="pt-4">
            <button className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-medium flex items-center gap-3 shadow-md hover:shadow-lg transition-all">
              Request a Supply Quote
              <MdRequestQuote />
            </button>
          </div>
        </div>
        <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl">
          <img
            alt="Global Logistics and Supply"
            className="w-full h-full object-cover"
            src={contract}
          />
        </div>
      </header>

      {/* Service Bento Grid */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-[#000f22] mb-4">Core Competencies</h2>
            <p className="text-[#43474d]">
              We bridge the gap between resource demand and supply with precision-engineered logistics and ethical procurement standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature: General Contracting */}
          <div className="md:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 bg-[#0A2540] text-white rounded-lg flex items-center justify-center mb-6">
                <MdArchitecture />
              </div>
              <h3 className="text-2xl font-semibold text-[#000f22] mb-4">General Contracting</h3>
              <p className="text-[#43474d] mb-6">
                From infrastructure development to specialized facility management, we handle complex project lifecycles with a focus on structural integrity and regulatory compliance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-xl" />
                  Project Management Excellence
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-xl" />
                  Structural & Civil Engineering
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-xl" />
                  Turnkey Facility Solutions
                </li>
              </ul>
            </div>
            <div className="h-48 rounded-lg overflow-hidden">
              <img
                alt="Engineering Contract"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={contract1}
              />
            </div>
          </div>

          {/* Small Feature: Trading of Raw Materials */}
          <div className="md:col-span-4 bg-[#0A2540] text-white p-8 rounded-xl flex flex-col items-start shadow-sm">
            <div className="w-12 h-12 bg-[#775a19] text-white rounded-lg flex items-center justify-center mb-6">
              <MdDiamond />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Raw Materials Trading</h3>
            <p className="text-sm text-[#768dad] leading-relaxed mb-6">
              Strategic sourcing and global distribution of industrial-grade raw materials including minerals, aggregates, and energy precursors.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10 w-full">
              <div className="text-5xl font-bold text-[#775a19] mb-2">15+</div>
              <div className="text-xs uppercase tracking-widest text-[#768dad]">Global Partners</div>
            </div>
          </div>

          {/* Feature: Supplies & Distribution */}
          <div className="md:col-span-6 bg-[#f1f4f7] p-8 rounded-xl border border-slate-200 hover:border-[#775a19] transition-colors">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <MdInventory2 className="text-[#775a19] text-5xl" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#000f22] mb-2">Supplies & Distribution</h4>
                <p className="text-[#43474d]">
                  End-to-end supply chain solutions ensuring critical hardware and essential equipment reach their destination with zero downtime.
                </p>
              </div>
            </div>
          </div>

          {/* Feature: Corporate Supply Services */}
          <div className="md:col-span-6 bg-[#f1f4f7] p-8 rounded-xl border border-slate-200 hover:border-[#775a19] transition-colors">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <MdCorporateFare className="text-[#775a19] text-5xl" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-[#000f22] mb-2">Corporate Supply Services</h4>
                <p className="text-[#43474d]">
                  Tailored procurement for large-scale enterprises, providing high-volume consumable and asset replenishment on long-term service agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Stats Section */}
      <section className="bg-[#0A2540] rounded-2xl overflow-hidden mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 space-y-8">
            <h2 className="text-5xl font-bold text-white">Experience Operational Excellence</h2>
            <p className="text-lg text-white/70">
              Join hundreds of institutional partners who trust DEE SQUARED for their high-stakes procurement and contracting needs.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-semibold text-[#C5A059]">98%</div>
                <div className="text-xs text-white/50 uppercase">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-[#C5A059]">24/7</div>
                <div className="text-xs text-white/50 uppercase">Logistics Support</div>
              </div>
            </div>
          </div>
          <div className="bg-[#e0e3e6] p-12 md:p-20 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-[#000f22] mb-6">Request a Supply Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-[#181c1e] mb-2">Full Name</label>
                  <input
                    className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#181c1e] mb-2">Corporate Email</label>
                  <input
                    className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#181c1e] mb-2">Required Service</label>
                  <select className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none">
                    <option>General Contracting</option>
                    <option>Raw Material Sourcing</option>
                    <option>Corporate Supplies</option>
                    <option>Bulk Distribution</option>
                  </select>
                </div>
                <button
                  className="w-full bg-[#C5A059] text-white py-4 rounded-lg font-medium shadow-md hover:bg-[#b08d4b] transition-colors mt-4"
                  type="button"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default GeneralContracts;
