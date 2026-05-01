import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdVisibility,
  MdRocketLaunch,
  MdVerified,
  MdWork,
  MdLightbulb,
  MdSentimentSatisfied
} from 'react-icons/md';
import about1 from '../assets/images/about1.png';
import about2 from '../assets/images/about2.png';
import aboutBackground from '../assets/images/aboutpage-background.png';

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

const About = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative bg-[#0A2540] h-[500px] flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src={aboutBackground}
            alt="Modern skyscraper"
          />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future of African Excellence
            </h1>
            <p className="text-base text-[#768dad] max-w-lg">
              Defining global standards in multi-sector infrastructure, consulting, and sustainable development.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section
        className="py-24 max-w-[1280px] mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-widest block mb-4">
              The Organization
            </span>
            <h2 className="text-3xl font-semibold text-[#000f22] mb-6">
              DEE SQUARED CONTINENTAL LIMITED
            </h2>
            <p className="text-sm text-[#43474d] mb-6 leading-relaxed">
              Established as a private company limited by shares, DEE SQUARED CONTINENTAL LIMITED operates at the intersection of institutional stability and dynamic innovation. As a premier conglomerate, we specialize in delivering high-impact solutions across diverse industrial landscapes.
            </p>
            <p className="text-sm text-[#43474d] mb-8 leading-relaxed">
              Our corporate structure is designed for versatility, allowing us to manage complex projects with precision while maintaining the agility needed to lead in an evolving global market.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <span className="block text-2xl font-semibold text-[#C5A059] mb-1">100%</span>
                <span className="text-xs text-[#74777e] uppercase">Commitment</span>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
                <span className="block text-2xl font-semibold text-[#C5A059] mb-1">Africa</span>
                <span className="text-xs text-[#74777e] uppercase">Primary Focus</span>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg border border-white/20">
            <img
              className="w-full h-full object-cover"
              src={about1}
              alt="Corporate boardroom"
            />
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Bento Grid */}
      <motion.section
        className="bg-[#ebeef1] py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Vision Card */}
            <div className="md:col-span-7 bg-[#0A2540] text-white p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[400px] shadow-lg">
              <MdVisibility className="text-6xl text-[#C5A059] mb-6" />
              <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
              <p className="text-base text-[#768dad] max-w-xl">
                "To be Africa's leading multi-service conglomerate, recognized for integrity, innovation, and sustainable impact."
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MdVisibility className="text-[200px]" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="md:col-span-5 bg-white p-10 rounded-xl flex flex-col justify-center border border-slate-100 shadow-sm">
              <MdRocketLaunch className="text-5xl text-[#C5A059] mb-6" />
              <h3 className="text-2xl font-semibold text-[#000f22] mb-4">Our Mission</h3>
              <p className="text-[#43474d] italic border-l-4 border-[#C5A059] pl-6">
                "To deliver exceptional value through integrated multi-sector solutions, fostering growth and excellence in every partnership."
              </p>
            </div>

            {/* Decorative/Stat Card */}
            <div className="md:col-span-12 bg-[#C5A059] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between text-white shadow-md">
              <div className="mb-6 md:mb-0">
                <h4 className="text-2xl font-semibold mb-2">Ready to partner with us?</h4>
                <p className="opacity-90">Let's build sustainable solutions together across the continent.</p>
              </div>
              <Link
                to="/contact"
                className="bg-[#000f22] text-white px-10 py-4 rounded-lg font-medium uppercase tracking-wider hover:bg-black transition-all"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="py-24 max-w-[1280px] mx-auto px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#C5A059] text-xs font-semibold uppercase tracking-widest block mb-4">
          Foundational Principles
        </span>
        <h2 className="text-3xl font-semibold text-[#000f22] mb-12">Our Core Values</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Value 1 */}
          <motion.div
            className="group p-8 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
              <MdVerified className="text-[#000f22] text-4xl group-hover:text-[#C5A059]" />
            </div>
            <h4 className="text-xl font-semibold text-[#000f22] mb-3">Integrity</h4>
            <p className="text-[#43474d]">
              Upholding the highest ethical standards in every transaction and partnership.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            className="group p-8 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
              <MdWork className="text-[#000f22] text-4xl group-hover:text-[#C5A059]" />
            </div>
            <h4 className="text-xl font-semibold text-[#000f22] mb-3">Professionalism</h4>
            <p className="text-[#43474d]">
              Executing every project with specialized expertise and disciplined precision.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            className="group p-8 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
              <MdLightbulb className="text-[#000f22] text-4xl group-hover:text-[#C5A059]" />
            </div>
            <h4 className="text-xl font-semibold text-[#000f22] mb-3">Innovation</h4>
            <p className="text-[#43474d]">
              Continuously evolving our methodologies to solve the challenges of tomorrow.
            </p>
          </motion.div>

          {/* Value 4 */}
          <motion.div
            className="group p-8 bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 bg-[#ebeef1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059]/10 transition-colors">
              <MdSentimentSatisfied className="text-[#000f22] text-4xl group-hover:text-[#C5A059]" />
            </div>
            <h4 className="text-xl font-semibold text-[#000f22] mb-3">Client Satisfaction</h4>
            <p className="text-[#43474d]">
              Placing our partners' success at the heart of our operations and strategy.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative h-[400px] flex items-center justify-center text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.2]"
            src={about2}
            alt="Architectural blueprints"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to define the next chapter of growth?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className="w-full sm:w-auto bg-[#C5A059] text-white px-10 py-4 rounded-lg font-medium uppercase tracking-widest hover:brightness-110">
              Get a proposal
            </button> */}
            <Link
              to="/contact"
              className="bg-[#C5A059] text-white px-10 py-4 rounded-lg font-semibold uppercase hover:shadow-xl transition-all"
            >
              Get a Proposal
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg font-medium uppercase tracking-widest hover:bg-white hover:text-[#000f22] transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
