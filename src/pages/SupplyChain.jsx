import { Link } from 'react-router-dom';
import { 
  MdHandshake,
  MdVerifiedUser,
  MdInventory2,
  MdLocalShipping,
  MdPublic,
  MdScheduleSend,
  MdCheckCircle,
  MdChevronRight,
  MdNearMe
} from 'react-icons/md';
import supplychain from '../assets/images/supplychain.png';
import supplychain1 from '../assets/images/supplychain1.png';
import supplychain2 from '../assets/images/supplychain2.png';

const SupplyChain = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            src={supplychain}
            alt="Logistics hub"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 mb-6 text-[#768dad] text-xs font-semibold uppercase tracking-widest">
              <span>Services</span>
              <MdChevronRight className="text-sm" />
              <span className="text-[#ffdea5]">Logistics</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Supply Chain, Procurement & Logistics
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              Precision-engineered solutions for global trade. We integrate sourcing, storage, and movement to ensure your operations never miss a beat.
            </p>
          </div>
        </div>
      </section>

      {/* Procurement Bento Grid */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold text-[#000f22] mb-4">
              Procurement & Strategic Sourcing
            </h2>
            <p className="text-[#43474d]">
              Navigating complex global markets with ethical sourcing and rigorous vendor management. Our procurement strategies reduce risk and drive cost efficiency.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#ebeef1] p-6 rounded-xl border border-slate-200/30 flex items-center gap-4">
              <span className="text-[#C5A059] text-4xl font-bold">98%</span>
              <span className="text-sm text-[#43474d] leading-tight">
                Supplier<br />Reliability
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <MdHandshake className="text-5xl text-[#C5A059] mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Global Sourcing</h3>
              <p className="text-[#43474d] mb-6">
                Direct access to primary manufacturers and Tier-1 suppliers across major industrial hubs, ensuring quality and competitive pricing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium text-[#000f22]">
                  <MdCheckCircle className="text-[#C5A059] text-xl" />
                  Vendor Audits & Verification
                </li>
                <li className="flex items-center gap-2 font-medium text-[#000f22]">
                  <MdCheckCircle className="text-[#C5A059] text-xl" />
                  Bulk Contract Negotiation
                </li>
              </ul>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={supplychain1}
                alt="Business negotiation"
              />
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="bg-[#0A2540] p-8 rounded-xl text-white">
            <MdVerifiedUser className="text-5xl text-[#C5A059] mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Compliance</h3>
            <p className="text-white/70">
              Rigorous adherence to international trade laws, ESG standards, and local regulatory frameworks for every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Warehousing & Distribution */}
      <section className="bg-[#ebeef1] py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  className="w-full h-full object-cover" 
                  src={supplychain2}
                  alt="Warehouse interior"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-lg border border-slate-100 hidden md:block max-w-xs">
                <h4 className="text-2xl font-semibold text-[#C5A059] mb-2">50,000+ SQM</h4>
                <p className="text-sm text-[#43474d]">
                  Strategic storage capacity across primary distribution nodes.
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-widest mb-4 block">
                Storage & Movement
              </span>
              <h2 className="text-5xl font-bold text-[#000f22] mb-6">
                Intelligent Warehousing & Distribution
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <MdInventory2 className="text-[#000f22]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#000f22] mb-2">Inventory Precision</h4>
                    <p className="text-[#43474d]">
                      Real-time WMS tracking with 99.9% accuracy. We manage everything from ambient storage to specialized climate-controlled environments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <MdLocalShipping className="text-[#000f22]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#000f22] mb-2">Haulage & Fleet</h4>
                    <p className="text-[#43474d]">
                      Our owned and managed fleet provides reliable last-mile delivery and heavy-duty haulage across all terrains and distances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import/Export & Dispatch */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-[#000f22] mb-4">Cross-Border Excellence</h2>
          <p className="text-lg text-[#43474d]">
            Seamlessly connecting markets through air, sea, and land. We handle the complexity so you can focus on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all border-b-4 border-b-[#C5A059]">
            <div className="flex justify-between items-start mb-6">
              <MdPublic className="text-6xl text-[#0A2540]" />
              <span className="text-xs font-bold bg-[#ebeef1] px-3 py-1 rounded">GLOBAL</span>
            </div>
            <h3 className="text-3xl font-semibold text-[#000f22] mb-4">Import/Export Logistics</h3>
            <p className="text-[#43474d] mb-8">
              End-to-end management of customs documentation, freight forwarding, and port operations. We ensure smooth transit through all international checkpoints.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f7fafd] p-4 rounded-lg">
                <span className="text-xs block text-[#C5A059] mb-1">Freight</span>
                <span className="text-sm font-medium text-[#000f22]">Multimodal Solutions</span>
              </div>
              <div className="bg-[#f7fafd] p-4 rounded-lg">
                <span className="text-xs block text-[#C5A059] mb-1">Customs</span>
                <span className="text-sm font-medium text-[#000f22]">Expedited Clearing</span>
              </div>
            </div>
          </div>

          <div className="group bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all border-b-4 border-b-[#0A2540]">
            <div className="flex justify-between items-start mb-6">
              <MdScheduleSend className="text-6xl text-[#0A2540]" />
              <span className="text-xs font-bold bg-[#fed488] px-3 py-1 rounded">RAPID</span>
            </div>
            <h3 className="text-3xl font-semibold text-[#000f22] mb-4">Dispatch Operations</h3>
            <p className="text-[#43474d] mb-8">
              Optimized routing and real-time tracking for time-sensitive deliveries. Our dispatch center operates 24/7 to manage your critical shipments.
            </p>
            <div className="flex items-center gap-4 p-4 bg-[#0A2540] rounded-lg text-white">
              <MdNearMe className="text-[#C5A059] text-2xl" />
              <div>
                <span className="block text-xs text-white/60">Average Transit Time</span>
                <span className="text-sm font-medium">Reduced by 15% YoY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="bg-[#0A2540] rounded-2xl overflow-hidden relative p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059] blur-[120px] rounded-full"></div>
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to streamline your supply chain?
              </h2>
              <p className="text-lg text-white/70">
                Connect with our logistics experts today to design a bespoke strategy for your procurement and distribution needs.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link 
                to="/contact"
                className="bg-[#C5A059] text-[#0A2540] px-10 py-5 rounded-lg text-xl font-semibold hover:scale-105 transition-transform shadow-xl inline-block"
              >
                Request Logistics Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupplyChain;
