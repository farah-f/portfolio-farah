import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, alt = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-24 ${alt ? "bg-white border-y border-line" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
        </motion.div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}