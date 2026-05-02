import { motion } from 'motion/react';
import { User, ShieldCheck, Cpu } from 'lucide-react';

const team = [
  {
    name: 'Md. Musleh Uddin Liton',
    role: 'CEO',
    desc: 'Leading vision and strategic direction.',
    icon: <User className="text-blue-500" />,
  },
  {
    name: 'Md. Abdul Mannan',
    role: 'Executive Director',
    desc: 'Ensuring operational excellence and growth.',
    icon: <ShieldCheck className="text-accent-green" />,
  },
  {
    name: 'Md. Rashel Ahmed Rajo',
    role: 'CTO',
    desc: 'Driving technical innovation and reliability.',
    icon: <Cpu className="text-accent-orange" />,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            Management Leadership
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-600 max-w-2xl mx-auto"
          >
            The dedicated team behind Fair Vision's commitment to reliability and customer satisfaction.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                   {member.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <div className="h-px w-12 bg-gray-200 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
           <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-96">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6708761234!2d91.808!3d22.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd90!2sAmin%20Colony%2C%20Bayezid!5e0!3m2!1sen!2sbd!4v123456789"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
              />
              <div className="absolute top-8 left-8 glass-dark p-6 rounded-3xl text-white max-w-xs">
                 <h4 className="font-bold mb-2">Visit Our Office</h4>
                 <p className="text-sm opacity-80 leading-relaxed">Near Amin CBA Office, Amin Colony, Bayezid, Chattogram.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
