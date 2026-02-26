import putraImg from '/public/images/putra.jpg';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image or illustration */}
                    <div className="flex justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                            <img src={putraImg} alt="Putra Harianja" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>

                    {/* Right side - Text content */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            Hi, I'm Putra! 👋
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            I'm an Associate Software Development Engineer at Blibli.com with over 2 years of experience
                            building multiplatform UI services for the Tiket Group ecosystem.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            I specialize in <span className="font-semibold text-blue-600">Vue.js</span> and <span className="font-semibold text-blue-600">React.js</span>,
                            with hands-on experience migrating large-scale applications from Vue 2 to Vue 3,
                            leading UI-focused projects, and delivering fast-paced development solutions.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Previously, I worked as a Teaching Assistant at Del Institute of Technology,
                            where I mentored students in web development and database management.
                        </p>

                        {/* Quick stats */}
                        <div className="gap-4 mt-8">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <h4 className="text-3xl font-bold text-gray-900">3+</h4>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;