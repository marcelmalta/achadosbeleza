import ProductCard from "@/components/ProductCard";
import products from "@/app/data/products.json";

export default function Home() {
  const ofertas = products.slice(0, 5); // simulação de 5 ofertas
  const novidades = products; // todos os produtos

  return (
    <main className="p-4 max-w-6xl mx-auto space-y-12">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#ffe600] mb-3 drop-shadow">
          AchadosBeleza.com.br
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Descubra ofertas incríveis em cosméticos, perfumes e cuidados pessoais.
        </p>
      </section>

      {/* OFERTAS DO DIA */}
      <section id="ofertas">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          🔥 Ofertas do Dia
        </h2>
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {ofertas.map((p) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-44 sm:w-52"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* NOVIDADES */}
      <section id="novidades">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          ✨ Novidades
        </h2>
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {novidades.map((p) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-44 sm:w-52"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
