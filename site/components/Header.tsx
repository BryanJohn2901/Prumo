"use client";

import { useEffect, useState } from "react";
import { ctaHref, menu, site } from "@/content/copy";
import Button from "./Button";

export default function Header() {
  const [smaller, setSmaller] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 993px)");
    const onResize = () => {
      setMobile(mq.matches);
      if (!mq.matches) setOpen(false);
    };
    // header shrinks on desktop as soon as the page scrolls; menu tracks the current section
    const onScroll = () => {
      setSmaller(!mq.matches && window.scrollY > 0);
      let current = "";
      document.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 60) current = section.id;
      });
      setActive(current);
    };
    onResize();
    onScroll();
    mq.addEventListener("change", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      mq.removeEventListener("change", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const classes = ["transparent", smaller && "smaller", mobile && "header-mobile", open && "menu-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes} style={open ? { height: "100vh" } : undefined}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              <div className="de-flex-col">
                <div id="logo">
                  <a href="#inicio" className="prumo-logo" aria-label={site.nome}>
                    {site.nome}
                    <span className="id-color">.</span>
                  </a>
                </div>
              </div>

              <div className="de-flex-col">
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    {menu.map((item) => (
                      <li key={item.href}>
                        <a
                          className={`menu-item${active === item.href.slice(1) ? " active" : ""}`}
                          href={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="de-flex-col">
                <Button href={ctaHref} className="w-100 sm-hide">
                  Quero uma conversa
                </Button>
                <div className="menu_side_area">
                  <span
                    id="menu-btn"
                    className={open ? "menu-open" : undefined}
                    role="button"
                    aria-label="Abrir menu"
                    onClick={() => setOpen((v) => !v)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
