import { expect, test } from "vitest";
import { factorial,reduceIni,initialsRed,initials,map,odds,integers,filtrar, curry, compose, composen } from "../funciones";

//========================================================MAP FUNCTION===================
test("Some values", () => {
  expect(
    map(
      function (words: string) {
        return words.toUpperCase();},
      ["palabras", "pepe", "carlos"]
    )
  ).toEqual(["PALABRAS", "PEPE", "CARLOS"]);
});

//===========================================================ODDS FUNCTION=================
test("odds", () => {
    expect(odds(3,2,4,5,2,2)).toEqual([3,5]);
  });


  test("odds", () => {
    expect(integers("hola","55","ho1a","33naranjas")).toEqual(["55","33"]);
  });


  
  test("Filtro", () => {
    expect(filtrar(function (x:number){
        return x % 2 != 0;
    }, [3,3,2,1,4,5]    )
).toEqual([3,3,1,5]);
  });


  test("Curry", () => {
    function sum(x:number,y:number){
      return x+y;
    }

    expect(curry(sum)(5)(6)).toEqual(11);
  });


  test("Compose", () => {
    function inc(x:number){
      return x+1;
    }
    function double(x:number){
      return x*2;
    }
    const incThenDouble =compose(double,inc);

    expect(incThenDouble(8)).toEqual(18);
  });

  test("Compose map filter", () => {
    function inc(x:number){
      return x+1;
    }
    function isEven(x:number){
      return x%2==0;
    }
    const xs=[1,3,5,1];
    const curryMap=curry(map);
    const curryFilter=curry(filtrar);

    const incThenEven =compose(curryFilter(isEven),curryMap(inc));

    expect(incThenEven(xs)).toEqual([2,4,6,2]);
  });


  test("Composen", () => {
    function inc(x:number){
      return x+1;
    }
    function double(x:number){
      return x*2;
    }
    function plusTwo(x:number){
      return x+2;
    }
    

    expect(composen(double,inc,plusTwo)(8)).toEqual(22); //(8*2)+1+2
  });

  test("initials", () => {
    expect(initials("Hola","ho1a","Pepe","crlota")).toEqual("HP");
  });

  test("initialsRed", () => {
    expect(initialsRed("Hola","ho1a","Pepe","crlota")).toEqual("HP");
  });


//===========================================================Sacar el valor máximo de un array con reduce y reduceRight====================
  test("ReduceRight max value", () => {
    expect([2,5,7,1,2,1,5,9,2,3,1,4].reduceRight((acc:number,n:number)=>acc<n?acc=n:acc)).toEqual(9);
  });

  test("Reduce max value", () => {
    expect([2,5,7,1,2,1,5,9,2,3,1,4].reduce((acc:number,n:number)=>acc<n?acc=n:acc)).toEqual(9);
  });



//===========================================================Sacar el ÍNDICE DEL valor máximo de un array con reduce y reduceRight====================
  test("Reduce max value index", () => {
    expect([2,5,7,1,2,1,5,9,2,3,1,4].reduce((acc:number,n:number,index:number,arr:number[])=>{
    return n>arr[acc]?index:acc;
    },0)).toEqual(7);
  });

  test("ReduceRight max value index", () => {
    expect([2,5,7,1,2,1,5,9,2,3,1,4].reduceRight((acc:number,n:number,index:number,arr:number[])=>{
    return n>arr[acc]?index:acc;
    },0)).toEqual(7);
  });

  

//===========================================================Reduce con valor inicial opcional===============================
  test("Reduce con ini opcional sin ini", () => {
    expect(reduceIni((acc:number,n:number)=>acc<n?acc=n:acc,[2,5,7,1,2,1,5,9,2,3,1,4])).toEqual(9);
  });

  test("Reduce con ini opcional con ini", () => {
    expect(reduceIni((acc:number,n:number)=>acc<n?acc=n:acc,[2,5,7,1,2,1,5,9,2,3,1,4],5)).toEqual(9);
  });



//=============================================================FUNCION FACTORIAL RECURSIVA====================

test("factorial", () => {
  expect(factorial(8)).toEqual(40320);
});







