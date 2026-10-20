import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Send, Check, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import { useLang } from "../i18n/LanguageContext";

const field =
  "w-full bg-bg border border-line rounded-xl px-4 py-3 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

export default function Contact() {
  const { t, d } = useLang();
  const c = t.contact;
  const contact = d.contact;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const infos = [
    { icon: Mail, label: c.email, value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: c.phone, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: ExternalLink, label: c.linkedin, value: "Farah Faggaa", href: contact.linkedin },
    { icon: MapPin, label: c.location, value: contact.location },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    if (data.get("website")) return; // anti-spam

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow={c.eyebrow} title={c.title} alt>
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-muted leading-relaxed">{c.intro}</p>

          <ul className="mt-8 space-y-4">
            {infos.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-soft text-brand shrink-0">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                      {label}
                    </span>
                    <span className="font-semibold break-all">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 hover:text-brand transition"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface border border-line rounded-3xl p-6 md:p-8 shadow-xl shadow-brand/5 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-semibold">{c.name}</span>
              <input name="name" required placeholder={c.namePh} className={`mt-1.5 ${field}`} />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">{c.email}</span>
              <input name="email" type="email" required placeholder={c.emailPh} className={`mt-1.5 ${field}`} />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold">{c.subject}</span>
            <input name="subject" placeholder={c.subjectPh} className={`mt-1.5 ${field}`} />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">{c.message}</span>
            <textarea name="message" required rows={5} placeholder={c.messagePh} className={`mt-1.5 resize-none ${field}`} />
          </label>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full flex items-center justify-center gap-2 bg-brand text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-brand/25 hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                {c.sending}
              </>
            ) : (
              <>
                <Send size={18} /> {c.send}
              </>
            )}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm font-medium">
              <Check size={18} /> {c.success}
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
              <AlertTriangle size={18} /> {c.error} {contact.email}.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}