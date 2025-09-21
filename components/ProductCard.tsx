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
  freeShipping?: boolean;
  full?: boolean;
  deliveryTime?: string;
  images: string[];
  link: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  // Garante que sempre teremos uma imagem válida
  const imageUrl =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "/placeholder.png"; // 👈 fallback se não tiver imagem

  return (
    <>
      {/* Card estilo Mercado Livre / AliExpress */}
      <div
        className="bg-white rounded-lg shadow-md p-3 cursor-pointer hover:shadow-xl transition w-40 sm:w-56 flex-shrink-0"
        onClick={() => setOpen(true)}
      >
        {/* Imagem */}
        <div className="w-full h-40 sm:h-48 flex items-center justify-center mb-2">
          <img
            src={imageUrl}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Título curto */}
        <h3 className="font-medium text-sm mb-1 line-clamp-2">
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
          {product.freeShipping && (
            <p className="text-green-500 text-xs font-medium">
              Frete grátis {product.full && "⚡FULL"}
            </p>
          )}
        </div>
      </div>

      {/* Modal de detalhes */}
      {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
