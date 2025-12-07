import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const { productId } = await req.json();

    if (!productId || typeof productId !== "string") {
      return new NextResponse("Product Id required", { status: 400 });
    }

    // Convert to string to avoid mismatches
    const productIdStr = productId.toString();

    const isLiked = user.wishlist.includes(productIdStr);

    if (isLiked) {
      // Remove from wishlist
      user.wishlist = user.wishlist.filter((id: string) => id !== productIdStr);
    } else {
      // Add to wishlist
      user.wishlist.push(productIdStr);
    }

    await user.save();

    // Return only necessary fields
    const sanitizedUser = {
      clerkId: user.clerkId,
      wishlist: user.wishlist,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return NextResponse.json(sanitizedUser, { status: 200 });
  } catch (err) {
    console.error("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
