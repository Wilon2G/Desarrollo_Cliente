import { expect, test } from "vitest";
import { variasPalabrasLengh } from "./funciones.ts";

test("Contar cadenas", () => {
    expect(variasPalabrasLengh("pepe","jose","__%$@")).toEqual([4,4,5]);
  });