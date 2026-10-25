import type { Metadata, Viewport } from "next";
import "@fontsource/archivo-black/400.css";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = "https://dapur.sangkolo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dapur Sangkolo | Wanpaku Sandwich",
  description:
    "Wanpaku Sandwich dari Dapur Sangkolo: Ori Smokey Egg (Rp 20.000) dan Cheese Smokey Egg (Rp 22.000). Pesan langsung via WhatsApp.",
  alternates: {
    canonical: "https://dapur.sangkolo.com/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Dapur Sangkolo",
    title: "Dapur Sangkolo | Wanpaku Sandwich",
    description:
      "Wanpaku Sandwich dari Dapur Sangkolo: Ori Smokey Egg (Rp 20.000) dan Cheese Smokey Egg (Rp 22.000). Pesan langsung via WhatsApp.",
    images: [
      {
        url: "/og-dapur-sangkolo.jpg",
        width: 1200,
        height: 630,
        alt: "Wanpaku Sandwich dari Dapur Sangkolo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapur Sangkolo | Wanpaku Sandwich",
    description:
      "Wanpaku Sandwich dari Dapur Sangkolo: Ori Smokey Egg (Rp 20.000) dan Cheese Smokey Egg (Rp 22.000). Pesan langsung via WhatsApp.",
    images: ["/og-dapur-sangkolo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdf8",
  colorScheme: "light",
};

const directionContract = `<!--
THESIS: Wanpaku is a tall edible stack presented as a wrapped editorial object, refusing the centered restaurant hero and equal-card menu grid.
OWN-WORLD: Deep navy structure, sage wrapping fields, warm sand breathing room, oversized black display type, flat paper layers, and sharp image windows.
STORY: See the sandwich at full scale, inspect its layers, meet the handmade process, then ask for menu and PO details on WhatsApp.
FIRST VIEWPORT: A two-line headline anchors the left while a portrait sandwich rises through a sage wrapper on the right; the order action stays visible in the header and copy block.
FORM: Wrapped-stack editorial composition, assigned grounded direction 4, seed 2b989765.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <template data-direction-contract dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
