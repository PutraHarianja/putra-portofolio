import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                    Putra P.G Harianja
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-6">
                    Associate Software Development Engineer
                </p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Specialized in Vue.js & React.js | Building scalable multiplatform UI services
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://github.com/PutraHarianja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        <Github size={32} />
                    </a>
                    <a
                        href="https://linkedin.com/in/putra-harianja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition"
                    >
                        <Linkedin size={32} />
                    </a>
                    <a
                        href="mailto:putra.harianja007@gmail.com"
                        className="hover:text-blue-600 transition"
                    >
                        <Mail size={32} />
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;