import Image from "next/image";
import { Camera, MessageCircle } from "lucide-react";
import { MotionController } from "@/components/MotionController";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const whatsappMessage =
  "Halo Dapur Sangkolo, saya ingin pesan sandwich. Boleh minta informasi menu dan jadwal PO?";
const whatsappUrl = `https://wa.me/6285179637099?text=${encodeURIComponent(whatsappMessage)}`;
const instagramUrl = "https://www.instagram.com/dapur.sangkolo/";

const productFrames = [
  {
    src: "/media/wanpaku-city.webp",
    alt: "Wanpaku Sandwich berisi lapisan sayur, telur, dan isian lainnya, dipegang di dalam mobil",
    title: "Wanpaku Sandwich",
    note: "Potongan tebal, isi berlapis.",
    className: "product-frame product-frame--city",
    speed: "0.04",
  },
  {
    src: "/media/wanpaku-curtain.webp",
    alt: "Wanpaku Sandwich dengan lapisan telur yang terlihat di depan tirai berwarna hangat",
    title: "Tampak depan",
    note: "Semua lapisan terlihat dalam satu potong.",
    className: "product-frame product-frame--curtain",
    speed: "-0.035",
  },
  {
    src: "/media/wanpaku-bite.webp",
    alt: "Wanpaku Sandwich setelah gigitan pertama",
    title: "Setelah gigitan pertama",
    note: "Foto asli produk Dapur Sangkolo.",
    className: "product-frame product-frame--bite",
    speed: "0.055",
  },
];

export default function Home() {
  return (
    <>
      <MotionController />
      <a className="skip-link" href="#produk">
        Lewati ke produk
      </a>

      <main>
        <section id="beranda" className="hero" aria-labelledby="hero-title">
          <header className="site-header" data-hero-item>
            <a href="#beranda" className="brand-link" aria-label="Dapur Sangkolo, kembali ke awal">
              <Image
                src="/brand/logo.png"
                alt="Dapur Sangkolo"
                width={1500}
                height={1500}
                priority
                className="brand-logo"
              />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="header-order"
              aria-label="Pesan Wanpaku Sandwich melalui WhatsApp"
            >
              <span>Pesan</span>
              <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />
            </a>
          </header>

          <div className="hero-inner">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-title" data-hero-item>
                <span>Wanpaku</span>
                <span>Sandwich.</span>
              </h1>

              <div className="hero-action" data-hero-item>
                <p>Lihat potongannya. Tebal dan penuh lapisan.</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-cta">
                  <span>Pesan Sekarang</span>
                  <MessageCircle aria-hidden="true" size={21} strokeWidth={2.2} />
                </a>
              </div>
            </div>

            <div className="hero-visual" data-hero-item>
              <div className="hero-wrapper" aria-hidden="true" />
              <div className="hero-photo" data-parallax="-0.035">
                <Image
                  src="/media/wanpaku-hand.webp"
                  alt="Wanpaku Sandwich Dapur Sangkolo dipegang dengan satu tangan"
                  fill
                  priority
                  sizes="(max-width: 760px) 92vw, 48vw"
                />
              </div>
              <p className="hero-photo-note">Tinggi. Berlapis. Wanpaku.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mobile-hero-cta">
                <span>Pesan Sekarang</span>
                <MessageCircle aria-hidden="true" size={21} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <a className="hero-scroll" href="#produk" aria-label="Lihat produk">
            <span aria-hidden="true" />
            Lihat ke bawah
          </a>
        </section>

        <section id="produk" className="showcase" aria-labelledby="showcase-title">
          <div className="showcase-heading" data-reveal>
            <h2 id="showcase-title">Lihat Wanpaku dari dekat.</h2>
            <p>Menu dan jadwal PO dapat ditanyakan langsung melalui WhatsApp.</p>
          </div>

          <div className="product-collage">
            {productFrames.map((frame, index) => (
              <figure
                key={frame.src}
                className={frame.className}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
              >
                <div className="product-image-wrap">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(max-width: 760px) 88vw, 34vw"
                  />
                </div>
                <figcaption>
                  <strong>{frame.title}</strong>
                  <span>{frame.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="tentang" className="handmade" aria-labelledby="handmade-title">
          <div className="handmade-media" data-reveal>
            <div className="video-wrap" data-parallax="-0.025">
              <video
                data-scroll-video
                muted
                loop
                playsInline
                preload="none"
                poster="/media/wanpaku-motion-poster.webp"
                aria-label="Video Wanpaku Sandwich Dapur Sangkolo"
              >
                <source src="/media/wanpaku-motion.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="media-layer media-layer--one" aria-hidden="true" />
            <div className="media-layer media-layer--two" aria-hidden="true" />
          </div>

          <div className="handmade-copy" data-reveal>
            <h2 id="handmade-title">Dirakit satu per satu.</h2>
            <p>
              Dapur Sangkolo menyiapkan Wanpaku dengan tangan. Potongannya memperlihatkan tiap lapisan
              dari dekat.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-link">
              Tanya menu hari ini
              <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />
            </a>
          </div>
        </section>

        <TestimonialsSection />

        <section id="pesan" className="order" aria-labelledby="order-title">
          <div className="order-inner" data-reveal>
            <h2 id="order-title">Mau pesan Wanpaku?</h2>
            <div className="order-details">
              <p>Tanya menu dan jadwal PO langsung ke Dapur Sangkolo.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="order-cta">
                <MessageCircle aria-hidden="true" size={24} strokeWidth={2.2} />
                <span>Buka WhatsApp</span>
              </a>
            </div>
          </div>

          <footer className="site-footer">
            <a href="#beranda" className="footer-brand" aria-label="Dapur Sangkolo, kembali ke awal">
              <Image src="/brand/logo.png" alt="Dapur Sangkolo" width={1500} height={1500} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Instagram Dapur Sangkolo"
            >
              <Camera aria-hidden="true" size={21} strokeWidth={2.1} />
              <span>@dapur.sangkolo</span>
            </a>
            <p>Wanpaku Sandwich oleh Dapur Sangkolo.</p>
          </footer>
        </section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mobile-whatsapp"
        aria-label="Pesan Wanpaku Sandwich melalui WhatsApp"
      >
        <MessageCircle aria-hidden="true" size={21} strokeWidth={2.3} />
        <span>Pesan via WhatsApp</span>
      </a>
    </>
  );
}
