import React from 'react'
import aboutlogo from '../assets/aboutvivensaa.png';

const AboutSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 px-4">
                <img
                    src={aboutlogo}
                    alt="About Vivensaa"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        About Vivensaa Lights
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Vivensaa, we provide innovative home and commercial lighting
                        solutions designed to elevate your spaces. Our products blend
                        elegance with smart technology, ensuring efficiency and brilliance
                        in every corner.
                    </p>
                    <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

