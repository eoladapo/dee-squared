import { 
  MdLocationOn, 
  MdContactSupport, 
  MdSchedule, 
  MdPhoneInTalk, 
  MdMail 
} from 'react-icons/md';
import contactImage from '../assets/images/contact.png';

const Contact = () => {
  return (
    <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
      {/* Hero Section */}
      <section className="mb-24 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#000f22] mb-6">Get in Touch</h1>
        <p className="text-base text-[#43474d] max-w-2xl">
          Connect with DEE SQUARED CONTINENTAL LIMITED. Our global network is ready to support your infrastructure, consulting, and logistics needs with professional excellence.
        </p>
      </section>

      {/* Main Layout: Bento Grid Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex gap-6">
            <div className="w-12 h-12 bg-[#fed488] rounded-full flex items-center justify-center text-[#775a19] shrink-0">
              <MdLocationOn className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Office Address</h3>
              <p className="text-[#43474d] leading-relaxed">
                Plot 442, Corporate Avenue,<br />
                Central Business District,<br />
                Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Phone & Email Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex gap-6">
            <div className="w-12 h-12 bg-[#fed488] rounded-full flex items-center justify-center text-[#775a19] shrink-0">
              <MdContactSupport className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Direct Contact</h3>
              <p className="text-[#43474d] mb-1 font-medium">+234 (0) 800 123 4567</p>
              <p className="text-[#43474d]">contact@deesquared.com</p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-[#0A2540] p-8 rounded-lg shadow-sm text-white">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MdSchedule className="w-6 h-6" />
              Business Hours
            </h3>
            <div className="space-y-2 opacity-90">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#43474d]">Full Name</label>
                <input
                  className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#43474d]">Email Address</label>
                <input
                  className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#43474d]">Service of Interest</label>
              <select className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none transition-all appearance-none">
                <option>Infrastructure Development</option>
                <option>Consulting Services</option>
                <option>Logistics & Supply Chain</option>
                <option>Energy Solutions</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#43474d]">Your Message</label>
              <textarea
                className="w-full bg-[#f1f4f7] border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-[#0A2540] outline-none transition-all"
                placeholder="How can we assist you today?"
                rows="5"
              ></textarea>
            </div>

            <button
              className="w-full md:w-auto bg-[#C5A059] text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-[#775a19] transition-all active:scale-95"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-24">
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
          <img
            className="w-full h-full object-cover grayscale contrast-125 opacity-40"
            src={contactImage}
            alt="Abuja city center"
          />
          <div className="absolute inset-0 bg-[#0A2540]/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-4 rounded-full shadow-xl flex items-center justify-center animate-pulse">
              <MdLocationOn className="text-[#C5A059] w-12 h-12" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg border border-slate-200 max-w-sm hidden md:block">
            <h4 className="text-xl font-semibold text-[#0A2540] mb-2">Global Headquarters</h4>
            <p className="text-sm text-[#43474d]">
              Our central hub for strategic operations and multi-sector management across the continent.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
