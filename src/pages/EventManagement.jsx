import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const EventManagement = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.header
        className="relative bg-[#0A2540] h-[500px] flex items-center overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src={eventBackground}
            alt="Luxury gala event"
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </motion.header>

      {/* Services Bento Grid */}
      <motion.section
        className="py-24 max-w-[1280px] mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-[#0A2540] mb-2">Our Core Expertise</h2>
          <p className="text-[#43474d]">Comprehensive solutions for every aspect of your event's lifecycle.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Event Planning */}
          <motion.div
            className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6"
            variants={fadeInUp}
          >
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
          </motion.div>

          {/* Equipment Rentals */}
          <motion.div
            className="md:col-span-4 bg-[#0A2540] text-white p-8 rounded-xl shadow-sm"
            variants={fadeInUp}
          >
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
          </motion.div>

          {/* Decoration */}
          <motion.div
            className="md:col-span-4 bg-white p-8 rounded-xl shadow-sm border border-slate-100"
            variants={fadeInUp}
          >
            <MdFormatPaint className="text-[#C5A059] mb-4 text-5xl" />
            <h3 className="text-2xl font-semibold text-[#0A2540] mb-4">Aesthetic Decoration</h3>
            <p className="text-[#43474d]">
              Bespoke floral arrangements and structural decor that reflect your brand's unique identity and aesthetic vision.
            </p>
          </motion.div>

          {/* Catering/Protocol */}
          <motion.div
            className="md:col-span-8 bg-[#fdfaf5] p-8 rounded-xl shadow-sm border border-[#fed488]/30 flex flex-col md:flex-row-reverse gap-6"
            variants={fadeInUp}
          >
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
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Lead Gen Form Section */}
      <motion.section
        className="py-24 bg-[#ebeef1]"
        id="quote-form"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Request an Event Quote</h2>
              <p className="text-lg text-[#43474d] max-w-2xl mx-auto">
                Share your vision with us, and our team will provide a tailored proposal within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center mb-4">
                    <MdPhoneInTalk className="text-[#C5A059] w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0A2540] mb-2 uppercase tracking-wider">Phone</h3>
                  <p className="text-[#43474d] font-medium">+234 (0) 800 DEE SQUARED</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center mb-4">
                    <MdMail className="text-[#C5A059] w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0A2540] mb-2 uppercase tracking-wider">Email</h3>
                  <p className="text-[#43474d] font-medium">events@deesquared.com</p>
                </div>

                <div className="bg-gradient-to-br from-[#0A2540] to-[#0d3254] p-6 rounded-xl shadow-lg text-white">
                  <div className="text-3xl font-bold text-[#C5A059] mb-2">24hrs</div>
                  <p className="text-sm text-white/80">Average response time for all event inquiries</p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100">
                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#0A2540]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] placeholder:text-slate-400 focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#0A2540]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] placeholder:text-slate-400 focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Event Type and Guests Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#0A2540]">
                        Event Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem'
                        }}
                      >
                        <option value="">Select event type</option>
                        <option value="corporate-summit">Corporate Summit</option>
                        <option value="social-gala">Social Gala</option>
                        <option value="product-launch">Product Launch</option>
                        <option value="exhibition">Exhibition</option>
                        <option value="wedding">Wedding</option>
                        <option value="conference">Conference</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-[#0A2540]">
                        Estimated Guests <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="100"
                        min="1"
                        required
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] placeholder:text-slate-400 focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#0A2540]">
                      Preferred Event Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Project Brief */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-[#0A2540]">
                      Event Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Tell us more about your event vision, requirements, and any specific services you need..."
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-lg text-[#0A2540] placeholder:text-slate-400 focus:bg-white focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#C5A059] to-[#b08e4d] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      Submit Event Request
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <p className="text-xs text-center text-[#43474d] mt-4">
                      By submitting this form, you agree to our terms and privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-24 max-w-[1280px] mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>
    </motion.main>
  );
};

export default EventManagement;
