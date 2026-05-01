import { Link } from 'react-router-dom';
import { MdCheckCircle, MdEco, MdDescription } from 'react-icons/md';
import importBackground from '../assets/images/import-background.png';
import import1 from '../assets/images/import1.png';
import import2 from '../assets/images/import2.png';
import import3 from '../assets/images/import3.png';

const ImportExport = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40" 
            src={importBackground}
            alt="Global Import & Export"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 px-3 py-1 rounded text-xs mb-4">
              LOGISTICS & COMMODITIES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Import & Export Solutions
            </h1>
            <p className="text-base text-white/80 mb-8">
              Bridging markets across continents with precision, integrity, and comprehensive supply chain management for the modern global economy.
            </p>
            <button className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Discuss Trade Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-[#f7fafd]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Importation of general goods */}
            <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  className="w-full h-64 object-cover rounded-lg" 
                  src={import1}
                  alt="Importation of general goods"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                  Importation of General Goods
                </h3>
                <p className="text-[#43474d] mb-6">
                  We manage the seamless flow of international products, handling end-to-end procurement and delivery for diverse market demands.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-[#181c1e]">
                    <MdCheckCircle className="text-[#C5A059] text-xl" />
                    Verified Global Supplier Network
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-[#181c1e]">
                    <MdCheckCircle className="text-[#C5A059] text-xl" />
                    Quality Assurance Protocols
                  </li>
                </ul>
              </div>
            </div>

            {/* Export of commodities */}
            <div className="md:col-span-4 bg-[#0A2540] p-8 rounded-xl shadow-lg flex flex-col justify-between">
              <div>
                <MdEco className="text-[#C5A059] text-5xl mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Export of Commodities
                </h3>
                <p className="text-[#768dad] mb-8">
                  Facilitating the outbound movement of raw materials and agricultural assets to international processing hubs.
                </p>
              </div>
              <img 
                className="w-full h-32 object-cover rounded-lg opacity-80" 
                src={import2}
                alt="Export commodities"
              />
            </div>

            {/* Trade Facilitation */}
            <div className="md:col-span-4 bg-[#e5e8eb] p-8 rounded-xl border border-slate-200">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <MdDescription className="text-[#0A2540] text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                Trade Facilitation
              </h3>
              <p className="text-[#43474d]">
                Navigating complex regulatory landscapes and customs documentation to ensure compliance and rapid border clearance.
              </p>
            </div>

            {/* Storage Handling (Bento style) */}
            <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">
                  Storage & Handling
                </h3>
                <p className="text-[#43474d] mb-4">
                  State-of-the-art warehousing facilities equipped for specialized cargo handling and inventory preservation.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-[#ebeef1] rounded-lg">
                    <span className="text-[#C5A059] font-bold text-2xl">99.9%</span>
                    <p className="text-xs text-[#43474d]">Safety Rating</p>
                  </div>
                  <div className="p-4 bg-[#ebeef1] rounded-lg">
                    <span className="text-[#C5A059] font-bold text-2xl">24/7</span>
                    <p className="text-xs text-[#43474d]">Monitoring</p>
                  </div>
                </div>
              </div>
              <img 
                className="w-full h-full object-cover rounded-lg" 
                src={import3}
                alt="Storage and handling"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-5xl font-bold text-[#C5A059] mb-2">15+</p>
              <p className="text-xs text-[#43474d] uppercase tracking-widest">Global Ports</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#C5A059] mb-2">400k</p>
              <p className="text-xs text-[#43474d] uppercase tracking-widest">Tons Annually</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#C5A059] mb-2">28</p>
              <p className="text-xs text-[#43474d] uppercase tracking-widest">Partner Nations</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#C5A059] mb-2">0</p>
              <p className="text-xs text-[#43474d] uppercase tracking-widest">Trade Violations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="bg-[#0A2540] rounded-2xl p-16 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-[#C5A059] opacity-10 skew-x-[-20deg] translate-x-20"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to expand your market reach?
              </h2>
              <p className="text-base text-white/70 mb-10">
                Our trade experts are ready to design a custom logistics strategy that optimizes your supply chain and minimizes operational overhead.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link 
                  to="/contact"
                  className="bg-[#C5A059] text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all"
                >
                  Discuss Trade Opportunities
                </Link>
                <button className="border border-white/30 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Download Capabilities Deck
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImportExport;
