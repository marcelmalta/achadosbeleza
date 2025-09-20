import { CreditCardIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Sessão de confiança */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center text-gray-700 px-6">
          <div>
            <CreditCardIcon className="mx-auto h-12 w-12 text-gray-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Escolha como pagar</h4>
            <p className="text-sm">
              Com Mercado Pago, você paga com cartão, boleto ou Pix.  
              Também pode parcelar em até 12x sem cartão com a Linha de Crédito.
            </p>
          </div>

          <div>
            <TruckIcon className="mx-auto h-12 w-12 text-gray-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Frete grátis a partir de R$ 19</h4>
            <p className="text-sm">
              Ao se cadastrar no Mercado Livre, você tem frete grátis em milhares de produtos.
            </p>
          </div>

          <div>
            <ShieldCheckIcon className="mx-auto h-12 w-12 text-gray-600 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Segurança, do início ao fim</h4>
            <p className="text-sm">
              Não gostou do que comprou? Devolva!  
              No Mercado Livre você está sempre protegido.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé institucional */}
      <div className="bg-gray-100 text-gray-600 text-xs text-center py-6 px-6">
        <nav className="flex flex-wrap justify-center gap-4 mb-2">
          <a href="#" className="hover:underline">Trabalhe conosco</a>
          <a href="#" className="hover:underline">Termos e condições</a>
          <a href="#" className="hover:underline">Promoções</a>
          <a href="#" className="hover:underline">Privacidade</a>
          <a href="#" className="hover:underline">Acessibilidade</a>
          <a href="#" className="hover:underline">Contato</a>
        </nav>
        <p>© {new Date().getFullYear()} AchadosBeleza.com.br</p>
      </div>
    </footer>
  );
}
