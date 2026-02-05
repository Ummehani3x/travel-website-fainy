import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 bg-purple-900 text-purple-100 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white">Lavender Dream</h2>
                <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition-colors">Destinations</a>
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
                <p className="text-purple-300 text-sm">&copy; 2026 Fainy Travel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
