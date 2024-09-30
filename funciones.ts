//===========================================================================================================
//===============================================================================================OBSOLETAS===
//===========================================================================================================

//--------------------------------------------------------------ADD FUNCION OBSOLETA---------------------------------
export function addObsolete(...numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

//-----------------------------------------------------------TO UPPER FUNCTION OBSOLETA---------------------------
export function toUpperObsoleta(...palabras: string[]) {
  const result: string[] = [];
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].toUpperCase();
  }
  return result;
}

//------------------------------------------------------------INCREMENTO FUNCTION----------------------------
export function incObsoleto(...numeros: number[]) {
  const result: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    result[i] = numeros[i] + 1;
  }
  return result;
}

//----------------------------------------------------------DECREMENTO FUNCTION OBSOLETO----------------------------
export function dec(...numeros: number[]) {
  const result: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    result[i] = numeros[i] - 1;
  }
  return result;
}

//---------------------------------------------------------------CONTAR LENGHT VARIAS PALABRAS OBSOLETO----------------------
export function variasPalabrasLenghObsoleto(...palabras: string[]) {
  const result: number[] = [];
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].length;
  }
  return result;
}

//--------------------------------------------------------------------FUNCION TAKE OBSOLETO------------------------
export function takeObsoleto(num: number, ...palabras: string[]) {
  const result: string[] = [];
  if (num <= 0) {
    return result;
  }
  for (let i = 0; i < palabras.length; i++) {
    result[i] = palabras[i].slice(0,num);
  }
  return result;
}


//-----------------------------------------------------------FUNCIÓN TAKE MAP-----------------------------------------------------------

export function takeMap(num: number, ...palabras: string[]) {
return map((pal:string) => pal.slice(0,num),palabras );
}

//--------------------------------------------------------FUNCION INCREMENTO + LENGHT INTENTO DE MAP OBSOLETO--------------------------
/*
export function globoObsoleto(...datos: string[] | number[]) {
  const result: number[] = [];
  for (let i = 0; i < datos.length; i++) {
    if (typeof datos[0] == "string") {
      result[i] = datos[i].length;
    } else {
      result[i] = datos[i] + 1;
    }
  }
  return result;
}
  */

//============================================================================================================
//===============================================================================================RECURSIVAS===
//============================================================================================================

//------------ADD FUNCION RECURSIVA-----------------------------------
export function addRecursivo(...numbers: number[]): number {
  if (numbers.length == 0) {
    return 0;
  } else {
    const [head, ...tail] = numbers;
    return head + addRecursivo(...tail);
  }
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
}



//===============================================================================================================
//===============================================================================================FUNCIONES MAP===
//===============================================================================================================

//--------------------------------------------------------FUNCION MAP---------------------------------------
export function map<X, Y>(f: (x: X) => Y, xs: X[]): Y[] {
  const ys: Y[] = [];
  for (let i = 0; i < xs.length; i++) {
    ys[i] = f(xs[i]);
  }
  return ys;
}

//--------------------------------------------------------------------FUNCION MAP RECURSIVO-----------------------
export function mapRecursivo<X, Y>(f: (x: X) => Y, xs: X[]): Y[] {
  if (xs.length == 0) {
    return [];
  } else {
    const ys: Y[] = [];
    const [head, ...tail] = xs;
    return ys.concat(f(head)).concat(mapRecursivo(f, tail));
  }
}

//===============================================================================================================
//===============================================================================================FUNCIONES=======
//===============================================================================================================

//---------------------------------------------------------FUNCIÓN ODDS-----------------------------------------
export function odds(...nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

//---------------------------------------------------------FUNCIÓN INTEGERS----------------------------------
export function integers(...datos: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < datos.length; i++) {
    if (!isNaN(parseInt(datos[i]))) {
      result.push(parseInt(datos[i]).toString());
    }
  }

  return result;
}

//--------------------------------------------------------FUNCIÓN FILTRO + FILTRO ODD------------------------------------------
export function filtroOdds(x:number):boolean{
  return x % 2 != 0;
}

export function filtrar<X>(f: (x: X) => boolean, arr: X[]): X[]{
  const result: X[] = [];
for (let i = 0; i < arr.length; i++) {
  if(f(arr[i])){
    result.push(arr[i]);
  }
}
return result;
}


//-----------------------------------------------------------FUNCIÓN TAKE MAP CURRY-----------------------------------------------------------
export const slicing= num => pal => pal.slice(0,num);

export function takeMapCurry (num:number,pals:string[]){
  return map(slicing(num),pals);
} 



//-----------FUNCIÓN CURRY--------------------------------------
//Dada una función de dos parámetros devuelve la función curry

export function curry<X,Y,Z>(f:(x: X, y: Y) => Z): (x:X) => (y:Y) => Z{
  return function(x:X){
    return function(y:Y){
      return f(x,y);
    }
  }
}

//--------------------------FUNCIÓN UNCURRY----------------------------------
export function unCurry<X,Y,Z>(f:(x: X, y: Y) => Z): (x:X) => (y:Y) => Z{
  return function(x:X){
    return function(y:Y){
      return f(x,y);
    }
  }
}



//-------------------------FUNCIÓN COMPOSE---------------------------
export function compose<X,Y,Z>(f:(y:Y) => Z, g:(x:X)=>Y):(x:X) =>Z{
  return function (x:X){
    return f(g(x));
  };
}

//----------------------------------------------------------------COMPOSE PARA N FUNCIONES------------------
export function composen<X,Y>(...fs:Array<(x:X)=>Y>):(x:X) =>Y{
if (fs.length==1) {
  return  fs[0];
}
  
  const last=fs[fs.length-1];
  const rest=fs.slice(0,fs.length-1);
  return function(x:X):Y {
    
    return composen(...rest)(last(x));
  };
}


//---------------------------------------------------------------------FUNCION PIPE---------------------------
export function pipe<X,Y,Z>(f:(y:Y) => X, g:(x:X)=>Z):(y:Y)=>Z{
  return function (y:Y){
    return g(f(y));
  }
}

//---------------------------------------------------------------------FUNCION INITIALS---------------------------
export function initials(...palabras:string[]):string{
  return filtrar((s:string)=>s==s.slice(0,1).toUpperCase(),map((s:string) => s.slice(0,1),palabras)).join("")
}




//--------------------------------------------------------FUNCION REDUCE--------------------------------------------------------
export function reduce<X,R>(f:(acc:R, x:X)=>R ,init:R,xs:X[]):R{
  let res=init;
  for (let i= 0; i < xs.length; i++) {
    res=f(res,xs[i]);
  }
  return res;
}



//---------------------------------------------------------------FUNCIÓN SACAR INICIALES CON REDUCE--------------------------
export function initialsRed(...palabras:string[]):string{
  return reduce((acc:string,s:string)=>s.charAt(0).match('[A-Z]')?acc+s.slice(0,1):acc+"","",palabras)
}

//------------------------------------------FUNCIÓN REDUCE CON VALOR INICIAL OPCIONAL---------------------------------------------------------
export function reduceIni<X,R>(f:(acc:R, x:X)=>R ,xs:X[],init?:R):R{
  let res;
  if (xs.length==0) {
    throw new Error("Array vacío");
    
  }
  if (init==undefined) {
    res=xs[0];
  }
  else{
    res=init;
  }
  for (let i= 0; i < xs.length; i++) {
    res=f(res,xs[i]);
  }
  return res;
}

//------------------------------------------FUNCIÓN REDUCE CON VALOR INICIAL OPCIONAL E INDICE---------------------------------------------------------
export function reduceIniIndex<X,R>(f:(acc:R, x:X)=>R ,xs:X[],index:number,init?:R):R{
  let res;
  if (xs.length==0) {
    throw new Error("Array vacío");
    
  }
  if (init==undefined) {
    res=xs[index];
  }
  else{
    res=init;
  }
  for (let i= 0; i < xs.length; i++) {
    res=f(res,xs[i]);
  }
  return res;
}


//--------------------------------------------------------FUNCION REDUCE RECURSIVO--------------------------------------------------------
export function reduceRecursive<X,R>(f:(acc:R, x:X)=>R ,init:R,xs:X[]):R{
  if (xs.length==0) {
    return init;
  }
  let res=init;
  const [head, ...tail] = xs;
  res=f(res,head);
  return reduceRecursive(f,res,tail);
}






























