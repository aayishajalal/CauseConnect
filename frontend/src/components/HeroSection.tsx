
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        height: 'calc(100vh - 4rem)',
        backgroundImage: 'url("https://img.freepik.com/premium-photo/world-charity-day-backgrounds_1198941-10278.jpg?w=740")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Volunteer Finder</h1>
        <p className="text-lg md:text-xl mb-8">
          Connect with local NGOs and initiatives to make a positive impact in your community.
        </p>
        <Link to="/signup">
          <button className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
