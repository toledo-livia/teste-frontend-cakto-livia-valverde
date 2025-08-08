"use client";

interface PaymentMethodProps {
  metodo: "pix" | "card";
  setMetodo: (metodo: "pix" | "card") => void;
}

export default function PaymentMethod({
  metodo,
  setMetodo,
}: PaymentMethodProps) {
  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
        Método de pagamento
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <label
          className={`flex items-center gap-2 cursor-pointer rounded-xl border-2 p-4 transition-all ${
            metodo === "pix"
              ? "border-neon-green bg-neon-green/10 text-neon-green"
              : "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          }`}
        >
          <input
            type="radio"
            name="metodo"
            value="pix"
            checked={metodo === "pix"}
            onChange={() => setMetodo("pix")}
            className="accent-neon-green"
          />
          <span className="font-semibold">PIX</span>
          <span className="ml-1 text-xs bg-neon-green text-black rounded px-2 py-0.5">
            Taxa 0% 🔥
          </span>
        </label>

        <label
          className={`flex items-center gap-2 cursor-pointer rounded-xl border-2 p-4 transition-all ${
            metodo === "card"
              ? "border-blue-500 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              : "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          }`}
        >
          <input
            type="radio"
            name="metodo"
            value="card"
            checked={metodo === "card"}
            onChange={() => setMetodo("card")}
            className="accent-blue-500"
          />
          <span className="font-semibold">Cartão</span>
        </label>
      </div>
    </div>
  );
}
