import { motion } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Packages', href: '#packages' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Management', href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
             </div>
             <span className="text-2xl font-display font-bold text-primary tracking-tight">Fair Vision</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://forms.gle/your-form-link" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 hover:text-primary transition-colors font-medium text-sm lg:text-base"
            >
              Registration
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-orange text-white px-6 py-2.5 rounded-button font-bold text-sm shadow-lg shadow-accent-orange/20 flex items-center gap-2"
            >
              Pay Bill
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="text-gray-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            rel="noreferrer"
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
          >
            Registration
          </a>
          <div className="pt-4 px-4">
             <button className="w-full bg-accent-orange text-white py-3 rounded-button font-bold flex items-center justify-center gap-2">
                Pay Bill (bKash)
             </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
