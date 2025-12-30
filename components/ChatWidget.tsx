"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function ChatWidget() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const whatsappNumber = "265998152880"; // without '+'

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
  };

  if (!isLoaded) return null; // wait until Clerk finishes loading

  return (
    <div className="fixed bottom-6 left-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-72 bg-white shadow-xl p-4 rounded-xl mb-3 flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Chat With Us</h3>
              <button onClick={() => setOpen(false)} className="text-gray-600 hover:text-black">
                ✖
              </button>
            </div>

            {isSignedIn && user ? (
              <>
                <textarea
                  placeholder="Type your message..."
                  className="w-full border rounded-lg p-2 h-24 mb-2 focus:outline-none focus:ring-2 focus:ring-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  onClick={handleSend}
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Send
                </button>
              </>
            ) : (
              <p className="text-gray-700">
                Please sign in to use the chat and contact us directly.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition text-2xl"
      >
        💬
      </button>
    </div>
  );
}
