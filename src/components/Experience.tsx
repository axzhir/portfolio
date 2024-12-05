import React from 'react';

const experiences = [
  {
    title: "Quantum Superconducting Fellow",
    company: "IBM",
    period: "Oct 2024 - Nov 2024",
    type: "Fellowship",
    description: "Gained hands-on experience in quantum computing and circuit design during the Quantum Superconducting Circuit Design Program, part of the Qiskit Fall Fest. Collaborated on a design project with experts from Yale, MIT, NIST, and USC, covering superconducting qubit technology, quantum error correction, and advanced simulation tools.",
  },
  {
    title: "Research Intern (QIntern)",
    company: "QWorld Association",
    period: "Jun 2024 - Sep 2024",
    type: "Research",
    description: "Worked on a Quantum Research project titled 'Meta-analysis of postselection-based algorithms for practical approaches assuming conjugated state preparation ⟨0⟩.' This project explored two-way quantum computing (2WQC) by analyzing postselection-based algorithms and their potential practical applications.",
  },
  {
    title: "Quantum Technical Intern",
    company: "EnLuz",
    period: "Sep 2024 - Nov 2024",
    type: "Internship",
    description: "Contributed to the Quantum Literacy program, a global initiative to make quantum computing accessible. Created content, coordinated events like the Quantum Literacy Hackathon, and ensured meaningful engagement with learners at all levels.",
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "Jul 2024 - Sep 2024",
    type: "Fellowship",
    description: "Developed and deployed AI-driven projects in five weeks, including an interactive customer support agent powered by OpenAI and Pinecone, and a SaaS product for dynamic flashcards using Llama 3.1 via the Groq API. The projects were scaled to 200+ users and continuously optimized based on feedback.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1F1F1F] p-6 rounded-lg border border-[#333333]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-[#D3D3D3]">{exp.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  exp.type === 'Work' ? 'bg-[#A855F7]/10 text-[#A855F7]' : 'bg-[#FF0077]/10 text-[#FF0077]'
                }`}>
                  {exp.type}
                </span>
              </div>
              <p className="text-[#D3D3D3] text-sm mb-3">{exp.period}</p>
              <p className="text-[#D3D3D3]">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;