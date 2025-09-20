import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand">
          AchadosBeleza.com.br
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-brand transition">Novidades</Link>
          <Link href="/" className="hover:text-brand transition">Ofertas</Link>
          <Link href="/" className="hover:text-brand transition">Categorias</Link>
        </nav>

        <a
          href="#ofertas"
          className="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition text-sm shadow-md"
        >
          Ver Ofertas
        </a>
      </div>
    </header>
  );
}
