export default function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="label"><b>{n}</b><i aria-hidden="true" /><span>{children}</span></p>
  );
}
