//import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-brown-300">
              Always open to new opportunities and collaborations
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Najiya-Nazrin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brown-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/najiya-nazrin-c-n-8aa33822b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brown-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            
<a
  href="https://www.instagram.com/cake_my._day?igsh=dXpudWpsYmRtbjd6"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-brown-300 transition-colors"
>
  <Instagram size={24} />
</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brown-800 text-center text-brown-400">
          <p>&copy; {new Date().getFullYear()} Najiya Nazrin C N. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;