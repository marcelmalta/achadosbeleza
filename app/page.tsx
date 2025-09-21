"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao carregar produtos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="p-6">Carregando produtos...</p>;
  }

  const ofertas = products.slice(0, 3);
  const novidades = products;

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="p-4 max-w-6xl mx-auto space-y-12">
        {/* OFERTAS DO DIA */}
        <section
          id="ofertas"
          className="bg-white p-4 md:p-6 rounded-xl shadow-md border-l-4 border-brand"
        >
          <h2 className="text-xl md:text-2xl font-bold text-brand mb-4">
            🔥 Ofertas do Dia
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {ofertas.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* NOVIDADES */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            ✨ Novidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {novidades.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
