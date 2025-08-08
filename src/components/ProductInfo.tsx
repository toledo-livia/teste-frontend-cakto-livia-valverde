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
    <div className="mb-4">
      <h1 className="text-lg font-bold">{product.name}</h1>
      <p className="line-through text-gray-500">
        De R$ {product.originalPrice.toFixed(2)}
      </p>
      <p className="text-2xl font-bold text-green-600">
        Por R$ {product.currentPrice.toFixed(2)}
      </p>
    </div>
  );
}
