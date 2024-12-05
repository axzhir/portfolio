import React from 'react';
import { ArrowRight, Terminal, Shield, Cpu, Binary } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1A1A1A] pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white">
              Exploring the Future of
              <span className="block text-[#A855F7]">
                Computer Science & Security
              </span>
            </h1>
            <p className="text-xl text-[#D3D3D3]">
              Quantum Computing Researcher | Computer Science Student | Cybersecurity Enthusiast | AI/ML Enthusiast
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-[#A855F7] text-white px-6 py-3 rounded-lg hover:bg-[#FF0077] transition-colors flex items-center">
                Get in Touch <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#projects" className="border-2 border-[#A855F7] text-[#A855F7] px-6 py-3 rounded-lg hover:bg-[#A855F7] hover:text-white transition-colors">
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 gap-4">
            <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#333333]">
              <Terminal className="text-[#A855F7] w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2 text-white">Software Engineering</h3>
              <p className="text-[#D3D3D3]">Building robust and scalable solutions</p>
            </div>
            <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#333333]">
              <Cpu className="text-[#A855F7] w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2 text-white">Quantum Computing</h3>
              <p className="text-[#D3D3D3]">Advancing computational boundaries</p>
            </div>
            <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#333333]">
              <Shield className="text-[#A855F7] w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2 text-white">Cybersecurity</h3>
              <p className="text-[#D3D3D3]">Protecting digital assets</p>
            </div>
            <div className="bg-[#1F1F1F] p-6 rounded-xl border border-[#333333]">
              <Binary className="text-[#A855F7] w-12 h-12 mb-4" />
              <h3 className="font-semibold mb-2 text-white">Research</h3>
              <p className="text-[#D3D3D3]">Pushing technological limits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;