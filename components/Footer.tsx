"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <BsTiktok size={20} />
              <a
                href="https://tiktok.com/@user260trevicio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                TikTok
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Instagram size={20} />
              <a
                href="https://www.instagram.com/trigahnamwiri?igsh=cHBiN252c2kydHJo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-2">
              {/* WhatsApp SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48a11.86 11.86 0 0 0-16.74 0 11.86 11.86 0 0 0 0 16.74l-1.88 6.9 7.14-1.88a11.86 11.86 0 0 0 16.74-16.74zm-9.2 16.02a9.93 9.93 0 0 1-5.3-1.54l-.38-.23-3.16.83.84-3.08-.25-.4a9.92 9.92 0 1 1 8.25 4.42zm5.65-7.48c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.95 1.17-.35.22-.65.08c-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.28.3-.47.1-.18.05-.35-.03-.5-.08-.15-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52-.18-.01-.38-.01-.58-.01s-.5.07-.77.35c-.27.28-1.03 1-1.03 2.45s1.06 2.85 1.21 3.05c.15.2 2.09 3.2 5.06 4.48.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.42-.08-.12-.28-.18-.58-.33z"/>
              </svg>
              <a
                href="https://wa.me/265998152880"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links (NEW – everything else untouched) */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Physical Address */}
        <div>
          <h3 className="text-lg font-bold mb-2">Store Address</h3>
          <p className="flex items-center gap-2">
            <MapPin size={20} />
            Machinjiri Area 2, Blantyre, Malawi
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="flex items-center gap-2">
            <Mail size={20} />
            trevornamwiri1@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Phone size={20} />
            +265 998 152 880
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Trevicio Store. All rights reserved.
      </div>
    </footer>
  );
}
