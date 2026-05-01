import { Link } from 'react-router-dom';
import { MdHome, MdArrowBack } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-[#C5A059] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-[#000f22] mb-6">Page Not Found</h2>
        <p className="text-lg text-[#43474d] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/"
            className="bg-[#C5A059] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <MdHome className="w-5 h-5" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-[#0A2540] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#0A2540]/5 transition-all flex items-center gap-2"
          >
            <MdArrowBack className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
