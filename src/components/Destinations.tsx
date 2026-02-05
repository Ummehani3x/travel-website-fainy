import React from 'react';

const destinations = [
    {
        title: "Bali, Indonesia",
        description: "Sun, sand, and serenity in paradise.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Kyoto, Japan",
        description: "Ancient temples and peaceful gardens.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Swiss Alps",
        description: "Snowy peaks and breathtaking views.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80"
    }
];

const Destinations: React.FC = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4">Popular Destinations</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Selected specifically for the discerning traveler looking for peace and beauty.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {destinations.map((dest, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="h-64 overflow-hidden">
                            <img
                                src={dest.image}
                                alt={dest.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-8 bg-purple-50 group-hover:bg-white transition-colors duration-300">
                            <h3 className="text-2xl font-bold text-purple-800 mb-2">{dest.title}</h3>
                            <p className="text-gray-600 mb-4">{dest.description}</p>
                            <button className="text-purple-600 font-semibold group-hover:text-purple-800 flex items-center gap-2 transition-colors">
                                Learn More <span>&rarr;</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
