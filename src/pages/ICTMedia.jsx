import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdTrendingUp,
  MdPentagon,
  MdVideocam,
  MdPhotoCamera,
  MdCheckCircle,
  MdChevronRight,
  MdArrowForward,
  MdOpenInNew
} from 'react-icons/md';
import ictBackground from '../assets/images/ict-background.png';
import computer from '../assets/images/computer.png';
import camera from '../assets/images/camera.png';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const ICTMedia = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative bg-[#0A2540] text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src={ictBackground}
            alt="High-tech network"
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex mb-8 items-center space-x-2 text-white/60 text-xs font-semibold">
            <span>Home</span>
            <MdChevronRight className="text-sm" />
            <span>Services</span>
            <MdChevronRight className="text-sm" />
            <span className="text-white">ICT, Media & Creative</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mb-6">
            Innovating the Digital Frontier
          </h1>
          <p className="text-base text-white/80 max-w-2xl mb-10 leading-relaxed">
            Comprehensive ICT solutions and creative media production designed to scale your enterprise into the future.
          </p>
          <button className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-medium hover:brightness-110 transition-all shadow-lg flex items-center gap-2 group">
            Start a Digital Project
            <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Web & Software Development */}
          <motion.div className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fed488] text-[#775a19] text-xs font-semibold mb-4">
                TECHNOLOGY
              </div>
              <h3 className="text-4xl font-semibold mb-4">Website & Software Development</h3>
              <p className="text-[#43474d] mb-6">
                We build robust, scalable architectures tailored to corporate requirements, from bespoke ERP systems to high-performance web platforms.
              </p>
              <ul className="space-y-3 font-medium text-[#181c1e]">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059]" /> Enterprise Web Platforms
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059]" /> Custom CRM & ERP Integration
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#C5A059]" /> Mobile Application Ecosystems
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 h-full min-h-[300px] bg-slate-100 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={computer}
                alt="Developer workstation"
              />
            </div>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            className="md:col-span-4 bg-[#0A2540] p-8 rounded-xl shadow-lg text-white flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div>
              <MdTrendingUp className="text-5xl text-[#C5A059] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-white/70">
                Data-driven strategies that amplify your brand's global reach and maximize ROI through precision targeting.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-white/50">Performance Focus</span>
                <span className="text-[#C5A059] text-2xl">⚡</span>
              </div>
            </div>
          </motion.div>

          {/* Branding & Creative */}
          <motion.div className="md:col-span-4 bg-[#ebeef1] p-8 rounded-xl border border-slate-100">
            <MdPentagon className="text-5xl text-[#0A2540] mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-[#0A2540]">Branding & Visual Identity</h3>
            <p className="text-[#43474d] mb-6">
              Defining excellence through strategic visual systems that communicate stability and trust.
            </p>
            <a className="text-[#C5A059] font-medium flex items-center gap-1 hover:underline" href="#">
              View Brand Packages <MdOpenInNew className="text-sm" />
            </a>
          </motion.div>

          {/* Media Production & Photography */}
          <motion.div
            className="md:col-span-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100 grid md:grid-cols-2 gap-8"
            variants={fadeInUp}
          >
            <div className="relative rounded-lg overflow-hidden h-64 md:h-full">
              <img
                className="w-full h-full object-cover"
                src={camera}
                alt="Media production set"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Media Production & Photography</h3>
              <p className="text-[#43474d] mb-6">
                Capturing the essence of your operations through cinematic storytelling and high-fidelity corporate photography.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#f7fafd] rounded border border-slate-50">
                  <MdVideocam className="text-[#C5A059] mb-2 text-2xl" />
                  <p className="text-xs font-semibold">Corporate Film</p>
                </div>
                <div className="p-4 bg-[#f7fafd] rounded border border-slate-50">
                  <MdPhotoCamera className="text-[#C5A059] mb-2 text-2xl" />
                  <p className="text-xs font-semibold">Executive Portraits</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="bg-white py-24 border-y border-slate-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-2">150+</p>
            <p className="text-sm font-medium text-[#43474d] uppercase tracking-widest">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-2">12</p>
            <p className="text-sm font-medium text-[#43474d] uppercase tracking-widest">Global Awards</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-2">99%</p>
            <p className="text-sm font-medium text-[#43474d] uppercase tracking-widest">Uptime Record</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-2">24/7</p>
            <p className="text-sm font-medium text-[#43474d] uppercase tracking-widest">Client Support</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-[1280px] mx-auto px-6 md:px-12 py-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#e5e8eb] rounded-xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A2540]">
              Ready to transform your digital identity?
            </h2>
            <p className="text-base text-[#43474d] max-w-xl">
              Partner with DEE SQUARED to leverage cutting-edge ICT solutions and creative excellence for your next major project.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="bg-[#0A2540] text-white px-10 py-5 rounded-lg font-medium hover:bg-black transition-all shadow-xl text-center"
            >
              Start a Digital Project
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#0A2540] border border-slate-200 px-10 py-5 rounded-lg font-medium hover:bg-slate-50 transition-all text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default ICTMedia;
