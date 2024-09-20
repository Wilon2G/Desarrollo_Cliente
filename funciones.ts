//------------ADD FUNCION RECURSIVA-----------------------------------
export function addRecursivo(...numbers: number[]):number{
  if (numbers.length==0) {
    return 0;
  }
  else{
    const [head,...tail]=numbers;
    return head+add(tail);
  }
}

//------------ADD FUNCION---------------------------------
export function add(...numbers: number[]):number{
  let sum=0;
  for (let i=0; i<numbers.length; i++){
      sum+=numbers[i];
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

//----------INCREMENTO FUNCTION----------------------------
export function inc(...numeros: number[]) {
  const result: number[]=[];
  for (let i = 0; i < numeros.length; i++) {
    result[i]=numeros[i]+1;
  }
  return result;
}

//----------INCREMENTO FUNCTION RECURSIVA----------------------------
export function incRecursivo(...numeros: number[]) {
  const result: number[]=[];


  
  return [];
}


//----------DECREMENTO FUNCTION----------------------------
export function dec(...numeros: number[]) {
  const result: number[]=[];
  for (let i = 0; i < numeros.length; i++) {
    result[i]=numeros[i]-1;
  }
  return result;
}

//--------------CONTAR LENGHT VARIAS PALABRAS----------------------
export function variasPalabrasLengh(...palabras: string[]) {
  const result: number[]=[];
  for (let i = 0; i < palabras.length; i++) {
    result[i]=palabras[i].length;
  }
  return result;
}
