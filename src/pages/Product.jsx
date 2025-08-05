import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="pt-10 border-t-2 animate-fadeIn">
      {/* Product Section */}
      <div className="flex flex-col gap-10 sm:flex-row">
        {/* Thumbnail Images */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className={`w-[24%] sm:w-full sm:mb-2 flex-shrink-0 cursor-pointer rounded-lg border transition-all hover:scale-105 ${
                  image === item ? "border-black shadow-md" : "border-gray-200"
                }`}
                alt=""
              />
            ))}
          </div>
          {/* Main Product Image */}
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full transition-transform duration-300 rounded-lg shadow-lg hover:scale-105"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="mt-2 text-3xl font-bold tracking-wide">
            {productData.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-2">
            {Array(4)
              .fill()
              .map((_, i) => (
                <img key={i} src={assets.star_icon} alt="" className="w-4" />
              ))}
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <span className="pl-2 text-sm text-gray-500">(122 reviews)</span>
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-semibold text-gray-900">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="mt-5 leading-relaxed text-gray-600">
            {productData.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-3 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-5 py-2 rounded-full border transition-all ${
                    item === size
                      ? "border-black bg-black text-white shadow-md"
                      : "border-gray-300 hover:border-black hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 text-sm text-white transition-transform transform bg-black rounded-full shadow-md hover:bg-gray-800 hover:scale-105"
          >
            🛒 ADD TO CART
          </button>

          {/* Info */}
          <hr className="mt-8 sm:w-4/5" />
          <ul className="mt-5 space-y-1 text-sm text-gray-600">
            <li>✔ 100% Original product</li>
            <li>💵 Cash on delivery available</li>
            <li>🔄 Easy return & exchange within 7 days</li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div className="flex border-b">
          <b className="px-6 py-3 text-sm border-t border-l border-r bg-gray-50">
            Description
          </b>
          <p className="px-6 py-3 text-sm border-t border-r">Reviews (122)</p>
        </div>
        <div className="px-6 py-6 text-sm leading-relaxed text-gray-600 border">
          <p>
            E-commerce websites are online platforms for buying & selling
            products, offering convenience, accessibility, and global reach.
          </p>
          <p className="mt-3">
            Each product page provides detailed descriptions, images, prices,
            and variations for a smooth shopping experience.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
