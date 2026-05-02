import { motion } from 'motion/react';
import { Home, Building2, Briefcase, Camera, ShieldCheck, Wifi } from 'lucide-react';

const solutions = [
  {
    title: 'Home Internet',
    description: 'High-speed fiber optic connection optimized for 4K streaming, online classes, and social media.',
    icon: <Home className="text-primary" size={32} />,
    features: ['Unlimited Data', 'Stable Ping', 'Buffer-free HD']
  },
  {
    title: 'Corporate Bandwidth',
    description: 'Dedicated, ultra-reliable internet with 1:1 ratios for heavy-duty business applications.',
    icon: <Building2 className="text-accent-green" size={32} />,
    features: ['99.9% Uptime', 'Static IP', 'Redundant Link']
  },
  {
    title: 'Small Business (SME)',
    description: 'Cost-effective high-speed plans designed to empower small offices and startups.',
    icon: <Briefcase className="text-accent-orange" size={32} />,
    features: ['Quick Setup', 'Priority Support', 'Scalable Speed']
  },
  {
    title: 'Security & Surveillance',
    description: 'Advanced IP camera solutions and smart monitoring to keep your premises safe 24/7.',
    icon: <Camera className="text-cyan-light" size={32} />,
    features: ['Cloud Storage', 'Remote Access', 'Night Vision']
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4"
            >
              <ShieldCheck size={14} />
              BTRC Standard Solutions
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight"
            >
              Tailored Connectivity <br />
              <span className="text-primary italic">For Every Need.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-sm"
          >
            We don't just provide internet; we provide the backbone for your digital life and business success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors">
                {solution.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{solution.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{solution.description}</p>
              
              <ul className="space-y-3 mb-8">
                {solution.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-tight">
                    <Wifi size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Lean More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-dark bg-primary/90 p-10 rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-display font-bold mb-2">Need a custom solution?</h4>
            <p className="opacity-80">Our experts can design a dedicated network architecture specifically for your requirements.</p>
          </div>
          <button className="relative z-10 bg-accent-orange text-white px-10 py-4 rounded-button font-bold shadow-lg shadow-black/20 shrink-0">
            Get Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
