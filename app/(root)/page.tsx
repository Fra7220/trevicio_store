"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import Image from "next/image";
import { default as loadDynamic } from "next/dynamic";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import NewArrival from "@/components/NewArrival";
import { ReactNode } from "react";

// Dynamically load ChatWidget on the client only
const ChatWidget = loadDynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

// Section wrapper component
type SectionWrapperProps = {
  children: ReactNode;
  bg?: string;
  className?: string;
};

const SectionWrapper = ({
  children,
  bg = "bg-white",
  className = "",
}: SectionWrapperProps) => (
  <section
    className={`${bg} py-16 px-6 sm:px-10 md:px-16 lg:px-24 ${className} fade-up`}
  >
    {children}
  </section>
);

// Services type
type Service = {
  emoji: string;
  title: string;
  desc: string;
};

export default function Home() {
  const services: Service[] = [
    {
      emoji: "🚀",
      title: "Fast Delivery",
      desc: "Receive your products quickly with our reliable shipping partners.",
    },
    {
      emoji: "🔒",
      title: "Secure Payments",
      desc: "Shop confidently with our safe and convenient payment methods.",
    },
    {
      emoji: "💬",
      title: "Customer Support",
      desc: "Our support team is always ready to help you, 24/7.",
    },
  ];

  return (
    <>
      {/* Global CSS */}
      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center overflow-hidden fade-up">
          <Image
            src="/hero4.png"
            alt="Trevicio Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="relative z-20 flex items-center w-full h-full px-6 sm:px-10 md:px-16 lg:px-24 fade-up">
            <div className="max-w-lg">
              <h1 className="text-white font-bold mb-4 leading-tight text-[clamp(2rem,6vw,4rem)]">
                Your Business, <br /> Your Style
              </h1>
              <p className="text-white md:text-lg mb-4">
                Premium products, seamless shopping, and a platform designed for
                modern lifestyles.
              </p>
              <p className="text-white text-sm md:text-base">
                Explore curated collections built for quality and convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <SectionWrapper bg="bg-gray-100" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Trevicio? ✨</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We blend quality, elegance, and service excellence to deliver a
            seamless shopping experience from selection to delivery.
          </p>
        </SectionWrapper>

        {/* Banner */}
        <section className="w-full fade-up">
          <Image
            src="/banner.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        {/* Collections */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Explore Our Collections 🛍️
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Carefully curated products that match your style and everyday needs.
          </p>
        </SectionWrapper>

        <Collections />

        {/* Featured Products */}
        <SectionWrapper bg="bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Featured Products 🌟
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Hand-picked items combining design, quality, and functionality.
          </p>
        </SectionWrapper>

        <section className="w-full fade-up">
          <Image
            src="/banner2.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        <ProductList />

        {/* Services */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Our Services 🛠️
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6 text-center">
            Designed to make your shopping experience smooth and enjoyable.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-64 text-center fade-up"
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* New Arrivals Intro */}
        <section className="w-full flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-gray-50 to-white fade-up">
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-500">
            Fresh Drop
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Discover What’s New
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 text-lg">
            Newly added pieces designed to elevate your style.
          </p>
        </section>

        <section className="w-full fade-up">
          <Image
            src="/banner1.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        <NewArrival />
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget />

      {/* Scroll animation script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== "undefined") {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("visible");
                    }
                  });
                },
                { threshold: 0.1 }
              );
              document
                .querySelectorAll(".fade-up")
                .forEach((el) => observer.observe(el));
            }
          `,
        }}
      />
    </>
  );
}
