"use client";

import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import { maskCPF, validateCPF } from "@/lib/validateCPF";

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: string;
  deliveryTime: string;
}

interface CheckoutFormProps {
  product: Product;
}

export default function CheckoutForm({ product }: CheckoutFormProps) {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [installments, setInstallments] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskCPF(e.target.value);
    setCpf(masked);

    if (masked.length === 14) {
      if (!validateCPF(masked)) setCpfError("CPF inválido");
      else setCpfError("");
    } else {
      setCpfError("");
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as "pix" | "card");
    if (e.target.value === "pix") {
      setInstallments(1);
    }
  };

  const handleInstallmentsChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInstallments(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cpfError) return;

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsLoading(false);

    alert("Compra finalizada com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6 max-w-md mx-auto"
      noValidate
    >
      <h2 className="text-xl font-semibold text-center mb-4">Dados Pessoais</h2>

      <div>
        <label
          htmlFor="email"
          className="block font-semibold mb-1 text-gray-900 dark:text-gray-100"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label
          htmlFor="cpf"
          className="block font-semibold mb-1 mt-4 text-gray-900 dark:text-gray-100"
        >
          CPF
        </label>
        <input
          id="cpf"
          type="text"
          placeholder="CPF"
          aria-label="CPF"
          value={cpf}
          onChange={handleCPFChange}
          required
          maxLength={14}
          className={`w-full p-3 rounded-lg border ${
            cpfError ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition`}
        />
        {cpfError && <p className="text-red-500 text-sm mt-1">{cpfError}</p>}
      </div>

      <fieldset className="space-y-2 mt-6">
        <legend className="font-semibold text-gray-900 dark:text-gray-100">
          Método de Pagamento
        </legend>

        <label className="flex items-center space-x-2 text-gray-900 dark:text-gray-100">
          <input
            type="radio"
            name="paymentMethod"
            value="pix"
            checked={paymentMethod === "pix"}
            onChange={handlePaymentChange}
            className="accent-blue-600"
          />
          <span>PIX (Taxa 0% 🔥)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-900 dark:text-gray-100">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={handlePaymentChange}
            className="accent-blue-600"
          />
          <span>Cartão</span>
        </label>

        {paymentMethod === "card" && (
          <div className="mt-2">
            <label htmlFor="installments" className="block font-semibold mb-1">
              Parcelas
            </label>
            <select
              id="installments"
              name="parcelas"
              value={installments}
              onChange={handleInstallmentsChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}x
                </option>
              ))}
            </select>
          </div>
        )}
      </fieldset>

      <OrderSummary
        productName={product.name}
        productPrice={product.currentPrice}
        paymentMethod={paymentMethod}
        installments={installments}
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-lg shadow transition text-white ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Processando..." : "Finalizar Compra 🚀"}
      </button>
    </form>
  );
}
