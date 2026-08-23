import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, PhoneCall, Send, CheckCircle2, Scissors, Film, Sparkles, Layers } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Reels / Short-Form',
    budget: 'Advance (700 - 1,000)',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | rendering | success | error
  const [renderProgress, setRenderProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('rendering');
    setRenderProgress(0);

    // Simulate NLE video editing render animation progress
    const renderInterval = setInterval(() => {
      setRenderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(renderInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 120);

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || personalInfo.contact.web3formsAccessKey;

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: "Mohammad Saad Portfolio"
        }),
      });

      await response.json();
    } catch (err) {
      console.error("Web3Forms submission error:", err);
    }

    // Finish render animation cleanly
    setTimeout(() => {
      clearInterval(renderInterval);
      setRenderProgress(100);
      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 }
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'Reels / Short-Form',
        budget: 'Advance (700 - 1,000)',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-bg film-grain border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-amber tracking-[0.25em] uppercase font-bold"
          >
            START A CONVERSATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight"
          >
            LET'S CREATE SOMETHING GREAT
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-display text-white">Get in Touch Directly</h3>
              <p className="text-xs font-sans text-dark-muted leading-relaxed">
                Have a project brief, raw footage, or a quick edit request? Reach out directly via email, Instagram, or WhatsApp:
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-amber/40 transition-colors text-white text-xs font-mono"
                >
                  <Mail className="w-5 h-5 text-brand-amber flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-dark-muted uppercase">Email</div>
                    <div className="font-bold">{personalInfo.contact.email}</div>
                  </div>
                </a>

                <a
                  href={personalInfo.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-amber/40 transition-colors text-white text-xs font-mono"
                >
                  <InstagramIcon className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-dark-muted uppercase">Instagram</div>
                    <div className="font-bold">@real.mohammadsaad</div>
                  </div>
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-amber/40 transition-colors text-white text-xs font-mono"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-dark-muted uppercase">LinkedIn</div>
                    <div className="font-bold">Mohammad Saad</div>
                  </div>
                </a>

                <a
                  href={personalInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-amber/40 transition-colors text-white text-xs font-mono"
                >
                  <PhoneCall className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-dark-muted uppercase">WhatsApp</div>
                    <div className="font-bold">Direct WhatsApp Chat</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-amber transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="aarav@example.com"
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-amber transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-amber transition-colors"
                  >
                    <option value="Reels / Short-Form">Instagram Reels / Short-Form</option>
                    <option value="YouTube Long-Form">YouTube Video Editing</option>
                    <option value="Promotional Video">Promotional / Commercial Ad</option>
                    <option value="Motion Graphics">Motion Graphics & VFX</option>
                    <option value="Other Custom Edit">Other Custom Edit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/80 uppercase mb-2">Estimated Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-amber transition-colors font-mono"
                  >
                    <option value="Basic (300 - 500)">Basic Tier (300 - 500)</option>
                    <option value="Advance (700 - 1,000)">Advance Tier (700 - 1,000)</option>
                    <option value="Premium (1,000 - 1,500+)">Premium Tier (1,000 - 1,500+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/80 uppercase mb-2">Message & Footage Brief *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your video project, raw footage duration, editing style preferences..."
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-amber transition-colors"
                />
              </div>

              {/* Animated Video Editing Render Submit Button */}
              <div className="relative pt-2">
                {status === 'rendering' && (
                  <div className="w-full bg-dark-bg border border-brand-amber/40 rounded-xl p-4 mb-3 space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs text-brand-amber">
                      <span className="flex items-center gap-2">
                        <Scissors className="w-4 h-4 animate-bounce text-brand-amber" />
                        <span className="font-bold">RENDERING EDIT BRIEF...</span>
                      </span>
                      <span className="font-bold">{Math.min(renderProgress, 100)}%</span>
                    </div>

                    {/* Animated Video Editing Progress Track */}
                    <div className="w-full h-2.5 bg-dark-card rounded-full overflow-hidden p-0.5 border border-brand-amber/20">
                      <div
                        className="h-full bg-gradient-to-r from-brand-amber via-yellow-400 to-brand-cyan rounded-full transition-all duration-150 relative"
                        style={{ width: `${Math.min(renderProgress, 100)}%` }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#fff]" />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'rendering'}
                  className="w-full bg-gradient-to-r from-brand-amber to-yellow-500 hover:from-yellow-400 hover:to-brand-amber text-black font-mono text-xs font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-glow-amber hover:scale-[1.01] disabled:opacity-70 cursor-pointer"
                >
                  {status === 'idle' && (
                    <>
                      <span>SEND PROJECT INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {status === 'rendering' && (
                    <span className="flex items-center gap-2 font-mono">
                      <Film className="w-4 h-4 animate-spin" />
                      <span>EXPORTING EDIT BRIEF ({renderProgress}%)</span>
                    </span>
                  )}
                  {status === 'success' && (
                    <span className="flex items-center gap-2 text-black font-black">
                      <CheckCircle2 className="w-5 h-5 text-emerald-950" /> INQUIRY SENT SUCCESSFULLY ✓
                    </span>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
