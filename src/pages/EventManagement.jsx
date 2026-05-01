import { Link } from 'react-router-dom';
import { 
  MdEventNote, 
  MdInventory2, 
  MdFormatPaint, 
  MdRestaurant, 
  MdCheckCircle,
  MdPhoneInTalk,
  MdMail,
  MdVerified,
  MdDiamond,
  MdGroups
} from 'react-icons/md';
import eventBackground from '../assets/images/eventmgt-background.png';
import event1 from '../assets/images/event1.png';
import event2 from '../assets/images/event2.png';

const EventManagement = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative bg-[#0A2540] h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src={eventBackground}
            alt="Luxury gala event"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-widest mb-4 block">
              Premium Hospitality
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Event Management & Executive Protocol
            </h1>
            <p className="text-[#768dad] text-base mb-8">
              Elevating corporate and social gatherings through precision planning, high-end logistics, and impeccable service standards.
            </p>
            <a
              className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-medium inline-block shadow-lg hover:shadow-xl transition-all"
              href="#quote-form"
            >
              Request an Event Quote
            </a>
          </div>
        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-[#0A2540] mb-2">Our Core Expertise</h2>
          <p className="text-[#43474d]">Comprehensive solutions for every aspect of your event's lifecycle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Event Planning */}
          <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <MdEventNote className="text-[#C5A059] mb-4 text-5xl" />
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Event Planning</h3>
              <p className="text-[#43474d] mb-4">
                End-to-end management for high-stakes corporate summits and elegant social galas. Our team handles logistics, scheduling, and vendor coordination with absolute precision.
              </p>
              <ul className="space-y-2 text-sm text-[#181c1e]">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Concept Development
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Venue Procurement
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] text-lg" /> Timeline Management
                </li>
              </ul>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden h-48 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src={event1}
                alt="Event planning desk"
              />
            </div>
          </div>

          {/* Equipment Rentals */}
          <div className="md:col-span-4 bg-[#0A2540] text-white p-8 rounded-xl shadow-sm">
            <MdInventory2 className="text-[#C5A059] mb-4 text-5xl" />
            <h3 className="text-2xl font-semibold mb-4">Equipment Rentals</h3>
            <p className="text-[#768dad] mb-6">
              Access to state-of-the-art audiovisual gear, staging, and luxury seating to transform any space.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                <span className="text-3xl font-semibold text-[#C5A059] block">500+</span>
                <span className="text-xs uppercase tracking-widest text-[#768dad]">Units</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                <span className="text-3xl font-semibold text-[#C5A059] block">24/7</span>
                <span className="text-xs uppercase tracking-widest text-[#768dad]">Support</span>
              </div>
            </div>
          </div>

          {/* Decoration */}
          <div className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <MdFormatPaint className="text-[#C5A059] mb-4 text-5xl" />
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Aesthetic Decoration</h3>
            <p className="text-[#43474d]">
              Bespoke floral arrangements and structural decor that reflect your brand's unique identity and aesthetic vision.
            </p>
          </div>

          {/* Catering/Protocol */}
          <div className="md:col-span-8 bg-[#fdfaf5] p-8 rounded-xl shadow-sm border border-[#fed488]/30 flex flex-col md:flex-row-reverse gap-6">
            <div className="flex-1">
              <MdRestaurant className="text-[#775a19] mb-4 text-5xl" />
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Catering & Protocol</h3>
              <p className="text-[#43474d] mb-4">
                World-class culinary experiences paired with professional protocol services for high-profile dignitaries and corporate executives.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#fed488] text-[#5d4201] rounded-full text-xs font-semibold">
                  VIP Protocol
                </span>
                <span className="px-3 py-1 bg-[#fed488] text-[#5d4201] rounded-full text-xs font-semibold">
                  Gourmet Catering
                </span>
                <span className="px-3 py-1 bg-[#fed488] text-[#5d4201] rounded-full text-xs font-semibold">
                  Concierge
                </span>
              </div>
            </div>
            <div className="flex-1 rounded-lg overflow-hidden h-48 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src={event2}
                alt="Catering display"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Form Section */}
      <section className="py-24 bg-[#ebeef1]" id="quote-form">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-[#0A2540] md:w-1/3 p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6">Request an Event Quote</h2>
              <p className="text-[#768dad] mb-8">
                Share your vision with us, and our team will provide a tailored proposal within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MdPhoneInTalk className="text-[#C5A059] w-6 h-6" />
                  <span className="text-sm">+234 (0) 800 DEE SQUARED</span>
                </div>
                <div className="flex gap-4">
                  <MdMail className="text-[#C5A059] w-6 h-6" />
                  <span className="text-sm">events@deesquared.com</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#43474d]">Full Name</label>
                  <input
                    className="border-slate-200 rounded-lg focus:ring-[#0A2540] focus:border-[#0A2540] transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#43474d]">Email Address</label>
                  <input
                    className="border-slate-200 rounded-lg focus:ring-[#0A2540] focus:border-[#0A2540] transition-all"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#43474d]">Event Type</label>
                  <select className="border-slate-200 rounded-lg focus:ring-[#0A2540] focus:border-[#0A2540] transition-all">
                    <option>Corporate Summit</option>
                    <option>Social Gala</option>
                    <option>Product Launch</option>
                    <option>Exhibition</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#43474d]">Estimated Guests</label>
                  <input
                    className="border-slate-200 rounded-lg focus:ring-[#0A2540] focus:border-[#0A2540] transition-all"
                    placeholder="100"
                    type="number"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-1">
                  <label className="text-sm text-[#43474d]">Project Brief</label>
                  <textarea
                    className="border-slate-200 rounded-lg focus:ring-[#0A2540] focus:border-[#0A2540] transition-all"
                    placeholder="Tell us more about your event..."
                    rows="4"
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                    className="w-full bg-[#C5A059] text-white font-semibold py-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
                    type="submit"
                  >
                    Submit RFQ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdVerified className="text-[#0A2540] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Institutional Trust</h4>
            <p className="text-[#43474d]">
              Decades of experience handling high-profile events for global conglomerates.
            </p>
          </div>

          <div className="text-center p-6 border-x border-slate-100">
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdDiamond className="text-[#0A2540] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Premium Quality</h4>
            <p className="text-[#43474d]">
              Uncompromising standards in catering, equipment, and hospitality protocol.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdGroups className="text-[#0A2540] text-4xl" />
            </div>
            <h4 className="text-xl font-semibold text-[#0A2540] mb-3">Diverse Solutions</h4>
            <p className="text-[#43474d]">
              Flexible services tailored to both corporate rigor and social elegance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventManagement;
