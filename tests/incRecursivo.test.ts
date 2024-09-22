import { expect, test } from "vitest";
import { incRecursive } from "../funciones";

test("Some values", () => {
    expect(incRecursive(3,4,1)).toEqual([4,5,2]);
  });