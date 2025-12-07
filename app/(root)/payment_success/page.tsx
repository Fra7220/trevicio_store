"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const OrderSent = () => {
  const cart = useCart();

  useEffect(() => {
    // Clear the cart when this page loads
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 px-4 text-center">
      <p className="text-heading4-bold text-green-600">
        Order Sent Successfully
      </p>

      <p className="text-body-medium">
        Your order has been sent to our WhatsApp. <br />
        Our team will contact you shortly to confirm your order and delivery.
      </p>

      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white rounded"
      >
        CONTINUE SHOPPING
      </Link>
    </div>
  );
};

export default OrderSent;
