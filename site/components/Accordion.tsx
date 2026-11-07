"use client";

import { useState } from "react";

type Item = { pergunta: string; resposta: string };

// Template accordion: one open section at a time, content slides up/down in 300ms.
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="accordion s2 wow fadeInUp">
      <div className="accordion-section">
        {items.map((item, i) => (
          <div key={item.pergunta}>
            <div
              className={`accordion-section-title${open === i ? " active" : ""}`}
              role="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.pergunta}
            </div>
            <div className={`prumo-slide${open === i ? " open" : ""}`}>
              <div>
                <div className="accordion-section-content d-block">{item.resposta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
