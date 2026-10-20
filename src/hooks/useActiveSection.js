import { useEffect, useState } from "react";

// ids = ["home", "about", "skills", ...]
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];

      // La dernière section dont le haut a dépassé 120 px est la section active
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }

      // Tout en bas de la page : on force la dernière section (Contact)
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    onScroll(); // calcul initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}