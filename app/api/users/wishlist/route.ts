import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth(); // Get the signed-in user

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB(); // Ensure DB connection

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const { productId } = await req.json();

    if (!productId || typeof productId !== "string") {
      return new NextResponse("Product ID required", { status: 400 });
    }

    // Toggle wishlist item
    const index = user.wishlist.indexOf(productId);
    if (index > -1) {
      // Remove product
      user.wishlist.splice(index, 1);
    } else {
      // Add product
      user.wishlist.push(productId);
    }

    await user.save(); // Save updated user

    return NextResponse.json({ success: true, wishlist: user.wishlist }, { status: 200 });
  } catch (err) {
    console.error("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
