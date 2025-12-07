// app/orders/page.tsx
import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth(); // works in Server Components
  const { orders } = await getOrders(userId as string); // remove customer if unused

  if (!orders || orders.length === 0) {
    return (
      <div className="px-10 py-5 max-sm:px-3">
        <p className="text-heading3-bold my-10">Your Orders</p>
        <p className="text-body-bold my-5">You have no orders yet.</p>
      </div>
    );
  }

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10">Your Orders</p>

      <div className="flex flex-col gap-10">
        {orders.map((order: any) => (
          <div
            key={order._id}
            className="flex flex-col gap-8 p-4 hover:bg-grey-1"
          >
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Order ID: {order._id}</p>
              <p className="text-base-bold">
                Total Amount: MWK{order.totalAmount}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {(order.products || []).map((product: any, idx: number) => {
                // Get the first media image if exists, fallback to placeholder
                const imageUrl =
                  product.product?.media?.[0] ||
                  product.image ||
                  "/placeholder.png";

                return (
                  <div key={idx} className="flex gap-4">
                    <Image
                      src={product.media?.[2] || "/placeholder.png"}
                      alt={product.title || "Product"}
                      width={100}
                      height={100}
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div className="flex flex-col justify-between">
                      <p className="text-small-medium">
                        Title:{" "}
                        <span className="text-small-bold">{product.title}</span>
                      </p>
                      <p className="text-small-medium">
                        Color:{" "}
                        <span className="text-small-bold">{product.color}</span>
                      </p>
                      <p className="text-small-medium">
                        Size:{" "}
                        <span className="text-small-bold">{product.size}</span>
                      </p>
                      <p className="text-small-medium">
                        Unit price:{" "}
                        <span className="text-small-bold">{product.price}</span>
                      </p>
                      <p className="text-small-medium">
                        Quantity:{" "}
                        <span className="text-small-bold">
                          {product.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
export const dynamic = "force-dynamic";