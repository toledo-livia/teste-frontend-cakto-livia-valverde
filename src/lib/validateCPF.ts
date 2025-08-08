export function maskCPF(value: string): string {
  const nums = value.replace(/\D/g, "");
  const part1 = nums.substring(0, 3);
  const part2 = nums.substring(3, 6);
  const part3 = nums.substring(6, 9);
  const part4 = nums.substring(9, 11);
  if (nums.length <= 3) return part1;
  if (nums.length <= 6) return `${part1}.${part2}`;
  if (nums.length <= 9) return `${part1}.${part2}.${part3}`;
  return `${part1}.${part2}.${part3}-${part4}`;
}

export function validateCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (cleanCPF.length !== 11 || /^(\d)\1+$/.test(cleanCPF)) {
    return false;
  }

  const calcDigit = (cpfStr: string, factor: number) => {
    let total = 0;
    for (let i = 0; i < factor - 1; i++) {
      total += parseInt(cpfStr.charAt(i)) * (factor - i);
    }
    const rest = (total * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const digit1 = calcDigit(cleanCPF, 10);
  const digit2 = calcDigit(cleanCPF, 11);

  return (
    digit1 === parseInt(cleanCPF.charAt(9)) &&
    digit2 === parseInt(cleanCPF.charAt(10))
  );
}
