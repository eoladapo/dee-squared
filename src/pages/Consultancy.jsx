import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdBusinessCenter,
  MdInventory2,
  MdGroups,
  MdSchool,
  MdCheckCircle,
  MdArrowForward,
  MdChevronRight
} from 'react-icons/md';
import consultancy from '../assets/images/consultancy.png';
import consultancy1 from '../assets/images/consultancy1.png';

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

const Consultancy = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8">
        <nav className="flex items-center space-x-2 text-xs font-semibold text-[#43474d]">
          <Link to="/">Home</Link>
          <MdChevronRight className="w-4 h-4" />
          <Link to="/services">Services</Link>
          <MdChevronRight className="w-4 h-4" />
          <span className="text-[#000f22] font-bold">Consultancy & Training</span>
        </nav>
      </div>

      {/* Hero Section */}
      <motion.section
        className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        {...fadeInUp}
      >
        <div>
          <div className="inline-block px-3 py-1 bg-[#fed488] text-[#785a1a] text-xs font-semibold rounded mb-6">
            CORPORATE EXCELLENCE
          </div>
          <h1 className="text-5xl md:text-5xl font-bold text-[#000f22] mb-6 leading-tight">
            Consultancy, Training & Professional Services
          </h1>
          <p className="text-lg text-[#43474d] mb-8 max-w-xl">
            Empowering organizations through strategic foresight, institutional capacity building, and world-class professional advisory across multiple sectors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#C5A059] text-white px-8 py-4 rounded font-medium flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Enroll / Partner With Us
              <MdArrowForward />
            </Link>
            <a
              href="#enrollment"
              className="border border-[#0A2540] text-[#0A2540] px-8 py-4 rounded font-medium hover:bg-[#0A2540] hover:text-white transition-all"
            >
              View Program Calendar
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl aspect-video lg:aspect-square relative">
            <img
              alt="Consultancy and Leadership Training"
              className="w-full h-full object-cover"
              src={consultancy}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#0A2540] p-8 text-white rounded shadow-2xl hidden md:block">
            <div className="text-[#C5A059] text-5xl font-bold mb-1">500+</div>
            <div className="text-xs tracking-widest opacity-70 uppercase">PROJECTS COMPLETED</div>
          </div>
        </div>
      </motion.section>

      {/* Services Bento Grid */}
      <motion.section
        className="bg-[#f1f4f7] py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-[#000f22] mb-4">Our Specializations</h2>
            <div className="h-1 w-20 bg-[#C5A059]"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Business & Project Consultancy */}
            <motion.div
              className="md:col-span-8 bg-white p-8 rounded border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <MdBusinessCenter className="text-[#C5A059] text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-[#000f22] mb-4">Business & Project Consultancy</h3>
              <p className="text-[#43474d] mb-6">
                Comprehensive advisory services ranging from feasibility studies to project management and market entry strategies. We ensure your ventures are grounded in robust data and strategic alignment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] w-5 h-5" /> Strategic Planning
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] w-5 h-5" /> Operational Audit
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] w-5 h-5" /> Risk Management
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059] w-5 h-5" /> Financial Modeling
                </li>
              </ul>
            </motion.div>

            {/* Supply Chain Advisory */}
            <motion.div
              className="md:col-span-4 bg-[#0A2540] p-8 rounded text-white shadow-lg"
              variants={fadeInUp}
            >
              <MdInventory2 className="text-[#C5A059] text-5xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Supply Chain Advisory</h3>
              <p className="opacity-80 mb-6">
                Optimizing global logistics and procurement pipelines for maximum efficiency and resilience in volatile markets.
              </p>
              <a className="text-[#C5A059] font-medium flex items-center gap-2 hover:underline" href="#">
                Learn more <MdArrowForward />
              </a>
            </motion.div>

            {/* Leadership Capacity Building */}
            <motion.div
              className="md:col-span-4 bg-white p-8 rounded border border-slate-100 shadow-sm"
              variants={fadeInUp}
            >
              <MdGroups className="text-[#C5A059] text-5xl mb-6" />
              <h3 className="text-2xl font-semibold text-[#000f22] mb-4">Leadership Building</h3>
              <p className="text-[#43474d]">
                Nurturing the next generation of executives through immersive leadership development programs and mentorship.
              </p>
            </motion.div>

            {/* Training Programs */}
            <motion.div
              className="md:col-span-8 bg-white p-8 rounded border border-slate-100 shadow-sm relative overflow-hidden group"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1">
                  <MdSchool className="text-[#C5A059] text-5xl mb-6" />
                  <h3 className="text-2xl font-semibold text-[#000f22] mb-4">Training Programs</h3>
                  <p className="text-[#43474d] mb-6">
                    Accredited certifications and skill-based workshops designed to keep your workforce competitive in the digital age.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#ebeef1] text-[#43474d] text-xs rounded">Project Mgmt</span>
                    <span className="px-3 py-1 bg-[#ebeef1] text-[#43474d] text-xs rounded">Agile Methods</span>
                    <span className="px-3 py-1 bg-[#ebeef1] text-[#43474d] text-xs rounded">Soft Skills</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3 h-48 md:h-full overflow-hidden rounded">
                  <img
                    alt="Training Workshop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={consultancy1}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Highlight Section */}
      <motion.section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 border-r border-slate-100 last:border-0">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">98%</div>
            <div className="text-sm text-[#43474d] uppercase tracking-widest">Client Satisfaction</div>
          </div>
          <div className="p-8 border-r border-slate-100 last:border-0">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">15+</div>
            <div className="text-sm text-[#43474d] uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="p-8">
            <div className="text-[#C5A059] text-5xl font-bold mb-2">40+</div>
            <div className="text-sm text-[#43474d] uppercase tracking-widest">Global Partners</div>
          </div>
        </div>
      </motion.section>

      {/* CTA / Enrollment Section */}
      <motion.section
        className="bg-[#0A2540] py-24 text-white text-center"
        id="enrollment"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Organization?</h2>
          <p className="text-base text-[#768dad] mb-12">
            Join hundreds of leading institutions that have transformed their operational performance and leadership culture with DEE SQUARED.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-[#C5A059] text-white px-12 py-5 rounded-lg font-medium text-lg"
            >
              Partner With Us
            </Link>
            <button className="border border-white/30 text-white hover:bg-white/10 px-12 py-5 rounded-lg font-medium text-lg">
              Download Prospectus
            </button>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Consultancy;
