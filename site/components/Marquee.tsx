type Props = {
  items: string[];
  direction: "left" | "right";
  className: string;
  wow: string;
};

// Replaces jQuery.marquee (duplicated: true, 60s): two copies of the list loop forever.
export default function Marquee({ items, direction, className, wow }: Props) {
  const list = items.flatMap((item) => [item, "/"]);
  return (
    <div className={`${className} text-light d-flex py-4 lh-1 overflow-hidden`}>
      <div className={`wow ${wow}`} data-wow-duration="3s">
        <div className={`prumo-marquee ${direction}`}>
          {[0, 1].map((copy) => (
            <div className="prumo-marquee-group" key={copy} aria-hidden={copy === 1}>
              {list.map((text, i) => (
                <span key={i} className={`fs-60 mx-3${text === "/" ? " op-2" : ""}`}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
