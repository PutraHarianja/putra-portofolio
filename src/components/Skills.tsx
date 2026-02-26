import { Code2, Database, TestTube, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            icon: <Code2 size={32} />,
            title: "Frontend Frameworks",
            skills: ["Vue 2/3", "Vuex", "Pinia", "React.js", "TypeScript"]
        },
        {
            icon: <Wrench size={32} />,
            title: "Languages",
            skills: ["JavaScript", "HTML", "CSS"]
        },
        {
            icon: <TestTube size={32} />,
            title: "Testing & Tools",
            skills: ["Vitest", "Playwright", "K6"]
        },
        {
            icon: <Database size={32} />,
            title: "Backend & Database",
            skills: ["Node.js", "MongoDB", "MySQL"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Skills & Technologies</h2>
                <p className="text-center text-gray-600 mb-12 text-lg">
                    Technologies I work with to build amazing products
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="text-sky-600 mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-700 flex items-center">
                                        <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center mb-8">Language Competencies</h3>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            { name: "Bahasa Indonesia", level: 100 },
                            { name: "English", level: 80 },
                        ].map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-700 font-medium">{skill.name}</span>
                                    <span className="text-gray-600">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-sky-600 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;