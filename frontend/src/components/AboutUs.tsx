import React from "react";
import pulsing_heart_transparent from  "../assets/pulsing_heart_transparent.gif";
const About: React.FC = () => {
  return (
    <section className="bg-blue-100 py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-serif mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-blue-800 mb-8">
          At CauseConnect we believe in the power of community. Our mission
          is to bridge the gap between local NGOs and passionate individuals who
          want to make a difference. Join us in building a brighter, more
          connected world.
        </p>
        <img 
            src={pulsing_heart_transparent}/>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-blue-900 font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

