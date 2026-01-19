"use client";
import React from "react";

type Props = {
  images?: string[];
  intervalMs?: number;
  children?: React.ReactNode;
};

export default function HeroCarousel({
  images = [
    "/images/children.jpg",
    "/images/santaodcch.jpg",
    "/images/santa2.jpg",
    "/images/ratna-kala-oli.png",
  ],
  intervalMs = 6000,
  children,
}: Props) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-slides absolute inset-0">
        {images.map((src, i) => (
          <div
            key={i}
            className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <div className="hero-overlay absolute inset-0 bg-linear-to-b from-black/30 to-white/0" />

      <div className="container relative z-20 py-24">
        <div className="max-w-3xl">{children}</div>
      </div>

      <div className="hero-dots absolute left-1/2 transform -translate-x-1/2 bottom-6 z-30 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${
              i === index ? "bg-[var(--accent)]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
