import Link from 'next/link';
import { FC } from 'react';
import { Bird } from 'lucide-react';

const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <Bird size={64} className="text-blue-400 animate-bounce" />
      
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="text-gray-300">Oops! This page has flown away</p>
      </div>

      <Link 
        href="/" 
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        Fly Home
      </Link>
    </div>
  );
};

export default NotFound;
