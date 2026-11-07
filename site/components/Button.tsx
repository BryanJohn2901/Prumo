type Props = {
  href: string;
  children: string;
  className?: string;
  line?: boolean;
};

// Template "btn-main fx-slide": the label slides out and a copy (data-hover) slides in on hover.
export default function Button({ href, children, className = "", line = false }: Props) {
  return (
    <a className={`btn-main fx-slide${line ? " btn-line" : ""} ${className}`.trim()} href={href} data-hover={children}>
      <span>{children}</span>
    </a>
  );
}
