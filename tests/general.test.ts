import { expect, test } from "vitest";
import { map,odds,integers,filtrar, curry, compose, composen } from "../funciones";

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