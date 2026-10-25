import Image from "next/image";
import { Camera, MessageCircle } from "lucide-react";
import { MotionController } from "@/components/MotionController";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const baseWhatsapp = "https://wa.me/6285179637099";
const defaultWhatsappMessage =
  "Halo Dapur Sangkolo, saya ingin pesan sandwich. Boleh minta info pemesanan?";
const whatsappUrl = `${baseWhatsapp}?text=${encodeURIComponent(defaultWhatsappMessage)}`;
const orderOriUrl = `${baseWhatsapp}?text=${encodeURIComponent(
  "Halo Dapur Sangkolo, saya ingin pesan Wanpaku Sandwich: Ori Smokey Egg (Rp 20.000)."
)}`;
const orderCheeseUrl = `${baseWhatsapp}?text=${encodeURIComponent(
  "Halo Dapur Sangkolo, saya ingin pesan Wanpaku Sandwich: Cheese Smokey Egg (Rp 22.000)."
)}`;
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
      <a className="skip-link" href="#menu">
        Lewati ke menu
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

          <a className="hero-scroll" href="#menu" aria-label="Lihat pilihan menu">
            <span aria-hidden="true" />
            Lihat menu
          </a>
        </section>

        <section id="menu" className="menu-editorial" aria-labelledby="menu-title">
          <div className="menu-editorial-inner">
            <header className="menu-editorial-header" data-reveal>
              <h2 id="menu-title">Pilihan Menu.</h2>
            </header>

            <div className="menu-list">
              <article className="menu-item" data-reveal>
                <div className="menu-item-main">
                  <div className="menu-item-meta">
                    <span className="menu-item-index">01</span>
                    <h3 className="menu-item-name">Ori Smokey Egg</h3>
                  </div>
                  <p className="menu-item-desc">
                    Roti tawar lembut, 1 butir telur ayam, 2 lembar smoke beef, sayuran segar, dan
                    saus spesial.
                  </p>
                  <div className="menu-item-nutrition">
                    <span>25 g protein</span>
                    <span className="menu-item-sep" aria-hidden="true">
                      /
                    </span>
                    <span>~420 kkal</span>
                  </div>
                </div>

                <div className="menu-item-action">
                  <span className="menu-item-price">Rp 20.000</span>
                  <a
                    href={orderOriUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="menu-item-cta"
                    aria-label="Pesan Ori Smokey Egg via WhatsApp"
                  >
                    <span>Pesan via WhatsApp</span>
                    <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />
                  </a>
                </div>
              </article>

              <article className="menu-item" data-reveal>
                <div className="menu-item-main">
                  <div className="menu-item-meta">
                    <span className="menu-item-index">02</span>
                    <h3 className="menu-item-name">Cheese Smokey Egg</h3>
                  </div>
                  <p className="menu-item-desc">
                    Kelezatan Ori Smokey Egg dengan tambahan slice keju gurih dan creamy yang meleleh.
                  </p>
                  <div className="menu-item-nutrition">
                    <span>28 g protein</span>
                    <span className="menu-item-sep" aria-hidden="true">
                      /
                    </span>
                    <span>~480 kkal</span>
                  </div>
                </div>

                <div className="menu-item-action">
                  <span className="menu-item-price">Rp 22.000</span>
                  <a
                    href={orderCheeseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="menu-item-cta menu-item-cta--cheese"
                    aria-label="Pesan Cheese Smokey Egg via WhatsApp"
                  >
                    <span>Pesan via WhatsApp</span>
                    <MessageCircle aria-hidden="true" size={19} strokeWidth={2.2} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="produk" className="showcase" aria-labelledby="showcase-title">
          <div className="showcase-heading" data-reveal>
            <h2 id="showcase-title">Lihat Wanpaku dari dekat.</h2>
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
              <p>Pesan Ori Smokey Egg atau Cheese Smokey Egg langsung via WhatsApp.</p>
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
