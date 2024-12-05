import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-[#1A1A1A]/90 backdrop-blur-sm z-50 border-b border-[#333333]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#A855F7]">
            Fanizza Tahir
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">About Me</a>
            <a href="#experience" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Experience</a>
            <a href="#education" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Education</a>
            <a href="#skills" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Skills</a>
            <a href="#projects" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Projects</a>
            <a href="#contact" className="text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Contact Me</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D3D3D3]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">About Me</a>
            <a href="#experience" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Experience</a>
            <a href="#education" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Education</a>
            <a href="#skills" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Skills</a>
            <a href="#projects" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Projects</a>
            <a href="#contact" className="block text-[#D3D3D3] hover:text-[#A855F7] transition-colors">Contact Me</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;