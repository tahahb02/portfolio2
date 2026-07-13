import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { slideInLeft, slideInRight, fadeInUp } from "../constants/animations";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact({ profile, onBack }) {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) return;
    setSent(true);
    setTimeout(() => {
      alert("Message envoyé avec succès ! (Simulation Front-End)");
      setSent(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => e.target.style.color = "#96183a"}
            onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
          >
            <FaArrowLeft size={14} />
            {t.nav.home}
          </button>
        </motion.div>

        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-bordeaux-400 to-champagne-300 bg-clip-text text-transparent"
        >
          {t.contact.title}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-500"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <h4 className="text-xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>{t.contact.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[{ name: "name", label: t.contact.name, type: "text", placeholder: t.contact.name },
                { name: "email", label: t.contact.email, type: "email", placeholder: "email@example.com" },
                { name: "subject", label: t.contact.subject, type: "text", placeholder: t.contact.subject },
              ].map((field) => (
                <div className="group" key={field.name}>
                  <label className="block text-sm mb-2 group-focus-within:text-bordeaux-400 transition-colors" style={{ color: "var(--text-muted)" }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formState[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl transition-all placeholder:text-slate-500"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-color)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(150,24,58,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(150,24,58,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              ))}
              <div className="group">
                <label className="block text-sm mb-2 group-focus-within:text-bordeaux-400 transition-colors" style={{ color: "var(--text-muted)" }}>{t.contact.message}</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="..."
                  required
                  className="w-full px-4 py-3 rounded-xl transition-all placeholder:text-slate-500 resize-none"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(150,24,58,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(150,24,58,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group relative w-full px-8 py-3 bg-gradient-to-r from-bordeaux-600 to-bordeaux-700 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-bordeaux-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex items-center justify-center gap-2">
                      <FaCheckCircle className="text-green-300" />
                      {t.contact.sending}
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex items-center justify-center gap-2">
                      {t.contact.submit}
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="space-y-6">
            <div className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-500"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <h4 className="text-xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>{t.contact.infoTitle}</h4>
              <div className="space-y-4">
                {[
                  { icon: FaPhoneAlt, bg: "bg-bordeaux-500/10", text: "text-bordeaux-400", value: profile.phone, label: t.contact.phone },
                  { icon: FaEnvelope, bg: "bg-champagne-400/10", text: "text-champagne-300", value: profile.email, label: t.contact.email },
                  { icon: FaMapMarkerAlt, bg: "bg-bordeaux-500/10", text: "text-bordeaux-400", value: profile.location, label: "Adresse" },
                ].map(({ icon: Icon, bg, text, value }, i) => (
                  <div key={i} className="flex items-center gap-3 group hover:translate-x-1 transition-transform" style={{ color: "var(--text-secondary)" }}>
                    <div className={`p-2.5 rounded-lg ${bg} ${text} group-hover:scale-110 transition-all`}>
                      <Icon />
                    </div>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "rgba(201,169,110,0.4)"; e.target.style.color = "#c9a96e"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.color = "var(--text-secondary)"; }}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                  onMouseEnter={(e) => { e.target.style.borderColor = "rgba(150,24,58,0.4)"; e.target.style.color = "#96183a"; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = "var(--border-color)"; e.target.style.color = "var(--text-secondary)"; }}
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="backdrop-blur-sm rounded-2xl p-4 overflow-hidden transition-all duration-500"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <iframe
                title="Casablanca Map"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d106376.56000739818!2d-7.66939455!3d33.5722423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1710000000000!5m2!1sfr!2sma"
                width="100%"
                height="220"
                className="rounded-xl border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
