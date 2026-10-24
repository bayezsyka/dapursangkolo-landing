"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface TestimonialPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  aspectRatio: string;
}

const testimonialPhotos: TestimonialPhoto[] = [
  {
    id: "testi-01",
    src: "/media/testimoni/testimoni-01.webp",
    width: 739,
    height: 1313,
    alt: "Testimoni pelanggan Dapur Sangkolo",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-09",
    src: "/media/testimoni/testimoni-09.webp",
    width: 739,
    height: 685,
    alt: "Review rasa Wanpaku Sandwich Dapur Sangkolo",
    aspectRatio: "739 / 685",
  },
  {
    id: "testi-03",
    src: "/media/testimoni/testimoni-03.webp",
    width: 739,
    height: 1060,
    alt: "Testimoni porsi dan sayur fresh Dapur Sangkolo",
    aspectRatio: "739 / 1060",
  },
  {
    id: "testi-04",
    src: "/media/testimoni/testimoni-04.webp",
    width: 739,
    height: 978,
    alt: "Review porsi kenyang dan packaging Wanpaku",
    aspectRatio: "739 / 978",
  },
  {
    id: "testi-07",
    src: "/media/testimoni/testimoni-07.webp",
    width: 739,
    height: 1313,
    alt: "Paket Wanpaku Sandwich Dapur Sangkolo",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-05",
    src: "/media/testimoni/testimoni-05.webp",
    width: 739,
    height: 1313,
    alt: "Potongan tebal Wanpaku Sandwich",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-10",
    src: "/media/testimoni/testimoni-10.webp",
    width: 739,
    height: 655,
    alt: "Review camilan Wanpaku Sandwich",
    aspectRatio: "739 / 655",
  },
  {
    id: "testi-06",
    src: "/media/testimoni/testimoni-06.webp",
    width: 739,
    height: 1313,
    alt: "Testimoni kenyang Wanpaku Sandwich",
    aspectRatio: "739 / 1313",
  },
  {
    id: "testi-08",
    src: "/media/testimoni/testimoni-08.webp",
    width: 739,
    height: 1240,
    alt: "Review sandwich sampai dengan fresh",
    aspectRatio: "739 / 1240",
  },
  {
    id: "testi-02",
    src: "/media/testimoni/testimoni-02.webp",
    width: 739,
    height: 1313,
    alt: "Testimoni rasa Wanpaku Sandwich",
    aspectRatio: "739 / 1313",
  },
];

const track1 = [
  testimonialPhotos[0],
  testimonialPhotos[1],
  testimonialPhotos[2],
  testimonialPhotos[3],
  testimonialPhotos[4],
];

const track2 = [
  testimonialPhotos[5],
  testimonialPhotos[6],
  testimonialPhotos[7],
  testimonialPhotos[8],
  testimonialPhotos[9],
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex !== null ? testimonialPhotos[activeIndex] : null;

  const handleOpen = (id: string) => {
    const idx = testimonialPhotos.findIndex((p) => p.id === id);
    if (idx !== -1) setActiveIndex(idx);
  };

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return null;
      return curr === 0 ? testimonialPhotos.length - 1 : curr - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return null;
      return curr === testimonialPhotos.length - 1 ? 0 : curr + 1;
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
      </div>

      <div className="testimoni-marquee-container" data-reveal>
        {/* Track 1: Bergerak ke kiri */}
        <div className="testimoni-track-wrapper">
          <div className="testimoni-track testimoni-track--left">
            {[...track1, ...track1].map((item, idx) => (
              <button
                key={`t1-${item.id}-${idx}`}
                type="button"
                className="testimoni-card"
                onClick={() => handleOpen(item.id)}
                aria-label="Buka foto testimoni"
              >
                <div
                  className="testimoni-img-box"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 760px) 230px, 280px"
                    className="testimoni-img"
                  />
                  <div className="testimoni-zoom-hint" aria-hidden="true">
                    <ZoomIn size={18} strokeWidth={2.4} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Track 2: Bergerak ke kanan */}
        <div className="testimoni-track-wrapper">
          <div className="testimoni-track testimoni-track--right">
            {[...track2, ...track2].map((item, idx) => (
              <button
                key={`t2-${item.id}-${idx}`}
                type="button"
                className="testimoni-card"
                onClick={() => handleOpen(item.id)}
                aria-label="Buka foto testimoni"
              >
                <div
                  className="testimoni-img-box"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 760px) 230px, 280px"
                    className="testimoni-img"
                  />
                  <div className="testimoni-zoom-hint" aria-hidden="true">
                    <ZoomIn size={18} strokeWidth={2.4} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Hanya foto murni resolusi tinggi) */}
      {activePhoto && (
        <div
          className="testimoni-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto testimoni"
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
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={24} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              className="testimoni-modal-nav testimoni-modal-nav--next"
              onClick={handleNext}
              aria-label="Foto berikutnya"
            >
              <ChevronRight size={24} strokeWidth={2.4} />
            </button>

            <div className="testimoni-modal-media">
              <div
                className="testimoni-modal-img-wrap"
                style={{ aspectRatio: activePhoto.aspectRatio }}
              >
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  width={activePhoto.width}
                  height={activePhoto.height}
                  sizes="(max-width: 760px) 92vw, 480px"
                  priority
                  className="testimoni-modal-img"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
