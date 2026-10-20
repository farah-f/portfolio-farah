import { motion } from "framer-motion";
import { Download, Mail, MapPin, GraduationCap, Layers } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const tech = [
  "Java", "Spring Boot", "Angular", "React", "TypeScript",
  "PostgreSQL", "Docker", "Keycloak", "Postman", "Scrum",
];

// Chaque ligne = liste de [texte, classe de couleur]
const code = [
  [["public class ", "text-brand-2"], ["Farah ", "text-white"], ["implements ", "text-brand-2"], ["Engineer {", "text-white"]],
  [["  String ", "text-sky-300"], ["role  = ", "text-white"], ['"Full-Stack";', "text-emerald-300"]],
  [["  String ", "text-sky-300"], ["stack = ", "text-white"], ['"Java · Angular · React";', "text-emerald-300"]],
  [["  boolean ", "text-sky-300"], ["tested = ", "text-white"], ["true;", "text-brand-2"]],
  [["", ""]],
  [["  Status ", "text-sky-300"], ["status() {", "text-white"]],
  [["    return ", "text-brand-2"], ["Status.", "text-white"], ["OPEN_TO_WORK", "text-emerald-300"], [";", "text-white"]],
  [["  }", "text-white"]],
  [["}", "text-white"]],
];

export default function Hero() {
  const { t, d } = useLang();
  const profile = d.profile;

  return (
    <section id="home" className="aurora pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.openToWork && (
            <span className="inline-flex items-center gap-2 bg-surface border border-line shadow-sm rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </span>
              {t.hero.available}
            </span>
          )}

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            {t.hero.hello} <span className="text-gradient">Farah Faggaa</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-semibold text-ink/80">
            {t.hero.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">
            {t.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-brand/25 hover:-translate-y-0.5 hover:shadow-xl transition"
            >
              <Mail size={18} /> {t.hero.contact}
            </a>
            <a
              href={t.hero.cvFile}
              download={t.hero.cvName}
              className="flex items-center gap-2 bg-surface border border-line font-semibold px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition"
            >
              <Download size={18} /> {t.hero.cv}
            </a>
          </div>

          {/* Chiffres clés */}
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="border-r-2 border-brand pr-4 text-right">
                <dt className="text-3xl font-extrabold">{s.value}</dt>
                <dd className="text-sm text-muted leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Carte code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand to-brand-2 opacity-20 blur-xl" />

          <div className="relative bg-night rounded-3xl shadow-2xl shadow-brand/20 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-mono text-white/50">Farah.java</span>
            </div>

            <div className="p-6 h-80 font-mono text-[13px] leading-7 overflow-hidden">
              {code.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="whitespace-pre min-h-7"
                >
                  {line.map(([text, color], j) => (
                    <span key={j} className={color}>{text}</span>
                  ))}
                </motion.div>
              ))}
              <span className="inline-block w-2 h-4 bg-brand-2 animate-pulse align-middle" />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -left-6 -top-5 z-10 flex items-center gap-2 bg-surface border border-line shadow-lg rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <GraduationCap size={18} className="text-brand" />
            {t.hero.badgeSchool}
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5 }}
            className="absolute -right-4 -bottom-3 z-10 flex items-center gap-2 bg-surface border border-line shadow-lg rounded-xl px-3 py-2 text-sm font-semibold"
          >
            <Layers size={18} className="text-brand-2" />
            {t.hero.badgeQa}
          </motion.div>

          <div className="absolute -bottom-4 left-4 z-10 flex items-center gap-1.5 bg-night text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg border border-white/20">
            <MapPin size={14} /> {profile.location}
          </div>
        </motion.div>
      </div>

      {/* Technologies */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted">
          {t.hero.techTitle}
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {tech.map((s) => (
            <span
              key={s}
              className="bg-surface border border-line rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:border-brand hover:text-brand hover:-translate-y-0.5 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}