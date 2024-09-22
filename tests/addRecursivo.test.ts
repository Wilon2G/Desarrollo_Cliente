import { expect, test } from "vitest";
import { addRecursivo } from "../funciones";

test("Some values", () => {
    expect(addRecursivo(3,4,1)).toBe(8);
  });