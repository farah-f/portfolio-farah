import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Section from "./Section";
import { useLang } from "../i18n/LanguageContext";

export default function Experience() {
  const { lang, t, d } = useLang();
  const locale = lang === "fr" ? "fr-FR" : "en-GB";

  // Most recent first, like the CV. ISO dates sort correctly as plain text.
  const sorted = useMemo(
    () =>
      [...d.experiences].sort((a, b) =>
        (b.start || "").localeCompare(a.start || "")
      ),
    [d]
  );

  // "2024-01-29" -> "29/01/2024". Returns "" if the date is invalid.
  const fmt = (iso) => {
    if (!iso) return "";
    const [y, m, day] = String(iso).split("-").map(Number);
    if (!y || !m || !day) return "";
    return new Date(Date.UTC(y, m - 1, day)).toLocaleDateString(locale, {
      timeZone: "UTC",
    });
  };

  const formatPeriod = (e) =>
    e.end ? `${fmt(e.start)} – ${fmt(e.end)}` : `${t.since} ${fmt(e.start)}`;

  const [openId, setOpenId] = useState(sorted[0].id);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title} alt>
      <div className="relative max-w-3xl">
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-line" />

        <ul className="space-y-6">
          {sorted.map((e, i) => {
            const isOpen = openId === e.id;
            const Icon = e.current ? Briefcase : GraduationCap;

            return (
              <motion.li
                key={e.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="relative pl-14"
              >
                <span
                  className={`absolute left-0 top-5 grid place-items-center w-10 h-10 rounded-full border-4 border-surface ${
                    e.current ? "bg-brand text-white" : "bg-brand-soft text-brand"
                  }`}
                >
                  <Icon size={16} />
                </span>

                <div
                  className={`bg-bg border rounded-2xl transition ${
                    isOpen
                      ? "border-brand/40 shadow-lg shadow-brand/5"
                      : "border-line hover:border-brand/30"
                  }`}
                >
                  <button
                    onClick={() => toggle(e.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                        <span
                          className={`rounded-full px-2.5 py-1 ${
                            e.current
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                              : "bg-brand-soft text-brand"
                          }`}
                        >
                          {e.type}
                        </span>
                        <span className="font-mono text-muted">{formatPeriod(e)}</span>
                      </div>

                      <h3 className="mt-2 text-lg font-bold leading-snug">{e.role}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                        <span className="font-semibold text-ink">{e.company}</span>
                        <span>·</span>
                        <MapPin size={13} /> {e.place}
                      </p>
                      <p className="mt-3 text-muted leading-relaxed">{e.summary}</p>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`mt-1 shrink-0 text-muted transition-transform ${
                        isOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-line mx-5">
                          <ul className="mt-4 space-y-2.5">
                            {e.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-sm leading-relaxed">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {e.tech.map((s) => (
                              <span
                                key={s}
                                className="bg-surface border border-line rounded-md px-2.5 py-1 text-xs font-mono font-medium"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}