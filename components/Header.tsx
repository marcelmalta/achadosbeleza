import Link from "next/link";
import { HeartIcon, BellIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-[#fff159] sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="AchadosBeleza Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-semibold text-gray-900 tracking-tight">
            AchadosBeleza
          </span>
        </Link>

        {/* Ícones à direita */}
        <div className="flex items-center gap-4">
          <HeartIcon className="w-6 h-6 text-gray-800 cursor-pointer" />
          <BellIcon className="w-6 h-6 text-gray-800 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
