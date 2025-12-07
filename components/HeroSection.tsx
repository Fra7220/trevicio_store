"use client";

import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

interface HeroSectionProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenAbout, onOpenContact }: HeroSectionProps) {
  const { isSignedIn } = useUser();

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero4.png"
        alt="hero"
        fill
        priority
        className="object-cover object-left"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 lg:px-24 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl mb-4">
          Your Business,<br /> Your Style.
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 max-w-sm drop-shadow-xl">
          Discover premium products and experience seamless online shopping with our modern, customer-focused platform.
        </p>
        <p className="text-white text-sm md:text-base mb-6 max-w-sm drop-shadow-xl">
          Join thousands of happy customers who trust us for quality, speed, and convenience.
        </p>

        {/* Auth Buttons */}
        <div className="flex flex-wrap gap-4 items-center mb-6">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}
          {/* About & Contact Buttons */}
          <button
            onClick={onOpenAbout}
            className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            About Us
          </button>
          <button
            onClick={onOpenContact}
            className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Contact Us
          </button>
        </div>

        <p className="text-gray-200 text-sm md:text-base max-w-sm drop-shadow-xl">
          Start shopping today and experience convenience, quality, and exceptional customer support in every order.
        </p>
      </div>
    </section>
  );
}
