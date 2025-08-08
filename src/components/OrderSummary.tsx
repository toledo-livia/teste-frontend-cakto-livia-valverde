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
    <div
      className="
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-neon-green/30
        p-6 rounded-2xl shadow-lg max-w-md mx-auto space-y-4
      "
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Resumo do Pedido
      </h3>

      <div className="flex justify-between text-gray-800 dark:text-gray-200">
        <span>Produto:</span>
        <span>R$ {productPrice.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-gray-800 dark:text-gray-200">
        <span>Taxa Cakto:</span>
        <span>R$ {feeValue.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-semibold border-t border-gray-300 dark:border-gray-700 pt-2 text-gray-900 dark:text-white">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-neon-green font-semibold drop-shadow-neon-glow">
        <span>João recebe:</span>
        <span>R$ {producerReceives.toFixed(2)}</span>
      </div>

      {savings > 0 && (
        <p className="text-neon-green text-sm mt-2 drop-shadow-neon-glow">
          Você economiza R$ {savings.toFixed(2)} escolhendo PIX!
        </p>
      )}
    </div>
  );
}
