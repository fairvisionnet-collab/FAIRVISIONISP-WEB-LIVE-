/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Registration from './components/Registration';
import Solutions from './components/Solutions';
import Coverage from './components/Coverage';
import Team from './components/Team';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      
      <section id="about" className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">About <span className="text-primary italic">Fair Vision</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established with a vision to revolutionize internet connectivity in Chattogram, Fair Vision has grown into a leading BTRC-approved ISP. We specialize in delivering high-speed, low-latency fiber optic internet to both residential and corporate clients, especially in the Bayezid and Amin Colony areas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is simple: To provide "Ultra-Fast" internet that never slows you down. Whether you're a student attending online classes, a freelancer working with global clients, or a family enjoying 4K streaming, we ensure your connection is always smooth.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">10k+</p>
                  <p className="text-xs font-bold uppercase text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">99.9%</p>
                  <p className="text-xs font-bold uppercase text-gray-400">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">24/7</p>
                  <p className="text-xs font-bold uppercase text-gray-400">Active Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/5 rounded-[60px] p-8">
                 <img 
                   src="https://picsum.photos/seed/isp/800/800" 
                   alt="Technology Integration" 
                   className="w-full h-full object-cover rounded-[40px] shadow-2xl"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-white shadow-xl border border-gray-100 max-w-[200px]">
                 <p className="text-sm font-bold text-gray-700 italic">"Empowering the vision of a digital Bangladesh."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Solutions />
      <Packages />
      <Registration />
      <Coverage />
      <Team />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
