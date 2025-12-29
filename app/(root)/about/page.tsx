"use client";

import Image from "next/image";
import { Crown, Code, ShieldCheck, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="px-6 sm:px-10 md:px-16 lg:px-24 py-16">
      {/* Intro */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Trevicio
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Trevicio is a modern e-commerce platform built to deliver quality,
          reliability, and a smooth digital shopping experience. Every product,
          feature, and interaction is designed with customers in mind.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <ShieldCheck className="mx-auto mb-3 text-gray-800" size={32} />
          <h3 className="font-semibold text-lg mb-2">Trusted Quality</h3>
          <p className="text-gray-600 text-sm">
            Carefully selected products that meet our standards of durability
            and performance.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <Rocket className="mx-auto mb-3 text-gray-800" size={32} />
          <h3 className="font-semibold text-lg mb-2">Fast & Reliable</h3>
          <p className="text-gray-600 text-sm">
            Optimized systems and dependable logistics for a smooth experience.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <Code className="mx-auto mb-3 text-gray-800" size={32} />
          <h3 className="font-semibold text-lg mb-2">Modern Technology</h3>
          <p className="text-gray-600 text-sm">
            Built with scalable and secure web technologies for performance.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
          {/* Trevor */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-200">
              <Image
                src="/team/trevor.jpg"
                alt="Trevor Namwili"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
              <Crown size={20} /> Trevor Namwili
            </h3>

            <p className="text-gray-500 mb-4">Owner & Manager</p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Oversees operations, business strategy, and customer satisfaction.
              Ensures Trevicio maintains quality, trust, and long-term growth.
            </p>
          </div>

          {/* Francis */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-200">
              <Image
                src="/team/francis.jpg"
                alt="Francis Chantulo"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
              <Code size={20} /> Francis Chantulo
            </h3>

            <p className="text-gray-500 mb-4">Developer @+265 991 406 247</p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Responsible for building, maintaining, and improving the Trevicio
              platform with a focus on performance, security, and scalability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
