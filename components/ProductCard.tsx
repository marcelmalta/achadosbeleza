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
      {/* Card responsivo estilo Mercado Livre */}
      <div
        className="bg-white rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition flex sm:flex-col gap-3 border border-gray-200"
        onClick={() => setOpen(true)}
      >
        {/* Imagem */}
        <img
          src={product.images?.[0] || ""}
          alt={product.title}
          className="w-24 h-24 sm:w-full sm:h-48 object-contain rounded"
        />

        {/* Infos */}
        <div className="flex-1">
          {/* Título */}
          <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-gray-900">
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
              <p className="text-green-600 text-sm font-semibold">
                {product.discountPercent}% OFF
              </p>
            )}

            {/* Parcelamento */}
            {product.paymentInfo && (
              <p className="text-xs text-gray-600">{product.paymentInfo}</p>
            )}

            {/* Frete */}
            {product.shipping?.freeShipping && (
              <p className="text-xs font-medium text-[#00a650]">
                Frete grátis {product.shipping.full && "⚡FULL"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal de detalhes */}
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
