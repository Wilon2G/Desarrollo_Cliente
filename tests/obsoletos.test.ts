import { expect, test } from "vitest";
import {
  toUpperObsoleta,
  addObsolete,
  incObsoleto,
  variasPalabrasLenghObsoleto,
  takeObsoleto,
  /*globoObsoleto,*/
} from "../funciones.ts";

//===========================================================================TO UPPER OBSOLETO=================================================
test("No values", () => {
  expect(toUpperObsoleta("pepe", "jose", "__%$@")).toEqual([
    "PEPE",
    "JOSE",
    "__%$@",
  ]);
});

//==============================================================================ADD OBSOLETO===============================================
test("No values", () => {
  expect(addObsolete()).toBe(0);
});

test("One value", () => {
  expect(addObsolete(1)).toBe(1);
});

test("One neg value", () => {
  expect(addObsolete(-7)).toBe(-7);
});

test("Multi value", () => {
  expect(addObsolete(2, 5, 0, 1)).toBe(8);
});

test("Multi neg value", () => {
  expect(addObsolete(-7, 5, -2, 1)).toBe(-3);
});

/*
    for(let i=0; i<1000; i++){
      let v1=i-500;
      let v2=i+800;
      test("Loop values", () => {
          expect(addObsolete(i,v1,v2)).toBe(i+v1+v2);
        });
    }
        */

//===============================================================================INC OBSOLETO========================
test("No values", () => {
  expect(incObsoleto()).toEqual([]);
});

test("Values neg y no neg", () => {
  expect(incObsoleto(12, -4, 0)).toEqual([13, -3, 1]);
});

//===================================================================================LENGHT OBOSOLETO=========================
test("Contar cadenas", () => {
  expect(variasPalabrasLenghObsoleto("pepe", "jose", "__%$@")).toEqual([
    4, 4, 5,
  ]);
});

//======================================================================================TAKE OBSOLETO===========================
test("Some values", () => {
  expect(takeObsoleto(3, "pepe", "lo", "calongas", "")).toEqual([
    "pep",
    "lo",
    "cal",
    "",
  ]);
});

test("No values", () => {
  expect(takeObsoleto(0)).toEqual([]);
});

test("Tke cero", () => {
  expect(takeObsoleto(0, "pepe", "pedro")).toEqual([]);
});

//================================================================================GLOBO OBSOLETO==========================
/*
test("number values", () => {
  expect(globoObsoleto(1, 3, 4, 1)).toEqual([2, 4, 5, 2]);
});

test("string values", () => {
  expect(globoObsoleto("pepe", "pepito", "pepazo", "")).toEqual([4, 6, 6, 0]);
});
*/