"use client";

import { default as loadDynamic } from "next/dynamic";
import { MapPin, Mail, Phone } from "lucide-react";

// Dynamically load ChatWidget (same as Home)
const ChatWidget = loadDynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
      <main className="px-6 sm:px-10 md:px-16 lg:px-24 py-16">
        {/* Header */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg">
            Have questions, feedback, or need support?  
            We’re here to help and would love to hear from you.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Phone */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm text-center">
            <Phone className="mx-auto mb-3" size={28} />
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-gray-700">+265 998 152 880</p>
          </div>

          {/* Email */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm text-center">
            <Mail className="mx-auto mb-3" size={28} />
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-700 break-all">
              trevornamwiri1@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm text-center">
            <MapPin className="mx-auto mb-3" size={28} />
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-gray-700">
              Machinjiri Area 2, <br /> Blantyre, Malawi
            </p>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Need Quick Assistance?
            </h2>

            <p className="text-gray-600 mb-4">
              Use the floating WhatsApp chat button at the bottom left to get
              instant support from our team.
            </p>

            <p className="text-sm text-gray-500">
              We aim to respond as quickly as possible during business hours.
            </p>
          </div>
        </section>
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </>
  );
}
