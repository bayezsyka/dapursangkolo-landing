"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface Testimonial {
  id: string;
  src: string;
  width: number;
  height: number;
  author: string;
  role: string;
  quote: string;
  aspectRatio: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testi-01",
    src: "/media/testimoni/testimoni-01.webp",
    width: 739,
    height: 1313,
    author: "@cahyaramadhany",
    role: "Instagram Story",
    quote: "Kenyang bngt makan 1 juga. Besok pesan lagi bisa kan mb.",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-09",
    src: "/media/testimoni/testimoni-09.webp",
    width: 739,
    height: 774,
    author: "dr. Nastiar Azhima",
    role: "WhatsApp Chat",
    quote: "Kak enakkk bgtt, besok kapan kapan aku beli lagi yaaaa.",
    aspectRatio: "739 / 774",
  },
  {
    id: "testi-03",
    src: "/media/testimoni/testimoni-03.webp",
    width: 739,
    height: 1308,
    author: "Pelanggan Setia",
    role: "Instagram Story",
    quote: "Fresh bgt sayurnya, yummy pol, ga ekspek segede itu porsinya. Bener bener yummy 9.5/10.",
    aspectRatio: "739 / 1308",
  },
  {
    id: "testi-04",
    src: "/media/testimoni/testimoni-04.webp",
    width: 739,
    height: 1313,
    author: "Customer Review",
    role: "Review Jujur",
    quote: "Porsinya gede ngenyangin, packagingnya niat banget murah lagi.. next orderr lagi makasih yaa.",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-07",
    src: "/media/testimoni/testimoni-07.webp",
    width: 739,
    height: 1313,
    author: "Food Reviewer",
    role: "Approved Review",
    quote: "Review terverifikasi paket Wanpaku Sandwich Dapur Sangkolo.",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-05",
    src: "/media/testimoni/testimoni-05.webp",
    width: 739,
    height: 1313,
    author: "@uchaaprilia",
    role: "Instagram Story",
    quote: "Recommended bintang 5 Wanpaku Sandwich @dapur.sangkolo.",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-10",
    src: "/media/testimoni/testimoni-10.webp",
    width: 739,
    height: 744,
    author: "Clavalov",
    role: "WhatsApp Chat",
    quote: "Barusan ku cobaa.... Enakk kakk, pas banget ini kalau buat nyemil.",
    aspectRatio: "739 / 744",
  },
  {
    id: "testi-06",
    src: "/media/testimoni/testimoni-06.webp",
    width: 739,
    height: 1313,
    author: "Customer Review",
    role: "Review Jujur",
    quote: "Ini sandwich nya uwenakkkk telurnya setengah mateng kuwenyangggg akuuu.",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-08",
    src: "/media/testimoni/testimoni-08.webp",
    width: 739,
    height: 1324,
    author: "Safira (Upgris)",
    role: "WhatsApp Chat",
    quote: "ENAK BANGET KAK !! cocok bgt sm tipe rasakuu, sayurnya juga freshhhh.",
    aspectRatio: "739 / 1324",
  },
  {
    id: "testi-02",
    src: "/media/testimoni/testimoni-02.webp",
    width: 739,
    height: 1313,
    author: "Pelanggan Setia",
    role: "WhatsApp Story",
    quote: "Enak bangett sandwichnya bikin nagihhh rasanya mantul cocok buat temen ngegame.",
    aspectRatio: "739 / 1313",
  },
];

// Split into two balanced tracks
const track1 = [
  testimonials[0],
  testimonials[1],
  testimonials[2],
  testimonials[3],
  testimonials[4],
];

const track2 = [
  testimonials[5],
  testimonials[6],
  testimonials[7],
  testimonials[8],
  testimonials[9],
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? testimonials[activeIndex] : null;

  const handleOpen = (id: string) => {
    const idx = testimonials.findIndex((t) => t.id === id);
    if (idx !== -1) setActiveIndex(idx);
  };

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return null;
      return curr === 0 ? testimonials.length - 1 : curr - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return null;
      return curr === testimonials.length - 1 ? 0 : curr + 1;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="testimoni" className="testimoni-section" aria-labelledby="testimoni-title">
      <div className="testimoni-header" data-reveal>
        <h2 id="testimoni-title">Kata mereka yang sudah coba.</h2>
        <p>Cerita asli dan tangkapan layar dari pelanggan Dapur Sangkolo.</p>
      </div>

      <div className="testimoni-marquee-container" data-reveal>
        {/* Track 1: Moving left */}
        <div className="testimoni-track-wrapper">
          <div className="testimoni-track testimoni-track--left">
            {[...track1, ...track1].map((item, idx) => (
              <button
                key={`t1-${item.id}-${idx}`}
                type="button"
                className="testimoni-card"
                onClick={() => handleOpen(item.id)}
                aria-label={`Buka review dari ${item.author}`}
              >
                <div
                  className="testimoni-img-box"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <Image
                    src={item.src}
                    alt={`Testimoni ${item.author}`}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 760px) 240px, 280px"
                    className="testimoni-img"
                  />
                  <div className="testimoni-zoom-hint" aria-hidden="true">
                    <ZoomIn size={18} strokeWidth={2.4} />
                  </div>
                </div>
                <div className="testimoni-meta">
                  <span className="testimoni-author">{item.author}</span>
                  <span className="testimoni-role">{item.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Track 2: Moving right */}
        <div className="testimoni-track-wrapper">
          <div className="testimoni-track testimoni-track--right">
            {[...track2, ...track2].map((item, idx) => (
              <button
                key={`t2-${item.id}-${idx}`}
                type="button"
                className="testimoni-card"
                onClick={() => handleOpen(item.id)}
                aria-label={`Buka review dari ${item.author}`}
              >
                <div
                  className="testimoni-img-box"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <Image
                    src={item.src}
                    alt={`Testimoni ${item.author}`}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 760px) 240px, 280px"
                    className="testimoni-img"
                  />
                  <div className="testimoni-zoom-hint" aria-hidden="true">
                    <ZoomIn size={18} strokeWidth={2.4} />
                  </div>
                </div>
                <div className="testimoni-meta">
                  <span className="testimoni-author">{item.author}</span>
                  <span className="testimoni-role">{item.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="testimoni-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimoni dari ${activeItem.author}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="testimoni-modal-dialog">
            <button
              type="button"
              className="testimoni-modal-close"
              onClick={handleClose}
              aria-label="Tutup pratinjau"
            >
              <X size={22} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              className="testimoni-modal-nav testimoni-modal-nav--prev"
              onClick={handlePrev}
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={24} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              className="testimoni-modal-nav testimoni-modal-nav--next"
              onClick={handleNext}
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={24} strokeWidth={2.4} />
            </button>

            <div className="testimoni-modal-media">
              <div
                className="testimoni-modal-img-wrap"
                style={{ aspectRatio: activeItem.aspectRatio }}
              >
                <Image
                  src={activeItem.src}
                  alt={`Testimoni dari ${activeItem.author}`}
                  width={activeItem.width}
                  height={activeItem.height}
                  sizes="(max-width: 760px) 92vw, 500px"
                  priority
                  className="testimoni-modal-img"
                />
              </div>

              <div className="testimoni-modal-caption">
                <div className="testimoni-modal-info">
                  <span className="testimoni-modal-author">{activeItem.author}</span>
                  <span className="testimoni-modal-tag">{activeItem.role}</span>
                </div>
                <p className="testimoni-modal-quote">{activeItem.quote}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
