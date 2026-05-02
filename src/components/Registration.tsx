import { motion } from 'motion/react';
import { ClipboardCheck, ArrowRight, Zap, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Registration() {
  return (
    <section id="registration" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-green/10 blur-[120px] rounded-full -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-[60px] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                  <ClipboardCheck size={14} />
                  Simple 2-Minute Process
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  Ready to Join the <span className="text-primary italic">Fastest</span> Network?
                </h2>
                
                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                  Register now to get your connection installed within 24 hours. Join thousands of happy users in Bayezid.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                   {[
                     { icon: <Zap size={18} className="text-primary" />, text: 'Express Installation' },
                     { icon: <CheckCircle size={18} className="text-accent-green" />, text: 'Zero Hidden Fees' },
                     { icon: <ShieldCheck size={18} className="text-accent-orange" />, text: 'BTRC Verified' },
                     { icon: <CheckCircle size={18} className="text-primary" />, text: '24/7 Support' },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                           {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300">{item.text}</span>
                     </div>
                   ))}
                </div>

                <motion.a
                  href="https://forms.gle/your-form-link"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-button font-display font-bold text-lg shadow-xl shadow-primary/40 group"
                >
                  Start Registration
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </motion.a>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">
                   <div className="space-y-6">
                      <div className="text-center mb-8">
                         <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <ClipboardCheck size={32} />
                         </div>
                         <h3 className="text-xl font-bold">Registration Portal</h3>
                         <p className="text-gray-400 text-xs">Fill out the official Google Form</p>
                      </div>

                      <div className="space-y-4">
                         <div className="h-12 w-full bg-white/5 border border-white/5 rounded-2xl" />
                         <div className="h-12 w-full bg-white/5 border border-white/5 rounded-2xl" />
                         <div className="h-12 w-full bg-white/5 border border-white/5 rounded-2xl" />
                         <div className="h-24 w-full bg-white/5 border border-white/5 rounded-2xl" />
                      </div>

                      <div className="pt-4">
                         <div className="w-full h-12 bg-primary/20 rounded-2xl animate-pulse" />
                      </div>
                   </div>
                   
                   {/* Floating success indicator */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="absolute -top-6 -right-6 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
                   >
                      <div className="w-8 h-8 bg-accent-green text-white rounded-full flex items-center justify-center">
                         <CheckCircle size={16} />
                      </div>
                      <span className="text-xs font-bold text-primary">Fast Processing</span>
                   </motion.div>
                </div>
                
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[40px] -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
