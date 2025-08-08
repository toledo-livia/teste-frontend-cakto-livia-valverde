import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "@/components/CheckoutForm";

const product = {
  id: 1,
  name: "Curso de Marketing Digital 2025",
  originalPrice: 497.0,
  currentPrice: 297.0,
  producer: "João Silva",
  format: "digital",
  deliveryTime: "imediato",
};

describe("CheckoutForm", () => {
  it("renderiza formulário com campos e resumo", () => {
    render(<CheckoutForm product={product} />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByText(/Finalizar Compra/i)).toBeInTheDocument();
  });

  it("valida CPF inválido", () => {
    render(<CheckoutForm product={product} />);
    const inputCpf = screen.getByLabelText(/CPF/i);

    fireEvent.change(inputCpf, { target: { value: "111.111.111-11" } });
    expect(screen.getByText(/CPF inválido/i)).toBeInTheDocument();
  });
});
