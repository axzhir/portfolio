import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#252525]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1F1F1F] p-8 rounded-lg border border-[#333333]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#D3D3D3] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#252525] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#D3D3D3] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-[#252525] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D3D3D3] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#252525] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D3D3D3] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-[#252525] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent text-white placeholder-gray-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#A855F7] text-white py-3 px-6 rounded-lg hover:bg-[#FF0077] transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-[#333333]">
              <h3 className="text-xl font-semibold text-center mb-6 text-white">Or connect with me on</h3>
              <div className="flex justify-center space-x-6">
                <a href="mailto:fanizza.t.tahir@gmail.com" className="p-3 bg-[#252525] rounded-full hover:bg-[#A855F7]/10 hover:text-[#A855F7] transition-colors text-[#D3D3D3]">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://github.com/axzhir" className="p-3 bg-[#252525] rounded-full hover:bg-[#A855F7]/10 hover:text-[#A855F7] transition-colors text-[#D3D3D3]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/fttahir/" className="p-3 bg-[#252525] rounded-full hover:bg-[#A855F7]/10 hover:text-[#A855F7] transition-colors text-[#D3D3D3]">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;