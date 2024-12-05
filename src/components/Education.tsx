import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

const Education = () => {
  const education = [
    {
      type: "University",
      institution: "James Madison University",
      degree: "B.S. in Computer Science, Minor in Business & Data Analytics",
      period: "2025 - Present",
      description: "Currently pursuing a Bachelor's degree in Computer Science with a focus on Artificial Intelligence, and a Minor in Business & Data Analytics.",
      icon: GraduationCap
    },
    {
      type: "University",
      institution: "George Mason University",
      degree: "A.S. in Computer Science, Minor in Business Analytics",
      period: "2022 - 2024",
      description: "Completed an Associate's degree in Computer Science with a minor in Business Analytics. Focus on coding, data analysis, and foundational business concepts. Earned a 3.0+ GPA and Dean's List for academic excellence.",
      icon: GraduationCap
    },
    {
      type: "Bootcamp",
      institution: "Womanium",
      degree: "Womanium Quantum + AI",
      period: "2023/2024",
      description: "Received full-ride scholarships to Womanium's Quantum Programs in 2023 & 2024, gaining hands-on experience in quantum computing and machine learning. Developed skills in quantum programming and was connected to career opportunities in the field.",
      icon: Book
    },
    {
      type: "Certification",
      institution: "Amazon Web Services (AWS)",
      degree: "AWS Certified Cloud Practitioner",
      period: "2025",
      description: "Currently studying for a certification in cloud computing fundamentals, including AWS services, security, architecture, and deployment best practices.",
      icon: Award
    }    
];

  return (
    <section id="education" className="py-20 bg-[#252525]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={index} className="bg-[#1F1F1F] p-6 rounded-lg border border-[#333333]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#A855F7]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[#A855F7]">{edu.type}</span>
                    <h3 className="text-xl font-semibold mt-1 text-white">{edu.degree}</h3>
                    <p className="text-[#D3D3D3]">{edu.institution}</p>
                    <p className="text-[#D3D3D3] text-sm mt-1">{edu.period}</p>
                    <p className="text-[#D3D3D3] mt-2">{edu.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;