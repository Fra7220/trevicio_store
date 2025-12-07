"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutContactModals from "@/components/AboutContactModals";
import ChatWidget from "@/components/ChatWidget";
import FeaturePromo from "@/components/FeaturePromo";
import BannerSection from "@/components/BannerSection";
import CollectionsSection from "@/components/CollectionsSection";
import ProductListSection from "@/components/ProductListSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function HomeContent() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <HeroSection onOpenAbout={() => setOpenAbout(true)} onOpenContact={() => setOpenContact(true)} />
      <FeaturePromo />
      <BannerSection />
      <CollectionsSection />
      <ProductListSection />
      <ServicesSection />
      <TeamSection onOpenAbout={() => setOpenAbout(true)} onOpenContact={() => setOpenContact(true)} />
      <AboutContactModals
        openAbout={openAbout}
        setOpenAbout={setOpenAbout}
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
      <div className="fixed bottom-6 left-4 z-50">
        <ChatWidget />
      </div>
      <Footer />
    </>
  );
}
