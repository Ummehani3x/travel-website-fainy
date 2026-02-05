import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
                    alt="Travel Landscape"
                    className="w-full h-full object-cover"
                />
                {/* Overlay to ensure text readability and apply Lavender theme tint */}
                <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                    Discover Your Next Journey
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 mb-8 font-light drop-shadow-md">
                    Explore beautiful destinations around the world with elegance and comfort.
                </p>
                <button className="bg-purple-200 text-purple-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ring-2 ring-purple-300 ring-offset-2 ring-offset-transparent">
                    Explore Destinations
                </button>
            </div>
        </section>
    );
};

export default Hero;
