import { ChevronDown } from "./Icons";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}<ChevronDown /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
