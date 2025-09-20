import products from "../../../../public/products.json";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p className="p-4">Produto não encontrado</p>;

  return (
    <main className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-brand font-bold text-2xl mt-3">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <a
            href={product.affiliateUrl}
            target="_blank"
            className="mt-6 inline-block w-full bg-action text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-action-dark transition text-center"
          >
            Comprar no Mercado Livre
          </a>
        </div>
      </div>
    </main>
  );
}
