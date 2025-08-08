import ProductInfo from "@/components/ProductInfo";
import CheckoutForm from "@/components/CheckoutForm";
import "@/styles/globals.css";

export default function Page() {
  const product = {
    id: 1,
    name: "Curso de Marketing Digital 2025",
    originalPrice: 497.0,
    currentPrice: 297.0,
    producer: "João Silva",
    format: "digital",
    deliveryTime: "imediato",
  };

  return (
    <main className="max-w-md mx-auto p-4">
      <ProductInfo product={product} />
      <CheckoutForm product={product} />
    </main>
  );
}
