import { Link } from 'react-router-dom';
import { 
  MdSell,
  MdAnalytics,
  MdDomain,
  MdArchitecture,
  MdKey,
  MdCheckCircle,
  MdChevronRight,
  MdArrowForward
} from 'react-icons/md';
import realestateBackground from '../assets/images/realestate-backgroun.png';
import realestate1 from '../assets/images/realestate1.png';
import person1 from '../assets/images/person1.png';

const RealEstate = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            src={realestateBackground}
            alt="Modern skyscraper"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <nav className="flex items-center gap-2 mb-6 text-white/60 text-xs font-semibold">
            <span>Home</span>
            <MdChevronRight className="text-sm" />
            <span>Services</span>
            <MdChevronRight className="text-sm" />
            <span className="text-[#C5A059]">Real Estate</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl">
            Real Estate, Development & Management
          </h1>
          <p className="text-base text-white/80 max-w-xl mb-8">
            Pioneering excellence in infrastructure and property portfolio optimization across global markets.
          </p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-[#000f22] mb-4">Our Core Capabilities</h2>
          <div className="h-1 w-20 bg-[#C5A059]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Property Sales & Leasing */}
          <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <MdSell className="text-[#C5A059] text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-[#000f22]">Property Sales & Leasing</h3>
              <p className="text-[#43474d] mb-6">
                Expert transaction management for high-value commercial and residential assets. We leverage deep market intelligence to secure premium outcomes for our clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Market Valuation
                </li>
                <li className="flex items-center gap-2 font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Strategic Marketing
                </li>
                <li className="flex items-center gap-2 font-medium text-[#181c1e]">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Tenant Acquisition
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={realestate1}
                alt="Modern office interior"
              />
            </div>
          </div>

          {/* Real Estate Consultancy */}
          <div className="md:col-span-4 bg-[#0A2540] p-8 rounded-xl shadow-sm text-white flex flex-col justify-between">
            <div>
              <MdAnalytics className="text-[#C5A059] text-5xl mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Consultancy</h3>
              <p className="text-white/70">
                Strategic advisory services for large-scale investment portfolios and site acquisitions.
              </p>
            </div>
            <div className="mt-8">
              <button className="flex items-center gap-2 text-[#C5A059] font-medium hover:translate-x-1 transition-transform">
                Learn Strategy <MdArrowForward />
              </button>
            </div>
          </div>

          {/* Facility Management */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <MdDomain className="text-[#C5A059] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-[#000f22]">Facility Management</h3>
            <p className="text-[#43474d]">
              Maintaining asset value through comprehensive technical and operational support for large complexes.
            </p>
          </div>

          {/* Property Development */}
          <div className="md:col-span-4 bg-[#f1f4f7] p-8 rounded-xl shadow-sm border border-slate-200">
            <MdArchitecture className="text-[#C5A059] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-[#000f22]">Development</h3>
            <p className="text-[#43474d]">
              End-to-end development services from site selection and architectural planning to construction completion.
            </p>
          </div>

          {/* Short-let Management */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <MdKey className="text-[#C5A059] text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-[#000f22]">Short-let Management</h3>
            <p className="text-[#43474d]">
              Optimizing yield through professional management of luxury short-stay and serviced accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-[#ebeef1] py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-[#C5A059] text-5xl font-bold mb-2">500+</p>
            <p className="text-sm font-medium text-[#43474d]">Properties Managed</p>
          </div>
          <div>
            <p className="text-[#C5A059] text-5xl font-bold mb-2">$1.2B</p>
            <p className="text-sm font-medium text-[#43474d]">Asset Valuation</p>
          </div>
          <div>
            <p className="text-[#C5A059] text-5xl font-bold mb-2">15+</p>
            <p className="text-sm font-medium text-[#43474d]">Years Excellence</p>
          </div>
          <div>
            <p className="text-[#C5A059] text-5xl font-bold mb-2">98%</p>
            <p className="text-sm font-medium text-[#43474d]">Client Retention</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="bg-[#0A2540] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl">
          <div className="flex-1 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Expert guidance for your next acquisition.
            </h2>
            <p className="text-white/70 text-base mb-8">
              Our seasoned consultants are ready to help you navigate the complexities of property development and investment.
            </p>
            <div>
              <Link 
                to="/contact"
                className="inline-block bg-[#C5A059] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#b08e4d] transition-all shadow-lg active:scale-[0.98]"
              >
                Speak to a Property Consultant
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative min-h-[300px]">
            <img 
              className="w-full h-full object-cover" 
              src={person1}
              alt="Property consultant"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RealEstate;
