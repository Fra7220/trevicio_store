"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart, Home, Heart, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-50 py-2 px-10 flex gap-2 justify-between items-center bg-white shadow-md max-sm:px-2">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      {/* Desktop Links */}
      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link href="/" className={`flex items-center gap-1 hover:text-red-1 ${pathname === "/" ? "text-red-1" : ""}`}>
          <Home className="h-4 w-4" /> Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`flex items-center gap-1 hover:text-red-1 ${pathname === "/wishlist" ? "text-red-1" : ""}`}
        >
          <Heart className="h-4 w-4" /> Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`flex items-center gap-1 hover:text-red-1 ${pathname === "/orders" ? "text-red-1" : ""}`}
        >
          <Package className="h-4 w-4" /> Orders
        </Link>
      </div>

      {/* Search */}
      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      {/* Right side */}
      <div className="relative flex gap-3 items-center">
        {/* Desktop Cart */}
        <Link
          href="/cart"
          className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart className="h-4 w-4" />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        {/* Mobile Menu Icon */}
        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {/* Mobile Dropdown */}
        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-3 p-3 rounded-lg border bg-white text-base-bold lg:hidden shadow-lg">
            <Link href="/" className="flex items-center gap-2 hover:text-red-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="flex items-center gap-2 hover:text-red-1"
            >
              <Heart className="h-4 w-4" /> Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="flex items-center gap-2 hover:text-red-1"
            >
              <Package className="h-4 w-4" /> Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart className="h-4 w-4" /> Cart ({cart.cartItems.length})
            </Link>
          </div>
        )}

        {/* User Login / Profile */}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound className="h-6 w-6 cursor-pointer hover:text-red-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
