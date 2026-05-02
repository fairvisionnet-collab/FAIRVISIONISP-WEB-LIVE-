import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-light/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} className="fill-primary" />
              BTRC Approved Connectivity
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Experience <span className="text-primary italic">Ultra-Fast</span> Internet in Bayezid.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Fair Vision brings lightning-fast fiber optic technology to your home and office in Amin Jute Mills area and beyond. Reliable, secure, and made for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-button font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
               >
                 Check Packages
                 <ArrowRight size={20} />
               </motion.a>
               <motion.a
                href="https://forms.gle/your-form-link"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-button font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors"
               >
                 Register Now
               </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                     <Shield className="text-accent-green" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Trusted ISP</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                     <Headphones className="text-accent-orange" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">24/7 Support</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000" 
                 alt="High speed fiber optic internet technology" 
                 className="w-full object-cover aspect-[4/3]"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end p-8">
                  <div className="glass p-4 rounded-2xl w-full flex justify-between items-center text-white">
                     <div>
                        <p className="text-xs font-bold uppercase opacity-80">Current Speed</p>
                        <p className="text-2xl font-display font-bold">100 Mbps+</p>
                     </div>
                     <div className="h-10 w-1 bg-white/20 rounded-full" />
                     <div className="text-right">
                        <p className="text-xs font-bold uppercase opacity-80">Reliability</p>
                        <p className="text-2xl font-display font-bold">99.9%</p>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
