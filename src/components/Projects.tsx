import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI Shopping Assistant UI",
            description: "Interactive UI for AI shopping assistant built with Vue.js, providing seamless user experience for AI-powered shopping recommendations.",
            tech: ["Vue.js", "JavaScript", "AI Integration"],
            link: "#", // Replace with actual link
            github: "#" // Optional
        },
        {
            title: "AI Short Story Generator",
            description: "A creative short story generator for children powered by Gemini AI. Built with Vue.js frontend and Node.js backend.",
            tech: ["Vue.js", "Node.js", "Gemini AI"],
            link: "#", // Replace with actual link
            github: "#"
        },
        {
            title: "YouthPedia: Asean Youth Forum Blog",
            description: "Full-stack blogging system for Asean Youth Organization featuring comprehensive content management and user engagement features.",
            tech: ["React.js", "Node.js", "Full-stack"],
            link: "#", // Replace with actual link
            github: "#"
        },
        {
            title: "TokoPintar",
            description: "Online bookstore platform developed during Tech4Impact Bootcamp. E-commerce solution with modern UI and seamless shopping experience.",
            tech: ["React.js", "E-commerce", "Bootcamp Project"],
            link: "#", // Replace with actual link
            github: "#"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
                <p className="text-center text-gray-600 mb-12 text-lg">
                    Some of my recent work and side projects
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech stack tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                                >
                                    <ExternalLink size={20} />
                                    <span>View Project</span>
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
                                    >
                                        <Github size={20} />
                                        <span>Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;