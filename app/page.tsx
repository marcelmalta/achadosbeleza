import ProductCard from "@/components/ProductCard";
import products from "@/app/data/products.json";
import Link from "next/link";

export default function Home() {
  const ofertas = products.slice(0, 3);
  const novidades = products;

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Faixa de categorias fixa abaixo do header */}
      <nav className="bg-yellow-400 px-4 py-2 flex gap-4 overflow-x-auto text-sm font-medium text-gray-900 sticky top-[56px] z-40 shadow">
        <Link href="/#ofertas" className="hover:underline whitespace-nowrap">
          Ofertas
        </Link>
        <Link href="/" className="hover:underline whitespace-nowrap">
          Supermercado
        </Link>
        <Link href="/" className="hover:underline whitespace-nowrap">
          Moda
        </Link>
        <Link href="/" className="hover:underline whitespace-nowrap">
          Cuidados Pessoais
        </Link>
        <Link href="/" className="hover:underline whitespace-nowrap">
          Perfumes
        </Link>
        <Link href="/" className="hover:underline whitespace-nowrap">
          Mais
        </Link>
      </nav>

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
