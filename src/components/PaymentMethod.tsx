"use client";

interface PaymentMethodProps {
  metodo: "pix" | "cartao";
  setMetodo: (metodo: "pix" | "cartao") => void;
}

export default function PaymentMethod({
  metodo,
  setMetodo,
}: PaymentMethodProps) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Método de pagamento</label>
      <div className="flex gap-4">
        <label
          className={`flex items-center gap-2 cursor-pointer rounded-lg border p-3 ${
            metodo === "pix"
              ? "border-green-500 bg-green-100"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="metodo"
            value="pix"
            checked={metodo === "pix"}
            onChange={() => setMetodo("pix")}
            className="cursor-pointer"
          />
          <span className="font-semibold">PIX</span>
          <span className="ml-1 text-xs bg-green-500 text-white rounded px-1.5 py-0.5">
            Taxa 0% 🔥
          </span>
        </label>

        <label
          className={`flex items-center gap-2 cursor-pointer rounded-lg border p-3 ${
            metodo === "cartao"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="metodo"
            value="cartao"
            checked={metodo === "cartao"}
            onChange={() => setMetodo("cartao")}
            className="cursor-pointer"
          />
          Cartão
        </label>
      </div>
    </div>
  );
}
