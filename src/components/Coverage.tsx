import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Navigation, Radio } from 'lucide-react';

const serviceAreas = [
  {
    region: 'Bayezid',
    status: 'Full Coverage',
    locations: ['Amin Colony', 'Amin Jute Mills Area', '94 Market Area', 'Shaheed Alamgir Road'],
    active: true
  },
  {
    region: 'Panchlaish',
    status: 'Coming Soon',
    locations: ['Hathazari Road', 'Oxygen Intersection'],
    active: false
  },
  {
    region: 'Corporate Hubs',
    status: 'On Demand',
    locations: ['Industrial zone near CBA Office'],
    active: true
  }
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider mb-6">
              <Radio size={14} className="animate-pulse" />
              Live Network Status
            </div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Expanding Connectivity <br />
              <span className="text-primary italic">Across Bayezid.</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
              We are rapidly expanding our high-speed fiber optic network. Our primary focus is providing the most reliable connection to the heart of Bayezid's residential and industrial sites.
            </p>

            <div className="space-y-6">
              {serviceAreas.map((area, idx) => (
                <motion.div 
                  key={area.region}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 p-6 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className={`p-3 rounded-2xl ${area.active ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="text-lg font-bold">{area.region}</h3>
                       <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${area.active ? 'bg-accent-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                         {area.status}
                       </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {area.locations.map(loc => (
                         <span key={loc} className="text-xs text-gray-500 bg-white px-2 py-1 rounded-lg border border-gray-100 italic">
                           {loc}
                         </span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-inner bg-gray-100 border-8 border-white relative">
                {/* Simulated coverage map visualization */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative">
                      {/* Central Point */}
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-20 shadow-2xl shadow-primary/50">
                         <Navigation className="text-white fill-white" size={24} />
                         {/* Radiating Waves */}
                         <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping scale-150" />
                         <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-[2.5]" style={{ animationDelay: '1s' }} />
                      </div>
                      
                      {/* Nodes */}
                      <div className="absolute -top-32 -left-20 w-4 h-4 bg-accent-green rounded-full shadow-lg shadow-accent-green/50 animate-bounce" />
                      <div className="absolute -top-16 right-32 w-4 h-4 bg-accent-green rounded-full shadow-lg shadow-accent-green/50 animate-bounce" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-32 -left-32 w-4 h-4 bg-accent-green rounded-full shadow-lg shadow-accent-green/50 animate-bounce" style={{ animationDelay: '1.2s' }} />
                      <div className="absolute bottom-16 right-16 w-3 h-3 bg-gray-300 rounded-full" />
                   </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent-green" />
                        <span className="text-xs font-bold uppercase text-white">100% Fiber Active</span>
                      </div>
                      <span className="text-[10px] text-white/60">Updated: May 2026</span>
                   </div>
                   <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary" 
                      />
                   </div>
                   <p className="text-[10px] text-white/60 mt-2 text-center">85% Area Coverage Achieved</p>
                </div>
             </div>

             {/* Decorative labels */}
             <div className="absolute -top-4 -right-4 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <span className="text-xs font-bold">Bayezid Main Hub</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
