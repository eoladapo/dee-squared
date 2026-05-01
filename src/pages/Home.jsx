import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdVerifiedUser,
  MdPublic,
  MdCelebration,
  MdLocalShipping,
  MdApartment,
  MdLan,
  MdSailing,
  MdDescription,
  MdInsights,
  MdArchitecture,
  MdLayers,
  MdHandshake,
  MdSupportAgent,
  MdArrowForward
} from 'react-icons/md';
import homepage1 from '../assets/images/homepage_background.png';
import homepag2 from '../assets/images/homepag2.png';
import event1 from '../assets/images/event1.png';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[870px] flex items-center pt-20 overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src={homepage1}
            alt="Corporate headquarters"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7fafd]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-[#fed488] text-[#785a1a] text-xs font-semibold mb-6 uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Global Excellence
            </motion.span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#000f22] mb-8 leading-tight">
              A Multi-Service Company Delivering Excellence Across Events, Logistics, Real Estate & More
            </h1>
            <p className="text-base text-[#43474d] mb-10 max-w-2xl">
              Providing sophisticated, integrated solutions tailored for the Nigerian market and beyond. We bridge gaps with professional execution and unwavering reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-[#C5A059] text-white px-6 py-4 rounded-lg text-base font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                Explore Our Services
                <MdArrowForward className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#0A2540] text-[#0A2540] px-6 py-4 rounded-lg text-base font-semibold hover:bg-[#0A2540]/5 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Snapshot */}
      <motion.section
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={homepag2}
                  alt="Professional office environment"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden lg:block border border-slate-100">
                <p className="text-4xl font-bold text-[#C5A059] mb-2">100%</p>
                <p className="text-sm text-[#43474d]">
                  Compliance with CAMA 2020 standards, ensuring legal integrity and business stability.
                </p>
              </div>
            </motion.div>

            <motion.div>
              <h2 className="text-3xl font-semibold text-[#000f22] mb-6">Our Foundation</h2>
              <p className="text-base text-[#43474d] mb-8">
                DEE SQUARED CONTINENTAL LIMITED is a premier conglomerate incorporated in Nigeria under the Companies and Allied Matters Act (CAMA 2020). We operate with a vision to redefine service delivery through a diverse portfolio that spans critical economic sectors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#C5A059]/10 rounded-lg">
                    <MdVerifiedUser className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#000f22]">Institutional Trust</h4>
                    <p className="text-[#43474d]">Built on a bedrock of legal transparency and rigorous corporate governance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#C5A059]/10 rounded-lg">
                    <MdPublic className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#000f22]">Global Credibility</h4>
                    <p className="text-[#43474d]">Leveraging local insights with international best practices for superior results.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Business Verticals Bento Grid */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#000f22] mb-4">Business Verticals</h2>
            <p className="text-base text-[#43474d] max-w-2xl mx-auto">
              Diverse expertise managed with singular precision across seven core sectors.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Event Management */}
            <motion.div variants={fadeInUp} className="md:col-span-8">
              <Link to="/services/event-management" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col justify-between h-full block">
                <div>
                  <MdCelebration className="text-[#C5A059] text-5xl mb-4" />
                  <h3 className="text-2xl font-semibold text-[#000f22] mb-2">Event Management</h3>
                  <p className="text-[#43474d] mb-6 max-w-md">
                    From corporate galas to institutional summits, we handle every detail with premium execution.
                  </p>
                </div>
                <img
                  className="rounded-lg h-48 w-full object-cover group-hover:scale-[1.02] transition-transform"
                  src={event1}
                  alt="Corporate event"
                />
              </Link>
            </motion.div>

            {/* Logistics */}
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <Link to="/services/supply-chain" className="bg-[#0A2540] p-8 rounded-xl text-white flex flex-col justify-between hover:bg-[#0A2540]/90 transition-colors h-full block">
                <div>
                  <MdLocalShipping className="text-[#C5A059] text-5xl mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Supply Chain & Logistics</h3>
                  <p className="text-white/80">Seamless end-to-end movement of assets and goods globally.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase">Reliability Guaranteed</span>
                  <MdArrowForward className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            {/* Real Estate */}
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <Link to="/services/real-estate" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full block">
                <MdApartment className="text-[#C5A059] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-[#000f22] mb-2">Real Estate</h3>
                <p className="text-[#43474d]">Investment, development, and management of premium properties.</p>
              </Link>
            </motion.div>

            {/* ICT & Media */}
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <MdLan className="text-[#C5A059] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-[#000f22] mb-2">ICT / Media</h3>
                <p className="text-[#43474d]">Modern digital infrastructure and creative communication solutions.</p>
              </div>
            </motion.div>

            {/* Import/Export */}
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <Link to="/services/import-export" className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full block">
                <MdSailing className="text-[#C5A059] text-5xl mb-4" />
                <h3 className="text-xl font-semibold text-[#000f22] mb-2">Import / Export</h3>
                <p className="text-[#43474d]">Global trade facilitation ensuring speed and regulatory compliance.</p>
              </Link>
            </motion.div>

            {/* General Contracts */}
            <motion.div variants={fadeInUp} className="md:col-span-6">
              <div className="bg-[#e5e8eb] p-8 rounded-xl flex items-center gap-6 h-full">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <MdDescription className="text-[#C5A059] text-5xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#000f22] mb-1">General Contracts</h3>
                  <p className="text-[#43474d]">Large-scale procurement and infrastructure projects.</p>
                </div>
              </div>
            </motion.div>

            {/* Consultancy */}
            <motion.div variants={fadeInUp} className="md:col-span-6">
              <Link to="/services/consultancy" className="bg-[#e5e8eb] p-8 rounded-xl flex items-center gap-6 hover:bg-[#e0e3e6] transition-colors h-full block">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <MdInsights className="text-[#C5A059] text-5xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#000f22] mb-1">Consultancy</h3>
                  <p className="text-[#43474d]">Strategic advisory for organizational growth and efficiency.</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-24 bg-[#0A2540] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
              <p className="text-[#768dad] text-base">
                We differentiate ourselves through a commitment to excellence and a structured approach to every sector we serve.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#C5A059]">15+</p>
                <p className="text-xs uppercase tracking-widest text-[#768dad]">Core Sectors</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-[#C5A059]">100%</p>
                <p className="text-xs uppercase tracking-widest text-[#768dad]">Delivery Rate</p>
              </div>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mb-6">
                <MdArchitecture className="text-white w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Professional Execution</h4>
              <p className="text-sm text-[#768dad] leading-relaxed">
                Precision-driven methodologies applied to every project, regardless of scale or complexity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mb-6">
                <MdLayers className="text-white w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Multi-sector Expertise</h4>
              <p className="text-sm text-[#768dad] leading-relaxed">
                Deep knowledge across diverse industries allows us to offer integrated, holistic solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mb-6">
                <MdHandshake className="text-white w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Reliable Partnerships</h4>
              <p className="text-sm text-[#768dad] leading-relaxed">
                We build long-term relationships through transparency and consistent value delivery.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center mb-6">
                <MdSupportAgent className="text-white w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-3">Client-focused Delivery</h4>
              <p className="text-sm text-[#768dad] leading-relaxed">
                Your goals are our priority. We tailor our services to meet your specific operational needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to Experience Professional Excellence?</h2>
          <p className="text-base text-[#43474d] mb-10">
            Partner with a conglomerate that understands the intricacies of the Nigerian business landscape and delivers with global standards.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#C5A059] text-white px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Get a Proposal
            </Link>
            <Link
              to="/services"
              className="bg-[#ebeef1] text-[#0A2540] px-10 py-4 rounded-lg font-semibold hover:bg-[#e5e8eb] transition-all"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Home;
