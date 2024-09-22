import { expect, test } from "vitest";
import { toUpper } from "./funciones.ts";

test("No values", () => {
    expect(toUpper("pepe","jose","__%$@")).toEqual(["PEPE","JOSE","__%$@"]);
  });