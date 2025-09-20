import ProductCard from "@/components/ProductCard";
import products from "@/app/data/products.json";

export default function Home() {
  // simulando que os 3 primeiros produtos são "ofertas do dia"
  const ofertas = products.slice(0, 3);
  const novidades = products;

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
      <section
        id="ofertas"
        className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          🔥 Ofertas do Dia
        </h2>
        <div className="flex flex-col divide-y sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:divide-y-0">
          {ofertas.map((p) => (
            <div key={p.id} className="py-3 sm:py-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* NOVIDADES */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          ✨ Novidades
        </h2>
        <div className="flex flex-col divide-y sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:divide-y-0">
          {novidades.map((p) => (
            <div key={p.id} className="py-3 sm:py-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
