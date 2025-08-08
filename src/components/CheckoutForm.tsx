"use client";

import React, { useState } from "react";
import { maskCPF, validateCPF } from "@/lib/validateCPF";
import PaymentMethod from './PaymentMethod';
import LoadingButton from "@/components/LoadingButton";
import InstallmentsSelect from './InstallmentsSelect';
import OrderSummary from "./OrderSummary";

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cpfError) return;

    await new Promise((r) => setTimeout(r, 2000));

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

      <PaymentMethod
        metodo={paymentMethod}
        setMetodo={setPaymentMethod}
      />
      {paymentMethod === "card" && (
        <InstallmentsSelect
          parcelas={installments}
          setParcelas={setInstallments}
        />
      )}

      <OrderSummary
        productName={product.name}
        productPrice={product.currentPrice}
        paymentMethod={paymentMethod}
        installments={installments}
      />

       <LoadingButton onClick={handleSubmit}>
        Finalizar Compra 🚀
      </LoadingButton>
    </form>
  );
}
