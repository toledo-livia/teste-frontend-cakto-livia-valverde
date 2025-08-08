"use client";

interface InstallmentsSelectProps {
  parcelas: number;
  setParcelas: (num: number) => void;
}

export default function InstallmentsSelect({
  parcelas,
  setParcelas,
}: InstallmentsSelectProps) {
  const maxParcelas = 12;

  return (
    <div>
      <label htmlFor="parcelas" className="block font-semibold mb-1">
        Parcelas
      </label>
      <select
        id="parcelas"
        name="parcelas"
        value={parcelas}
        onChange={(e) => setParcelas(Number(e.target.value))}
        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {Array.from({ length: maxParcelas }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}x
          </option>
        ))}
      </select>
    </div>
  );
}
