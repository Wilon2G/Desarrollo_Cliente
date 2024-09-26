import { expect, test } from "vitest";
import { map,odds,integers,filtrar, curry } from "../funciones";

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