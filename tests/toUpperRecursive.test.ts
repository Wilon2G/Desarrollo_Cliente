import { expect, test } from "vitest";
import { toUpperRecursive } from "../funciones";

test("Some values", () => {
    expect(toUpperRecursive("pepe","Carlos","95cm")).toEqual(["PEPE","CARLOS","95CM"]);
  });