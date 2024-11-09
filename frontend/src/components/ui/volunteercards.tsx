

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Volunteer {
    name: string;
    feedback: string;
}

const volunteers: Volunteer[] = [
    { name: 'John Doe', feedback: 'Great event, very well organized! Had a fantastic time volunteering and meeting new people.' },
    { name: 'Jane Smith', feedback: 'Loved the community spirit! It was rewarding to be part of something so positive.' },
    { name: 'Michael Brown', feedback: 'Amazing opportunity to meet new people and give back to the community.' },
    { name: 'Emily White', feedback: 'Very fulfilling experience! Felt great to contribute in a meaningful way.' },
    { name: 'Robert Green', feedback: 'Great networking opportunities and an enjoyable event overall. Highly recommend!' },
];

const VolunteerCards: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="bg-blue-900 container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-6">
            {volunteers.map((volunteer, index) => (
                <div
                    key={index}
                    className={`relative bg-yellow-400 p-6 rounded-lg shadow-md border border-gray-200 max-w-xs mx-auto transition-transform transform hover:scale-105 ${
                        index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'
                    }`}
                    data-aos="fade-up"
                >
                    {/* Chat Bubble Tail */}
                    <div
                        className="absolute w-4 h-4 bg-yellow-400 left-4 -bottom-2 rotate-45 border-l border-b border-gray-200"
                    ></div>

                    <h3 className="text-lg font-semibold text-gray-800">{volunteer.name}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{volunteer.feedback}</p>
                </div>
            ))}
        </div>
    );
};

export default VolunteerCards;
