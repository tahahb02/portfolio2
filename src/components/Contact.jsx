import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub,
  FaPaperPlane, FaCheckCircle, FaArrowLeft, FaCopy, FaCheck,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp, EASE } from "../constants/animations";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact({ profile, onBack }) {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = true;
    if (!form.subject.trim()) next.subject = true;
    if (!form.message.trim()) next.message = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(initialForm);
      setTimeout(() => setSent(false), 2600);
    }, 1100);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const fields = [
    { name: "name", label: t.contact.name, type: "text", autoComplete: "name" },
    { name: "email", label: t.contact.email, type: "email", autoComplete: "email" },
    { name: "subject", label: t.contact.subject, type: "text", autoComplete: "off" },
  ];

  const inputCls = (err) =>
    `w-full rounded-none border-b bg-transparent px-0 py-3 text-sm text-(--text-primary) outline-none transition-colors duration-300 placeholder:text-(--text-muted) focus:ring-0 ${
      err ? "border-(--danger)" : "border-(--border-strong) focus:border-(--accent)"
    }`;

  const labelCls = (err) =>
    `mb-1 block font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${
      err ? "text-(--danger)" : "text-(--text-muted)"
    }`;

  return (
    <section className="px-4 pb-20 pt-28 sm:px-6 sm:pb-28 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <button
          onClick={onBack}
          data-cursor="LINK"
          className="mb-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-(--text-secondary) transition-colors duration-200 hover:text-(--accent)"
        >
          <FaArrowLeft size={11} />
          {t.contact.backHome.toUpperCase()}
        </button>

        <SectionHeading index={9} label={t.contact.label} title={t.contact.title} />

        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-3xl text-[clamp(1.7rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-(--text-primary)"
        >
          {t.contact.headline}
        </motion.h3>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
              <div className="border border-(--border-color) bg-(--bg-card)">
                <p className="border-b border-(--hairline) px-5 py-3 mono-label">{t.contact.infoTitle.toUpperCase()}</p>
                <ul className="divide-y divide-(--hairline)">
                  <li className="flex items-center justify-between px-5 py-4">
                    <span className="flex items-center gap-3 text-sm text-(--text-secondary)">
                      <FaEnvelope size={13} className="text-(--accent)" />
                      {profile.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      data-cursor="LINK"
                      aria-label={t.contact.copyEmail}
                      title={t.contact.copyEmail}
                      className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-(--text-muted) transition-colors duration-200 hover:text-(--accent)"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.span
                            key="ok"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1 text-(--success)"
                          >
                            <FaCheck size={10} /> {t.contact.copied.toUpperCase()}
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1"
                          >
                            <FaCopy size={10} /> {t.contact.copyEmail.toUpperCase()}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                  <li className="flex items-center gap-3 px-5 py-4 text-sm text-(--text-secondary)">
                    <FaPhoneAlt size={13} className="text-(--accent)" />
                    {profile.phone}
                  </li>
                  <li className="flex items-center gap-3 px-5 py-4 text-sm text-(--text-secondary)">
                    <FaMapMarkerAlt size={13} className="text-(--accent)" />
                    {t.contact.address}
                  </li>
                </ul>
                <div className="flex gap-3 border-t border-(--hairline) p-4">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LINK"
                    className="flex flex-1 items-center justify-center gap-2 border border-(--border-color) py-2.5 font-mono text-[10px] tracking-[0.16em] text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
                  >
                    <FaLinkedin size={12} /> LINKEDIN
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LINK"
                    className="flex flex-1 items-center justify-center gap-2 border border-(--border-color) py-2.5 font-mono text-[10px] tracking-[0.16em] text-(--text-secondary) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent)"
                  >
                    <FaGithub size={13} /> GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} noValidate className="border border-(--border-color) bg-(--bg-card) p-6 md:p-8">
              <p className="mb-8 mono-label">{t.contact.formTitle.toUpperCase()}</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {fields.map((field) => {
                  const err = errors[field.name];
                  return (
                    <label key={field.name} className="block" htmlFor={field.name}>
                      <span className={labelCls(err)}>{field.label}</span>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        autoComplete={field.autoComplete}
                        aria-invalid={!!err}
                        placeholder={field.name === "email" ? "email@example.com" : field.label}
                        className={inputCls(err)}
                      />
                    </label>
                  );
                })}
              </div>
              <label className="mt-6 block" htmlFor="message">
                <span className={labelCls(errors.message)}>{t.contact.message}</span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  placeholder="..."
                  className={`${inputCls(errors.message)} resize-none`}
                />
              </label>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  data-cursor="LINK"
                  className="group inline-flex items-center gap-2 bg-(--accent) px-7 py-3.5 text-sm font-semibold text-(--on-accent) transition-colors duration-300 hover:bg-(--accent-soft) disabled:opacity-60"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {sending ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2"
                      >
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                        {t.contact.sending}
                      </motion.span>
                    ) : sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle size={14} />
                        {t.contact.success}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        {t.contact.submit}
                        <FaPaperPlane size={12} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}