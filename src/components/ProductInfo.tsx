interface Product {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: string;
  deliveryTime: string;
}

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  return (
    <div
      className="
        mb-6 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-neon-green/30 
        p-5 rounded-xl shadow
        transition-transform duration-300 ease-in-out
        hover:scale-[1.02]
        hover:shadow-lg
        dark:hover:shadow-neon-glow
        cursor-pointer
        dark:animate-neon-pulse
      "
    >
      <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
        {product.name}
      </h1>

      <p className="line-through text-gray-500 dark:text-gray-400">
        De R$ {product.originalPrice.toFixed(2)}
      </p>

      <p className="text-3xl font-bold text-green-600 dark:text-neon-green mt-1">
        Por R$ {product.currentPrice.toFixed(2)}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
        Entrega: {product.deliveryTime} • Formato: {product.format}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">
        Por: {product.producer}
      </p>
    </div>
  );
}
