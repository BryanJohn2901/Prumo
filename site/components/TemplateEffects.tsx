"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Port of the AIvent template runtime (designesia.js + vendors.js) without jQuery:
 * preloader, Lenis smooth scroll, WOW.js reveal, jarallax parallax/video,
 * scroll progress bar and the "scroll to top" float text.
 */
export default function TemplateEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // preloader: fade out once the page has loaded
    const loader = document.getElementById("de-loader");
    const hideLoader = () => {
      if (!loader) return;
      loader.style.transition = "opacity .5s";
      loader.style.opacity = "0";
      setTimeout(() => (loader.style.display = "none"), 500);
    };
    if (document.readyState === "complete") hideLoader();
    else {
      window.addEventListener("load", hideLoader, { once: true });
      cleanups.push(() => window.removeEventListener("load", hideLoader));
    }

    // Lenis smooth scroll, same as the template; anchors scroll smoothly too
    const lenis = new Lenis({ anchors: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    cleanups.push(() => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    });

    // WOW.js: hide every .wow box until it enters the viewport, then play its animation
    const boxes = document.querySelectorAll<HTMLElement>(".wow");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const box = entry.target as HTMLElement;
          const { wowDuration, wowDelay, wowIteration } = box.dataset;
          if (wowDuration) box.style.animationDuration = wowDuration;
          if (wowDelay) box.style.animationDelay = wowDelay;
          if (wowIteration) box.style.animationIterationCount = wowIteration;
          box.style.animationName = "";
          box.style.visibility = "visible";
          box.classList.add("animated");
          observer.unobserve(box);
        });
      },
      { threshold: 0 }
    );
    boxes.forEach((box) => {
      box.style.visibility = "hidden";
      box.style.animationName = "none";
      observer.observe(box);
    });
    cleanups.push(() => observer.disconnect());

    // jarallax: background images and the hero video
    let destroyed = false;
    import("jarallax").then(({ jarallax, jarallaxVideo }) => {
      if (destroyed) return;
      jarallaxVideo();
      const items = document.querySelectorAll<HTMLElement>(".jarallax");
      items.forEach((el) => {
        const videoSrc = el.dataset.videoSrc;
        if (videoSrc) jarallax(el, { videoSrc, videoLazyLoading: false });
        else if (el.querySelector(".jarallax-img")) jarallax(el);
      });
      cleanups.push(() => jarallax(items, "destroy"));
    });
    cleanups.push(() => (destroyed = true));

    // scroll indicator + "scroll to top" visibility (scrollTrigger = 100px in the template)
    const showOnScroll = document.querySelectorAll<HTMLElement>(".show-on-scroll");
    const scrollbar = document.querySelector<HTMLElement>(".scrollbar-v");
    let shown = false;
    const onScroll = () => {
      const top = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollbar) scrollbar.style.height = `${(100 * top) / pageHeight}px`;
      if (top > 100) {
        shown = true;
        showOnScroll.forEach((el) => {
          el.classList.add("show");
          el.classList.remove("hide");
        });
      } else if (shown) {
        showOnScroll.forEach((el) => el.classList.add("hide"));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
