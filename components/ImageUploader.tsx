"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Falha no upload");

      const data = await res.json();
      toast.success("Imagem enviada com sucesso!");
      onUpload(data.url); // pega a URL retornada pelo backend
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar imagem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block font-medium">Enviar Imagem</label>
      <input type="file" accept="image/*" onChange={handleFileChange} disabled={loading} />
      {loading && <p className="text-sm text-gray-500">Enviando...</p>}
    </div>
  );
}
