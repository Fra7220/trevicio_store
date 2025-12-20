export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import Image from "next/image";
import { default as loadDynamic } from "next/dynamic";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import NewArrival from "@/components/NewArrival";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { motion } from "framer-motion";

// Client-only chat widget
const ChatWidget = loadDynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

/* ---------------------------------- */
/* Animation presets */
/* ---------------------------------- */
import type { Variants } from "framer-motion";



const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // premium ease-out curve
    },
  },
};

/* ---------------------------------- */
/* Section Wrapper */
/* ---------------------------------- */
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
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className={`${bg} py-20 px-6 sm:px-10 md:px-16 lg:px-24 ${className}`}
  >
    {children}
  </motion.section>
);

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
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

/* ---------------------------------- */
/* Page */
/* ---------------------------------- */
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
        {/* Hero */}
        <section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
          <Image
            src="/hero4.png"
            alt="Trevicio Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-24"
          >
            <div className="max-w-xl">
              <h1 className="text-white font-extrabold leading-tight mb-6 text-[clamp(2.5rem,6vw,4.5rem)]">
                Your Business,
                <br />
                Your Style
              </h1>
              <p className="text-white/90 text-lg mb-4">
                Premium products, seamless shopping, and a platform crafted for
                modern lifestyles.
              </p>
              <p className="text-white/70">
                Elevate your everyday experience with Trevicio.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Choose */}
        <SectionWrapper bg="bg-gray-100 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-6">
              Why Choose Trevicio
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-700 max-w-3xl mx-auto"
            >
              We blend elegance, quality, and service excellence to deliver a
              seamless premium shopping experience.
            </motion.p>
          </motion.div>
        </SectionWrapper>

        {/* Banner */}
        <Image
          src="/banner.png"
          alt="Banner"
          width={2000}
          height={1000}
          className="w-full object-cover"
          priority
        />

        {/* Collections */}
        <SectionWrapper className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Curated selections crafted to match your style and needs.
          </p>
        </SectionWrapper>

        <Collections />

        {/* Featured */}
        <SectionWrapper bg="bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Design, quality, and functionality—handpicked just for you.
          </p>
        </SectionWrapper>

        <Image
          src="/banner2.png"
          alt="Banner"
          width={2000}
          height={1000}
          className="w-full object-cover"
          priority
        />

        <ProductList />

        {/* Services */}
        <SectionWrapper>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap justify-center gap-8"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-8 w-72 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* New Arrivals */}
        <SectionWrapper className="text-center bg-gradient-to-b from-gray-50 to-white">
          <span className="uppercase tracking-widest text-sm text-gray-500">
            Fresh Drop
          </span>
          <h2 className="mt-4 text-4xl font-bold">Discover What’s New</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Newly added pieces designed to elevate your style.
          </p>
        </SectionWrapper>

        <Image
          src="/banner1.png"
          alt="Banner"
          width={2000}
          height={1000}
          className="w-full object-cover"
          priority
        />

        <NewArrival />

        {/* Team */}
        <SectionWrapper bg="bg-gray-100 text-center">
          <h2 className="text-3xl font-semibold mb-10">Meet The Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-xl transition-shadow"
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  width={250}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* About & Contact */}
        <SectionWrapper>
          <h2 className="text-3xl font-semibold text-center mb-6">
            About Trevicio
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            A premium e-commerce platform built on elegance, convenience, and
            reliability.
          </p>
        </SectionWrapper>

        <SectionWrapper bg="bg-gray-100 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Use the floating chat or call{" "}
            <span className="font-semibold">+265 991 406 247</span>
          </p>
        </SectionWrapper>
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
