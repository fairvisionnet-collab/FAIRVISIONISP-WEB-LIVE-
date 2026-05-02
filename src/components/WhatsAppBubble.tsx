import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppBubble() {
  return (
    <motion.a
      href="https://wa.me/8801791378447"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-accent-green text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
    >
      <MessageSquare size={32} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
    </motion.a>
  );
}
