import fs from "node:fs";
import path from "node:path";

type Props = {
  src: string; // nom de fichier dans /public/images
  alt: string;
  ratio?: string; // ex. "4 / 3"
  priority?: boolean;
  className?: string;
};

/** Affiche /public/images/<src>. Si le fichier n'existe pas encore : bloc de substitution. */
export default function Photo({ src, alt, ratio = "4 / 3", priority = false, className = "" }: Props) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", src));
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      {exists ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/images/${src}`} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
      ) : (
        <div className="photo-ph" role="img" aria-label={alt}>
          <span>{src}</span>
        </div>
      )}
    </div>
  );
}
