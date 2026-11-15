import { steps } from "@/lib/steps";

export default function Steps() {
  return (
    <ol className="steps" style={{ listStyle: "none", padding: 0 }}>
      {steps.map((s, i) => (
        <li key={s.t}><span className="mono">{String(i + 1).padStart(2, "0")}</span><h3>{s.t}</h3><p>{s.d}</p></li>
      ))}
    </ol>
  );
}
