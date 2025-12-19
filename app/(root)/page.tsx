export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import Image from "next/image";
import { default as loadDynamic } from "next/dynamic"; // rename here
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import NewArrival from "@/components/NewArrival";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

// Dynamically load ChatWidget on the client only
const ChatWidget = loadDynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

// Section wrapper component with proper TypeScript typing
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
    className={`${bg} py-16 px-6 sm:px-10 md:px-16 lg:px-24 ${className}`}
  >
    {children}
  </section>
);

// Types for services and team members
type Service = {
  emoji: string;
  title: string;
  desc: string;
};

type TeamMember = {
  name: string;
  role: string;
  img: string;
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

  const teamMembers: TeamMember[] = [
    { name: "Alice Smith", role: "Founder & CEO", img: "/team/team1.jpg" },
    { name: "Bob Johnson", role: "Head of Marketing", img: "/team/team2.jpg" },
    { name: "Carol Lee", role: "Product Manager", img: "/team/team3.jpg" },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
          <Image
            src="/hero4.png"
            alt="Trevicio Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="relative z-20 flex items-center w-full h-full px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-lg text-left">
              <h1 className="text-white font-bold drop-shadow-2xl mb-4 leading-tight text-[clamp(2rem,6vw,4rem)]">
                Your Business, <br /> Your Style
              </h1>
              <p className="text-white text-[clamp(0.875rem,2vw,1rem)] md:text-lg mb-4 drop-shadow-xl">
                Premium products, seamless shopping, and a platform designed for
                modern lifestyles. Elevate your everyday experiences with
                Trevicio.
              </p>
              <p className="text-white text-[clamp(0.75rem,1.5vw,0.875rem)] md:text-base drop-shadow-xl">
                Start exploring our collections and experience convenience,
                quality, and style in every order.
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Banner Attraction */}
        <SectionWrapper bg="bg-gray-100" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Trevicio? ✨</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Trevicio, we blend quality, elegance, and service excellence to
            ensure every shopping experience delights our customers. From our
            curated products to fast shipping and responsive support, we aim to
            create a seamless journey from selection to delivery.
          </p>
        </SectionWrapper>

        {/* Banner */}
        <section className="w-full">
          <Image
            src="/banner.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        {/* Pre-Collections Text */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Explore Our Collections 🛍️
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Our collections are designed to match your unique style and needs.
            Discover carefully curated products that bring sophistication and
            practicality together.
          </p>
        </SectionWrapper>

        {/* Collections Component */}
        <Collections />

        {/* Pre-Products Text */}
        <SectionWrapper bg="bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Featured Products 🌟
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Hand-picked selections that combine design, quality, and
            functionality. Shop our featured items and find your next favorite
            today.
          </p>
        </SectionWrapper>

        {/* Banner */}
        <section className="w-full">
          <Image
            src="/banner2.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        {/* Product List */}
        <ProductList />

        {/* Services Section */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Our Services 🛠️
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6 text-center">
            We provide fast and secure delivery, flexible payment options, and
            24/7 customer support. Every aspect of Trevicio is designed to make
            your shopping experience smooth and enjoyable.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-64 text-center"
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pre–New Arrivals Message */}
        <section className="w-full flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-500">
            Fresh Drop
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Discover What’s New
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600 text-lg leading-relaxed">
            Carefully selected, newly added pieces designed to elevate your
            style. Explore our latest arrivals and find something made just for
            you.
          </p>
        </section>

        {/* Banner */}
        <section className="w-full">
          <Image
            src="/banner1.png"
            alt="Trevicio Banner"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        {/* New Arrivals */}
        <NewArrival />

        {/* Meet The Team Section */}
        <SectionWrapper bg="bg-gray-100" className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Meet The Team 👥
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map(({ name, role, img }) => (
              <div
                key={name}
                className="bg-white p-4 rounded-lg shadow-md w-64"
              >
                <Image
                  src={img}
                  alt={name}
                  width={250}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* About Us */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            About Trevicio 🏬
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-4 text-center">
            Trevicio is a premium e-commerce platform dedicated to providing
            quality products and exceptional service. We combine elegance,
            convenience, and reliability to offer our customers a delightful
            shopping experience.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Our team works tirelessly to curate collections that reflect style,
            quality, and functionality. Every purchase is backed by our
            commitment to customer satisfaction, ensuring your shopping journey
            is seamless and enjoyable.
          </p>
        </SectionWrapper>

        {/* Contact Us */}
        <SectionWrapper bg="bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Contact Us 📞
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-4 text-center">
            Have questions or need assistance? Our team is ready to help. Use
            the floating chat button 💬 at the bottom left for quick WhatsApp
            contact.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            Direct contact:{" "}
            <span className="font-semibold">+265 991 406 247</span>
          </p>
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chat Widget */}
      <ChatWidget />
    </>
  );
}
