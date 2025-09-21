"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ImageUploader from "@/components/ImageUploader";

export default function NewProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortName: "",
    price: "",
    discountPrice: "",
    discountPercent: "",
    paymentInfo: "",
    rating: "",
    reviews: "",
    freeShipping: false,
    full: false,
    deliveryTime: "",
    images: "",
    color: "",
    voltage: "",
    description: "",
    sellerName: "",
    sellerLevel: "",
    sellerSales: "",
    sellerWarranty: "",
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          discountPrice: parseFloat(form.discountPrice),
          discountPercent: parseInt(form.discountPercent),
          rating: parseFloat(form.rating),
          reviews: parseInt(form.reviews),
          images: form.images.split(",").map((i) => i.trim()),
          color: form.color.split(",").map((c) => c.trim()),
          voltage: form.voltage.split(",").map((v) => v.trim()),
          description: form.description.split("\n").map((d) => d.trim()),
        }),
      });

      if (!res.ok) throw new Error("Erro ao cadastrar produto");

      toast.success("Produto cadastrado com sucesso!");
      router.push("/admin/products");
    } catch (err) {
      console.error(err);
      toast.error("Falha ao cadastrar produto");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="shortName"
          placeholder="Nome curto"
          value={form.shortName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="price"
            placeholder="Preço"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="discountPrice"
            placeholder="Preço com desconto"
            value={form.discountPrice}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          type="number"
          name="discountPercent"
          placeholder="Desconto (%)"
          value={form.discountPercent}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="paymentInfo"
          placeholder="Informações de pagamento"
          value={form.paymentInfo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Nota"
            value={form.rating}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="reviews"
            placeholder="Avaliações"
            value={form.reviews}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" name="freeShipping" checked={form.freeShipping} onChange={handleChange} />
          Frete Grátis
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="full" checked={form.full} onChange={handleChange} />
          Full
        </label>

        <input
          type="text"
          name="deliveryTime"
          placeholder="Tempo de entrega"
          value={form.deliveryTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Upload de imagens */}
        <ImageUploader
          onUpload={(url) => {
            setForm((prev) => ({
              ...prev,
              images: prev.images ? prev.images + ", " + url : url,
            }));
          }}
        />
        {form.images && (
          <div className="flex gap-2 flex-wrap mt-2">
            {form.images.split(",").map((img, i) => (
              <img
                key={i}
                src={img.trim()}
                alt="preview"
                className="w-24 h-24 object-cover rounded border"
              />
            ))}
          </div>
        )}

        <input
          type="text"
          name="color"
          placeholder="Cores (separadas por vírgula)"
          value={form.color}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="voltage"
          placeholder="Voltagens (separadas por vírgula)"
          value={form.voltage}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Descrição (uma por linha)"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="sellerName"
            placeholder="Nome do vendedor"
            value={form.sellerName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="sellerLevel"
            placeholder="Nível do vendedor"
            value={form.sellerLevel}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="sellerSales"
          placeholder="Vendas do vendedor"
          value={form.sellerSales}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="sellerWarranty"
          placeholder="Garantia"
          value={form.sellerWarranty}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="link"
          placeholder="Link do produto"
          value={form.link}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Salvar Produto
        </button>
      </form>
    </div>
  );
}
