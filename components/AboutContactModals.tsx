"use client";

import Image from "next/image";

interface AboutContactModalsProps {
  openAbout: boolean;
  setOpenAbout: (value: boolean) => void;
  openContact: boolean;
  setOpenContact: (value: boolean) => void;
}

export default function AboutContactModals({
  openAbout,
  setOpenAbout,
  openContact,
  setOpenContact,
}: AboutContactModalsProps) {
  return (
    <>
      {/* ==================== ABOUT US MODAL ==================== */}
      {openAbout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => setOpenAbout(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a modern online business focused on delivering high-quality products with exceptional customer experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to combine convenience, reliability, and innovation for a truly premium shopping experience.
              Every product is carefully selected to meet the highest standards of quality and style.
            </p>
          </div>
        </div>
      )}

      {/* ==================== CONTACT US MODAL ==================== */}
      {openContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => setOpenContact(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Reach out to us for any inquiries, assistance, or product information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@myshop.com" className="text-blue-600 underline">
                support@myshop.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Phone:</strong> +265 991 406 247
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are committed to responding promptly and providing you with the best service possible.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
