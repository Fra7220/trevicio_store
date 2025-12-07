"use client";
import Image from "next/image";

export default function TeamSection({ onOpenAbout, onOpenContact }: { onOpenAbout: () => void, onOpenContact: () => void }) {
  const teamImages = ["team1.png", "team2.png", "team3.png"];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Passionate, dedicated, and experienced – our team works tirelessly to make your shopping seamless and enjoyable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {teamImages.map((file, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <Image
              src={`/${file}`}
              alt={`Team Member ${i+1}`}
              width={128}
              height={128}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Team Member {i+1}</h3>
            <p className="text-gray-600">Position Placeholder</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={onOpenAbout}
          className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
        >
          About Us
        </button>
        <button
          onClick={onOpenContact}
          className="border border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
