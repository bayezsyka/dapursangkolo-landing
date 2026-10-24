"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>("[data-scroll-video]"));
    const hero = document.querySelector<HTMLElement>("#beranda");

    root.classList.add("motion-ready");

    const heroObserver = new IntersectionObserver(
      ([entry]) => root.classList.toggle("mobile-cta-visible", !entry.isIntersecting),
      { threshold: 0.08 },
    );

    if (hero) heroObserver.observe(hero);

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return () => {
        root.classList.remove("motion-ready", "mobile-cta-visible");
        heroObserver.disconnect();
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4%", threshold: 0.05 },
    );

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "10% 0px", threshold: 0.35 },
    );

    revealNodes.forEach((node) => {
      const bounds = node.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        node.classList.add("is-visible");
      } else {
        revealObserver.observe(node);
      }
    });
    videos.forEach((video) => videoObserver.observe(video));

    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;
      parallaxNodes.forEach((node) => {
        const bounds = node.getBoundingClientRect();
        const speed = Number(node.dataset.parallax ?? "0.05");
        const offset = Math.max(-36, Math.min(36, (bounds.top + bounds.height / 2 - viewportCenter) * speed));
        node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      root.classList.remove("motion-ready");
      root.classList.remove("mobile-cta-visible");
      heroObserver.disconnect();
      revealObserver.disconnect();
      videoObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
