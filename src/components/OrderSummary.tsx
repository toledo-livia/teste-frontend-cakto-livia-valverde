interface OrderSummaryProps {
  productName: string;
  productPrice: number;
  paymentMethod: string;
  installments: number;
}

export default function OrderSummary({
  productName,
  productPrice,
  paymentMethod,
  installments,
}: OrderSummaryProps) {
  let fee = 0;
  if (paymentMethod === "card") {
    if (installments === 1) fee = 0.0399;
    else fee = 0.0499 + 0.02 * (installments - 1);
  }
  const feeValue = productPrice * fee;
  const total = productPrice + feeValue;
  const producerReceives = productPrice - feeValue;

  const savings = paymentMethod === "pix" ? feeValue : 0;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-3">
      <h3 className="text-lg font-semibold">Resumo do Pedido</h3>
      <div className="flex justify-between">
        <span>Produto:</span>
        <span>R$ {productPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Taxa Cakto:</span>
        <span>R$ {feeValue.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold border-t pt-2">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-green-500 font-semibold">
        <span>João recebe:</span>
        <span>R$ {producerReceives.toFixed(2)}</span>
      </div>
      {savings > 0 && (
        <p className="text-green-500 text-sm mt-2">
          Você economiza R$ {savings.toFixed(2)} escolhendo PIX!
        </p>
      )}
    </div>
  );
}
