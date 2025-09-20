"use client";
import { useState } from "react";
import ProductModal from "./ProductModal";

interface Product {
  id: number;
  title: string;
  brand?: string;
  category?: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  paymentInfo?: string;
  rating?: number;
  reviews?: number;
  shipping?: {
    freeShipping?: boolean;
    full?: boolean;
    deliveryTime?: string;
  };
  images: string[];
  link: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card simplificado na Home */}
      <div
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
        onClick={() => setOpen(true)}
      >
        {/* Imagem */}
        <img
          src={product.images?.[0] || ""}
          alt={product.title}
          className="w-full h-48 object-contain mb-3"
        />

        {/* Título curto */}
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">
          {product.title}
        </h3>

        {/* Preços */}
        <div className="space-y-1">
          {product.price && (
            <p className="text-xs text-gray-500 line-through">
              R$ {product.price.toFixed(2)}
            </p>
          )}
          {product.discountPrice && (
            <p className="text-lg font-bold text-gray-900">
              R$ {product.discountPrice.toFixed(2)}
            </p>
          )}

          {/* Desconto */}
          {product.discountPercent && (
            <p className="text-green-600 text-sm">
              {product.discountPercent}% OFF
            </p>
          )}

          {/* Parcelamento */}
          {product.paymentInfo && (
            <p className="text-xs text-gray-600">{product.paymentInfo}</p>
          )}

          {/* Frete */}
          {product.shipping?.freeShipping && (
            <p className="text-green-500 text-xs font-medium">
              Frete grátis {product.shipping.full && "⚡FULL"}
            </p>
          )}
        </div>
      </div>

      {/* Modal de detalhes */}
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
