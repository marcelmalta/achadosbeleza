import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // normal, semibold e bold
});

export const metadata = {
  title: "AchadosBeleza.com.br",
  description: "Ofertas e novidades em cosméticos, perfumes e cuidados pessoais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
