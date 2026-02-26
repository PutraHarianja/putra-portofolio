import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 py-20">
            <div className="max-w-4xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-center text-gray-700 mb-12 text-lg">
                    I'm always open to discussing new projects, opportunities, or collaborations
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>

                        <div className="flex items-start gap-4">
                            <Mail className="text-sky-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold text-gray-900">Email</h4>
                                <a
                                    href="mailto:putra.harianja007@gmail.com"
                                    className="text-gray-700 hover:text-sky-600 transition"
                                >
                                    putra.harianja007@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-sky-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                <a
                                    href="tel:+628982823170"
                                    className="text-gray-700 hover:text-sky-600 transition"
                                >
                                    +62 898 2823 170
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-sky-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-semibold text-gray-900">Location</h4>
                                <p className="text-gray-700">Indonesia</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/PutraHarianja"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 rounded-full hover:bg-sky-600 hover:text-white transition"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/putra-harianja"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-3 rounded-full hover:bg-sky-600 hover:text-white transition"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="mailto:putra.harianja007@gmail.com"
                                    className="bg-white p-3 rounded-full hover:bg-sky-600 hover:text-white transition"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 pt-8 border-t border-gray-300">
                    <p className="text-gray-600">
                        © 2024 Putra P.G Harianja. Built with React & TypeScript
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;