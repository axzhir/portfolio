import React from 'react';
import { Code, Database, Shield, Cpu, Brain, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = {
    "Programming Languages": {
      icon: Code,
      items: ["Python", "C++", "JavaScript", "Rust", "Q#", "Qiskit", "Go", "Swift", "TypeScript"]
    },
    "Database & Systems": {
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Quantum Systems", "Distributed Systems", "MySQL", "Cassandra", "Elasticsearch"]
    },
    "Security": {
      icon: Shield,
      items: ["Cryptography", "Network Security", "Quantum Cryptography", "Penetration Testing", "Web Application Security", "Blockchain Security"]
    },
    "Quantum Computing": {
      icon: Cpu,
      items: ["Quantum Algorithms", "Quantum Key Distribution", "Quantum Sensing", "Quantum Error Correction", "Quantum Circuit Design", "Quantum Hardware & Software", "Quantum Programming (IBM Q, Google Cirq)"]
    },
    "Machine Learning": {
      icon: Brain,
      items: ["Deep Learning", "Quantum Machine Learning", "Neural Networks", "Natural Language Processing", "Reinforcement Learning"]
    },
    "Cloud & DevOps": {
      icon: Cloud,
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Azure", "Google Cloud Platform (GCP)", "Terraform", "Ansible"]
    }
  };  

  const certificates = [
    {
      name: "Womanium Quantum + AI Completion Badge",
      issuer: "Womanium",
      date: "2024",
      image: "https://th.bing.com/th/id/OIP.GrpB5EjUxy4nkKiZ3vqv7wHaHa?rs=1&pid=ImgDetMain",
      link: "https://drive.google.com/file/d/1etyb63QKkeMDlYyMrlb6QuCwSyAJ_qE7/view?usp=sharing"
    },
    {
      name: "Quantum Research Intern (QIntern) Completion Certificate",
      issuer: "QWorld Association",
      date: "2024",
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGXzRiBdm4geg/company-logo_200_200/0/1606559865652?e=2159024400&v=beta&t=sX1DJTQMhRGj3xCfocGSP_isYWaOQ41kxuUsFQHb5IY",
      link: "https://drive.google.com/file/d/1WMWDPKYy1Ccz1wmQXrrvwMlnJJoSMpyK/view?usp=sharing"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      link: "https://drive.google.com/file/d/1chyxtBhpCzl8F9K7WHZtP2GbGuxQAXJn/view?usp=sharing"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <div key={category} className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg border border-[#333333]">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-[#A855F7]" />
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#A855F7] rounded-full"></span>
                    <span className="text-[#D3D3D3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a 
                href={cert.link}
                key={index} 
                className="group bg-[#1F1F1F] rounded-lg shadow-lg border border-[#333333] overflow-hidden hover:border-[#A855F7] transition-colors"
              >
                <div className="relative h-48">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">View Certificate</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-white">{cert.name}</h4>
                  <p className="text-[#D3D3D3]">{cert.issuer}</p>
                  <p className="text-[#D3D3D3] text-sm">{cert.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;