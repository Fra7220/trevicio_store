import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductDetails = async ({ params }: { params: { productId: string }}) => {
  const productDetails = await getProductDetails(params.productId);

  if (!productDetails) {
    return <p className="text-center py-10">Product not found.</p>;
  }

  let relatedProducts = await getRelatedProducts(params.productId);

  // Shuffle to randomize the order
  relatedProducts = relatedProducts.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      {relatedProducts && relatedProducts.length > 0 && (
        <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
          <p className="text-heading3-bold">Related Products</p>

          <div className="w-full mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 6 }
              }}
              loop={true}
            >
              {relatedProducts.map((product: ProductType) => (
                <SwiperSlide key={product._id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
