import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-display font-bold mb-6 text-primary">Fair Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              BTRC approved ultra-fast connectivity provider in Chattogram. We empower homes and businesses with high-speed fiber optic internet.
            </p>
            <div className="flex gap-4">
               {[Facebook, Instagram, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Head Office</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={20} className="text-primary shrink-0" />
                Near Amin CBA Office, Amin Colony, Bayezid, Chattogram.
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={20} className="text-primary shrink-0" />
                Branch: 94 Market Area, Shaheed Alamgir Road.
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={20} className="text-primary shrink-0" />
                admin@fairvision.com.bd
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Hotline</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={20} className="text-primary shrink-0" />
                01791-378447
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={20} className="text-primary shrink-0" />
                01894-415520
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <MessageSquare size={20} className="text-accent-green shrink-0" />
                WhatsApp: 01791-378447
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Payment Settings</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center font-bold text-white">bKash</div>
                  <div>
                     <p className="text-xs opacity-50 uppercase font-bold">Pay via</p>
                     <p className="text-sm font-bold">bKash Merchant</p>
                  </div>
               </div>
               <p className="text-xl font-display font-bold">01791-378447</p>
               <p className="text-[10px] opacity-40 mt-2 uppercase tracking-tight">Merchant / Personal Account Available</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">© 2024 Fair Vision Net. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-gray-500">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
