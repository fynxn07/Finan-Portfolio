import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight, FiCheck,
} from 'react-icons/fi';
// Optional: only needed if you wire up EmailJS below.
// npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const CONTACT = {
  email: 'finankolamban7@gmail.com',
  phone: '+91 77362 95327',
  location: 'Mannarkkad, Palakkad, Kerala, India',
  github: 'https://github.com/fynxn07',
  linkedin: 'https://linkedin.com/in/finan-roshan',
};

// Fill these in from your EmailJS dashboard (emailjs.com — free tier is enough).
// If you'd rather skip this entirely, the form still works via the mailto
// fallback button below, no service needed.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const infoCards = [
  { icon: FiMail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: FiPhone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: CONTACT.location, href: null },
];

const socials = [
  { icon: FiGithub, label: 'GitHub', href: CONTACT.github },
  { icon: FiLinkedin, label: 'LinkedIn', href: CONTACT.linkedin },
];

const FloatingField = ({ id, label, type = 'text', value, onChange, textarea = false }) => {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;
  const Tag = textarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <Tag
        id={id}
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-white/[0.05] border border-white/15 rounded-2xl
                   px-5 pt-6 pb-2.5 text-white text-sm md:text-base
                   backdrop-blur-md outline-none resize-none
                   focus:border-[#ff2a2a]/60 focus:bg-white/[0.08]
                   transition-colors duration-300"
      />
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-200 pointer-events-none
                    ${focused || filled ? 'top-2 text-[11px] text-[#ff2a2a] font-semibold tracking-wide' : 'top-4 text-sm text-white/40'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // If EmailJS isn't configured yet, just fall back to mailto so the
    // form is never a dead end.
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      window.location.href = `mailto:${CONTACT.email}?subject=Portfolio inquiry from ${encodeURIComponent(
        form.name
      )}&body=${encodeURIComponent(form.message + '\n\n— ' + form.email)}`;
      return;
    }

    try {
      setStatus('sending');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black pt-32 pb-32 px-6 md:px-12 overflow-hidden font-sans"
    >
      {/* Ambient glow orbs, consistent with Skills / Projects */}
      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ff2a2a]/20 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-[#ff2a2a]/15 blur-[140px] pointer-events-none"
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 relative z-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[#ff2a2a] font-black tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent max-w-2xl"
        >
          Let's build something worth shipping
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/55 text-sm md:text-base mt-5 max-w-lg"
        >
          Open to full-stack roles, freelance work, or just talking through an idea.
          Reach out directly or send a message below.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-20">

        {/* Left: contact info + socials */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {infoCards.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? 'a' : 'div';
            return (
              <Wrapper
                key={label}
                {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl p-5
                           bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                           border border-white/10 backdrop-blur-2xl
                           hover:border-[#ff2a2a]/40 hover:shadow-[0_15px_40px_-15px_rgba(255,42,42,0.3)]
                           transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ff2a2a]/15 border border-[#ff2a2a]/30 flex items-center justify-center text-[#ff2a2a] shrink-0 group-hover:bg-[#ff2a2a] group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase mb-0.5">{label}</p>
                  <p className="text-white text-sm md:text-[15px] font-semibold truncate">{value}</p>
                </div>
                {href && (
                  <FiArrowUpRight className="ml-auto text-white/30 group-hover:text-[#ff2a2a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                )}
              </Wrapper>
            );
          })}

          {/* Socials row */}
          <div className="flex gap-4 mt-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl py-4
                           bg-white/[0.05] border border-white/10 backdrop-blur-xl text-white/80 text-sm font-bold
                           hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={17} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="lg:col-span-3 rounded-3xl p-7 md:p-9
                     bg-gradient-to-b from-white/[0.07] to-white/[0.02]
                     border border-white/10 backdrop-blur-2xl
                     shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]
                     flex flex-col gap-5"
        >
          <FloatingField id="name" label="Your Name" value={form.name} onChange={handleChange('name')} />
          <FloatingField id="email" label="Your Email" type="email" value={form.email} onChange={handleChange('email')} />
          <FloatingField id="message" label="Your Message" value={form.message} onChange={handleChange('message')} textarea />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'sending'}
            className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                       bg-[#ff2a2a] text-white font-bold text-sm md:text-base
                       shadow-[0_10px_30px_-8px_rgba(255,42,42,0.6)]
                       hover:shadow-[0_10px_40px_-6px_rgba(255,42,42,0.85)]
                       disabled:opacity-60 transition-all duration-300"
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? (
              <>Message Sent <FiCheck /></>
            ) : (
              <>Send Message <FiArrowUpRight /></>
            )}
          </motion.button>

          {status === 'sent' && (
            <p className="text-emerald-400 text-xs font-semibold">Thanks — I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-xs font-semibold">
              Something went wrong — email me directly at {CONTACT.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;