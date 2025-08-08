export interface FeeResult {
  taxa: number;
  valorLiquido: number;
  economiaPIX?: number;
}

export function calculateFees(valor: number, metodo: "pix" | "cartao", parcelas: number): FeeResult {
  let taxaPercent = 0;

  if (metodo === "pix") {
    taxaPercent = 0;
  } else {
    if (parcelas === 1) {
      taxaPercent = 3.99;
    } else {
      taxaPercent = 4.99 + (parcelas - 1) * 2;
    }
  }

  const taxa = Number(((valor * taxaPercent) / 100).toFixed(2));
  const valorLiquido = Number((valor - taxa).toFixed(2));

  const economiaPIX = metodo === "pix" ? Number(((valor * 3.99) / 100).toFixed(2)) : undefined;

  return { taxa, valorLiquido, economiaPIX };
}
