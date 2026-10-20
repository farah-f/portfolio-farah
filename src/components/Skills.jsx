import { motion } from "framer-motion";
import { Code, Database, Wrench, Monitor, ShieldCheck, Check } from "lucide-react";
import Section from "./Section";
import { useLang } from "../i18n/LanguageContext";


const icons = { code: Code, database: Database, wrench: Wrench, monitor: Monitor };

export default function Skills() {
  const { t, d } = useLang();
  const { skillGroups, qaReport } = d;

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <motion.div
              key={g.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface border border-line rounded-2xl p-6 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition"
            >
              <h3 className="flex items-center gap-3 font-bold text-lg">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-soft text-brand">
                  <Icon size={20} />
                </span>
                {g.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="bg-bg border border-line rounded-lg px-3 py-1.5 text-sm font-medium hover:border-brand hover:text-brand transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Rapport de test QA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-night text-white rounded-2xl p-6 md:p-8 grid md:grid-cols-[1fr_1.2fr] gap-8 items-center"
      >
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
            <ShieldCheck size={18} /> {t.skills.qaLabel}
          </span>
          <h3 className="mt-3 text-2xl font-bold">{t.skills.qaTitle}</h3>
          <p className="mt-3 text-white/70">
            {t.skills.qaText}{" "}
            <span className="text-white font-medium">{qaReport.tool}</span>.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5 font-mono text-sm">
          <p className="text-white/50 mb-3">test-report.log</p>
          <ul className="space-y-2">
            {qaReport.checks.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <Check size={16} className="text-emerald-400 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 pt-3 border-t border-white/10 text-emerald-300 font-bold">
            {qaReport.checks.length} / {qaReport.checks.length} {t.skills.passed}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}