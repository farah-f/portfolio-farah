import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [i, setI] = useState(0);          // index mta3 el mot
  const [text, setText] = useState("");   // el texte li yetkteb
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === word) delay = 1200; // pause ki yكمل el mot

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t); // nettoyage
  }, [text, deleting, i, words]);

  return (
    <span className="font-mono font-bold bg-yellow border-2 border-ink px-2">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}