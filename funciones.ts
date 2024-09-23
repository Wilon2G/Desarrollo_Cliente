//------------ADD FUNCION RECURSIVA-----------------------------------
export function addRecursivo(...numbers: number[]): number {
  if (numbers.length == 0) {
    return 0;
  } else {
    const [head, ...tail] = numbers;
    return head + addRecursivo(...tail);
  }
}

//------------ADD FUNCION---------------------------------
export function add(...numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//----------TO UPPER FUNCTION---------------------------
export function toUpper(...palabras: string[]) {
  const result: string[] = [];
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].toUpperCase();
  }
  return result;
}

//----------TO UPPER FUNCTION RECURSIVE---------------------------
export function toUpperRecursive(...palabras: string[]) {
  const result: string[] = [];
  if (palabras.length == 0) {
    return result;
  } else {
    const [head, ...tail] = palabras;
    return result.concat(head.toUpperCase()).concat(toUpperRecursive(...tail));
  }
}

//----------INCREMENTO FUNCTION----------------------------
export function inc(...numeros: number[]) {
  const result: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    result[i] = numeros[i] + 1;
  }
  return result;
}

//-------------INCREMENTO RECURSIVO-------------------------------
//Recibe una lista de números y los incrementa en 1
export function incRecursive(...numeros: number[]) {
  if (numeros.length == 0) {
    return [];
  } else {
    const res: number[] = [];
    const [head, ...tail] = numeros;
    return res.concat(head + 1).concat(incRecursive(...tail));
  }
  return;
}

//----------DECREMENTO FUNCTION----------------------------
export function dec(...numeros: number[]) {
  const result: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    result[i] = numeros[i] - 1;
  }
  return result;
}

//--------------CONTAR LENGHT VARIAS PALABRAS----------------------
export function variasPalabrasLengh(...palabras: string[]) {
  const result: number[] = [];
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].length;
  }
  return result;
}

//----------------FUNCION TAKE------------------------
export function take(num: number , ...palabras: string[]) {
  const result: string[] = [];
  if (num <= 0) {
    return result;
  }
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].slice(0, num);
  }
  return result;
}

//--------------FUNCION INCREMENTO + LENGHT--------------------------
export function globo(datos: string[] | number[]) {
  const result: number[] = [];
  for (let i = 0; i < datos.length; i++){
    if(typeof(datos[0])=="string"){
      result[i] = datos[i].length;
    }
    else{
      result[i] = datos[i] + 1;
    }
    
  }
  return result;
}

export function map(f: (x:any) => any, xs: any){
  const ys: any = [];
  for (let i = 0; i < ys.length; i++) {
    ys[i] = f(xs[i]);
  }
  return ys;

}
