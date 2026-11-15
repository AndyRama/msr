import Breadcrumb from "./Breadcrumb";

type Props = {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
};

export default function PageHero({ crumbs, eyebrow, title, lead }: Props) {
  return (
    <section className="hero-page">
      <div className="container">
        <Breadcrumb items={crumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
