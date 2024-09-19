//----------TO UPPER FUNCTION---------------------------
export function toUpper(...palabras: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].toUpperCase();
  }
  return result;
}

//----------INCREMENTO FUNCTION----------------------------
export function inc(...numeros: number[]): number[] {
  const result: number[]=[];
  for (let i = 0; i < numeros.length; i++) {
    result[i]=numeros[i]+1;
  }
  return result;
}
