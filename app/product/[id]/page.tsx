import products from "@/app/data/products.json";

export default function ProductPage({ params }: { params: { id: string } }) {
  // como params.id é string, precisamos converter para número
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <p className="p-4">Produto não encontrado</p>;

  return (
    <main className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-brand font-bold text-2xl mt-3">
            R$ {product.price.toFixed(2)}
          </p>
          {product.description && (
            <p className="mt-4 text-gray-700">{product.description}</p>
          )}

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full bg-yellow-400 text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-yellow-500 transition text-center"
          >
            Comprar no Mercado Livre
          </a>
        </div>
      </div>
    </main>
  );
}
