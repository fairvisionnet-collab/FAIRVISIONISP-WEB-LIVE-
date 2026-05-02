import { motion } from 'motion/react';
import { Check, Info, Zap } from 'lucide-react';

const plans = [
  { name: 'Bronze', speed: '10 Mbps', price: '599', bestFor: 'Basic Browsing', color: 'bg-orange-100 text-orange-700' },
  { name: 'Silver', speed: '15 Mbps', price: '699', bestFor: 'Social Media & HD Video', color: 'bg-gray-100 text-gray-700' },
  { name: 'Gold', speed: '20 Mbps', price: '799', bestFor: 'Freelancing & Streaming', color: 'bg-yellow-100 text-yellow-700', featured: true },
  { name: 'Platinum', speed: '25 Mbps', price: '899', bestFor: 'Online Gaming & Family', color: 'bg-blue-100 text-blue-700' },
  { name: 'Diamond', speed: '30 Mbps', price: '999', bestFor: 'Ultra-Smooth Experience', color: 'bg-cyan-100 text-cyan-700' },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Service Packages
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your lifestyle. From casual browsing to pro-gaming, we have you covered.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[32px] border-2 flex flex-col ${plan.featured ? 'border-primary shadow-2xl shadow-primary/10' : 'border-gray-50 bg-gray-50/50'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Popular Choice
                </div>
              )}
              
              <div className={`w-fit px-3 py-1 rounded-full text-xs font-bold mb-6 ${plan.color}`}>
                {plan.name}
              </div>

              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold text-gray-900">{plan.speed}</h3>
                <p className="text-sm text-gray-500 font-medium">{plan.bestFor}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold text-gray-400">৳</span>
                <span className="text-4xl font-display font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm font-medium text-gray-400">/mo</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  'Fiber Optic Link',
                  'Unlimited Data',
                  '24/7 Support',
                  'Buffer-free HD',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-accent-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-button font-bold text-sm transition-all ${plan.featured ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white'}`}>
                Order Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
             <div className="p-4 bg-primary text-white rounded-2xl">
                <Zap size={24} />
             </div>
             <div>
                <h4 className="text-xl font-bold">Curious about your speed?</h4>
                <p className="text-gray-600 text-sm">Check your current internet performance in seconds.</p>
             </div>
          </div>
          <motion.a
            href="https://fast.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold px-8 py-3 rounded-button border border-primary/10 shadow-sm"
          >
            Run Speed Test
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
