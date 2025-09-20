import Link from "next/link";
import { ShoppingCartIcon, BellIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-[#fff159] sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Achados Beleza" className="h-8 md:h-10" />
          <span className="font-bold text-lg md:text-xl text-gray-900 tracking-tight">
            AchadosBeleza
          </span>
        </Link>

        {/* Barra de busca */}
        <div className="flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Ícones */}
        <div className="flex items-center gap-4">
          <HeartIcon className="h-6 w-6 text-gray-800 cursor-pointer hover:text-gray-600" />
          <BellIcon className="h-6 w-6 text-gray-800 cursor-pointer hover:text-gray-600" />
          <ShoppingCartIcon className="h-6 w-6 text-gray-800 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
}
