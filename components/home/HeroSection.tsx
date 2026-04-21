"use client";

import { HeroParallaxComp } from "@/components/ui/hero-parallax";

const products = [
  { title: "Growth ERP & CRM", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "R-Core Data Suite", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cursor.png" },
  { title: "Point of Sale (POS)", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/rogue.png" },
  { title: "SMS Solutions", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editorially.png" },
  { title: "WhatsApp Solutions", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/editrix.png" },
  { title: "Customer Portal", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/pixelperfect.png" },
  { title: "HR Management", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/algochurn.png" },
  { title: "Inventory & Supply Chain", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/aceternityui.png" },
  { title: "Financial Control", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png" },
  { title: "Project Delivery", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/smartbridge.png" },
  { title: "Real Estate Suite", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png" },
  { title: "Email Solutions", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/cremedigital.png" },
  { title: "EMS Platform", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png" },
  { title: "Balloting Module", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/invoker.png" },
  { title: "Document Archiving", link: "#", thumbnail: "https://www.aceternity.com/images/products/thumbnails/new/efreeinvoice.png" },
];

export default function HeroSection() {
  return <HeroParallaxComp products={products} />;
}