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
        <h1 className="text-4xl font-extrabold text-[#3483FA] mb-3">
          AchadosBeleza.com.br
        </h1>
        <p className="text-lg text-gray-700">
          Descubra ofertas incríveis em cosméticos, perfumes e cuidados pessoais.
        </p>
      </section>

      {/* OFERTAS DO DIA */}
      <section
        id="ofertas"
        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#3483FA]"
      >
        <h2 className="text-2xl font-bold text-[#3483FA] mb-4">
          🔥 Ofertas do Dia
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {ofertas.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* NOVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ Novidades</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {novidades.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
