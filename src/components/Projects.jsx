import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink, Code2, User, ShieldCheck } from "lucide-react";
import Section from "./Section";
import ArchDiagram from "./ArchDiagram";
import { useLang } from "../i18n/LanguageContext";

function Preview({ src, title, accent }) {
  const [ok, setOk] = useState(true);

  if (src && ok) {
    return (
      <img
        src={src}
        alt={title}
        onError={() => setOk(false)}
        className="w-full h-56 object-cover object-top"
      />
    );
  }
  return (
    <div className={`h-56 bg-gradient-to-br ${accent} grid place-items-center px-6`}>
      <span className="text-white text-3xl font-extrabold text-center">{title}</span>
    </div>
  );
}

export default function Projects() {
  const { t, d } = useLang();
  const projects = d.projects;

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col bg-surface border border-line rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-brand/5 hover:border-brand/30 transition"
          >
            <Preview src={p.image} title={p.title} accent={p.accent} />

            <div className="flex flex-col flex-1 p-6 md:p-8">
              <p className="text-xs font-mono font-semibold text-muted">{p.context}</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{p.title}</h3>
              <p className="mt-1 font-semibold text-brand">{p.subtitle}</p>
              <p className="mt-4 text-muted leading-relaxed">{p.description}</p>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm">
                    <Check size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-bg border border-line rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  {t.projects.architecture}
                </p>
                <ArchDiagram blocks={p.architecture} accent={p.accent} />
              </div>

              {p.roles && (
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {p.roles.map((r, idx) => {
                    // le 2e rôle est toujours l'Admin, quelle que soit la langue
                    const RoleIcon = idx === 1 ? ShieldCheck : User;
                    return (
                      <div key={r.name} className="bg-surface border border-line rounded-xl p-4">
                        <p className="flex items-center gap-2 font-bold text-sm">
                          <span className="grid place-items-center w-7 h-7 rounded-lg bg-brand-soft text-brand">
                            <RoleIcon size={15} />
                          </span>
                          {r.name}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {r.actions.map((a) => (
                            <li key={a} className="flex gap-2 text-sm text-muted">
                              <Check size={14} className="mt-0.5 text-emerald-500 shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((s) => (
                  <span
                    key={s}
                    className="bg-brand-soft text-brand rounded-md px-2.5 py-1 text-xs font-mono font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex flex-wrap gap-3">
                {p.links.map((l) => {
                  const Icon = l.type === "code" ? Code2 : ExternalLink;
                  return (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition ${
                        l.type === "live"
                          ? "bg-brand text-white shadow-lg shadow-brand/25 hover:-translate-y-0.5"
                          : "bg-surface border border-line hover:border-brand hover:text-brand"
                      }`}
                    >
                      <Icon size={18} /> {t.projects.link[l.type]}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}