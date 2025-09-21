"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Produtos" },
    { href: "/admin/users", label: "Usuários" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-64 bg-white shadow-md border-r`}
      >
        <div className="p-4 font-bold text-lg border-b">Admin Panel</div>
        <nav className="flex flex-col p-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded hover:bg-gray-200 ${
                pathname === item.href ? "bg-gray-300 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
          <button
            className="md:hidden px-3 py-1 border rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <h1 className="font-bold">Painel Administrativo</h1>
          <div>
            <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
