"use client";
import { useEffect, useState } from "react";
import { XMarkIcon, StarIcon, BoltIcon } from "@heroicons/react/24/solid";

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
  description: string[];
  sellerName?: string;
  sellerLevel?: string;
  sellerSales?: string;
  sellerWarranty?: string;
  link: string;
}

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        {/* botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-50"
        >
          <XMarkIcon className="h-7 w-7 sm:h-6 sm:w-6 text-gray-700" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
          {/* coluna imagens */}
          <div>
            {/* imagem principal */}
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-64 sm:h-96 object-contain rounded-xl shadow-md bg-gray-50"
            />

            {/* carrossel responsivo */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  onClick={() => setMainImage(img)}
                  className={`h-20 w-20 flex-shrink-0 object-cover rounded-lg cursor-pointer border ${
                    mainImage === img ? "border-yellow-500" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* coluna detalhes */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {product.title}
            </h2>

            {/* rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating)
                          ? "fill-yellow-400"
                          : "fill-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>
            )}

            {/* preços */}
            {product.price && (
              <p className="text-gray-500 line-through mt-3 sm:mt-4">
                R$ {product.price.toFixed(2)}
              </p>
            )}
            {product.discountPrice && (
              <div className="flex items-center gap-2">
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  R$ {product.discountPrice.toFixed(2)}
                </p>
                {product.discountPercent && (
                  <span className="text-green-600 font-semibold">
                    {product.discountPercent}% OFF no Pix
                  </span>
                )}
              </div>
            )}
            {product.paymentInfo && (
              <p className="text-gray-700 text-sm">{product.paymentInfo}</p>
            )}

            {/* shipping */}
            <div className="mt-4 space-y-1">
              {product.freeShipping && (
                <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                  FRETE GRÁTIS
                </div>
              )}
              {product.full && (
                <div className="flex items-center text-sm text-gray-700">
                  <BoltIcon className="h-5 w-5 text-green-600 mr-1" />
                  Envio FULL
                </div>
              )}
              {product.deliveryTime && (
                <p className="text-sm text-gray-600">{product.deliveryTime}</p>
              )}
            </div>

            {/* descrição */}
            {product.description?.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Descrição</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                  {product.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* vendedor */}
            {(product.sellerName || product.sellerLevel || product.sellerSales) && (
              <div className="mt-6 text-sm text-gray-600">
                <p>
                  Vendido por{" "}
                  <span className="font-semibold">{product.sellerName}</span>
                </p>
                <p>
                  {product.sellerLevel} | {product.sellerSales}
                </p>
                <p>{product.sellerWarranty}</p>
              </div>
            )}

            {/* botão principal */}
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 mt-6 w-full text-lg py-4 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-semibold text-gray-900"
            >
              <img src="/ico.png" alt="Mercado Livre" className="h-7" />
              Comprar no Mercado Livre
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
