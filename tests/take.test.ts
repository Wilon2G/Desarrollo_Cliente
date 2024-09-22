import { expect, test } from "vitest";
import { take } from "../funciones";

test("Some values", () => {
    expect(take(3,"pepe","lo","calongas","")).toEqual(["pep","lo","cal",""]);
  });

  test("No values", () => {
    expect(take(0)).toEqual([]);
  });

  test("Tke cero", () => {
    expect(take(0,"pepe","pedro")).toEqual([]);
  });