"use client";
import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-full h-auto object-cover"
      />
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl bg-black/50 px-6 py-2 rounded-lg">
        Discover exclusive deals and must-have products tailored just for you!
      </p>
    </section>
  );
}
