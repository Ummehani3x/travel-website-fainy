import React from 'react';
import { Shield, Heart, Globe } from 'lucide-react';

const features = [
    {
        icon: <Heart className="w-8 h-8 text-purple-600" />,
        title: "Curated Experiences",
        description: "We handpick every destination to ensure it meets our high standards of beauty and serenity."
    },
    {
        icon: <Shield className="w-8 h-8 text-purple-600" />,
        title: "Safety First",
        description: "Your safety and comfort are our top priorities, with 24/7 support throughout your journey."
    },
    {
        icon: <Globe className="w-8 h-8 text-purple-600" />,
        title: "Global Reach",
        description: "Access to exclusive locations and hidden gems around the world that others miss."
    }
];

const About: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-purple-100/50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-12">Why Choose Fainy Travel?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100">
                            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
