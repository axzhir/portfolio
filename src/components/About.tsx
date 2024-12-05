import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#252525]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="/images/Fanizza_Tahir.jpg"
              alt="Profile"
              className="rounded-lg border border-[#333333] w-full"
            />
          </div>
          <div className="md:w-2/3 space-y-6">
          <p className="text-lg text-[#D3D3D3] leading-relaxed">
            I'm a passionate Computer Science student at James Madison University, specializing in quantum computing, software engineering, and cybersecurity. With a deep fascination for emerging technologies, I strive to bridge the gap between theoretical computer science and practical applications.
          </p>
          <p className="text-lg text-[#D3D3D3] leading-relaxed">
            My research focuses on quantum algorithms and their potential applications in cryptography and optimization problems. I'm particularly interested in developing quantum-resistant security solutions and exploring the intersection of quantum computing with artificial intelligence.
          </p>
          <p className="text-lg text-[#D3D3D3] leading-relaxed">
            When I'm not coding or researching, I contribute to open-source projects and mentor aspiring developers. I believe in the power of technology to solve complex global challenges and am committed to pushing the boundaries of what's possible in computing.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;