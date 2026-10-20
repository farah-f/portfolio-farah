import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";
import Section from "./Section";
import { useLang } from "../i18n/LanguageContext";

const card =
  "bg-bg border border-line rounded-2xl p-6 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition";

export default function About() {
  const { t, d } = useLang();
  const about = d.about;

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} alt>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-lg text-muted leading-relaxed"
        >
          {about.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={card}
          >
            <h3 className="flex items-center gap-2 font-bold">
              <GraduationCap size={20} className="text-brand" /> {t.about.education}
            </h3>
            <ul className="mt-4 space-y-4">
              {about.education.map((e) => (
                <li key={e.title} className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold leading-snug">{e.title}</p>
                    <p className="text-sm text-muted">{e.place}</p>
                  </div>
                  <span className="text-sm font-mono text-brand whitespace-nowrap">
                    {e.date}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={card}
            >
              <h3 className="flex items-center gap-2 font-bold">
                <Award size={20} className="text-brand" /> {t.about.certifications}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {about.certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-muted">{c.status}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={card}
            >
              <h3 className="flex items-center gap-2 font-bold">
                <Languages size={20} className="text-brand" /> {t.about.languages}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {about.languages.map((l) => (
                  <li key={l.name}>
                    <p className="font-semibold">{l.name}</p>
                    <p className="text-muted">{l.level}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}