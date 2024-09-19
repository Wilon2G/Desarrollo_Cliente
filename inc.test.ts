import { expect, test } from "vitest";
import { inc } from "./funciones";

test("No values", () => {
    expect(inc()).toEqual([]);
  });

test("Values neg y no neg", () => {
    expect(inc(12,-4,0)).toEqual([13,-3,1]);
  });