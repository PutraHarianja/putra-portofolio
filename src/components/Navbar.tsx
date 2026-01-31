import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [heroBottomPosition, setHeroBottomPosition] = useState(250);

    // Calculate hero bottom position only once on mount
    useEffect(() => {
        const element = document.getElementById('hero');
        if (element) {
            const rect = element.getBoundingClientRect();
            setHeroBottomPosition(rect.bottom + window.scrollY);
        }
    }, []);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > heroBottomPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [heroBottomPosition]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'visible' : 'invisible'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name */}
                    <div className="text-xl font-bold text-gray-900">
                        Putra Harianja
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#hero" className="hover:text-blue-600 transition">Home</a>
                        <a href="#about" className="hover:text-blue-600 transition">About</a>
                        <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
                        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
                        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 bg-white rounded-b-lg shadow-lg">
                        <a href="#hero" className="block py-2 px-4 hover:text-blue-600 hover:bg-gray-50 transition">Home</a>
                        <a href="#about" className="block py-2 px-4 hover:text-blue-600 hover:bg-gray-50 transition">About</a>
                        <a href="#skills" className="block py-2 px-4 hover:text-blue-600 hover:bg-gray-50 transition">Skills</a>
                        <a href="#projects" className="block py-2 px-4 hover:text-blue-600 hover:bg-gray-50 transition">Projects</a>
                        <a href="#contact" className="block py-2 px-4 hover:text-blue-600 hover:bg-gray-50 transition">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;