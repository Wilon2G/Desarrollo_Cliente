import { expect, test } from "vitest";
import { addRecursivo, toUpperRecursive, incRecursive,mapRecursivo } from "../funciones";

//=======================================================================================INCREMENTO=====
test("Some values", () => {
  expect(incRecursive(3, 4, 1)).toEqual([4, 5, 2]);
});

//=======================================================================================ADD=====
test("Some values", () => {
  expect(addRecursivo(3, 4, 1)).toBe(8);
});

//=======================================================================================TO UPPER=====
test("Some values", () => {
  expect(toUpperRecursive("pepe", "Carlos", "95cm")).toEqual([
    "PEPE",
    "CARLOS",
    "95CM",
  ]);
});

//======================================================================================MAP RECURSIVO=====
test("Some values", () => {
    expect(
        mapRecursivo(
        function (words: string) {
          return words.toUpperCase();},
        ["palabras", "pepe", "carlos"]
      )
    ).toEqual(["PALABRAS", "PEPE", "CARLOS"]);
  });