import { expect, test } from "vitest";
import { globo } from "../funciones";

//---------------GLOBO--------------------------
test("number values", () => {
    expect(globo(1,3,4,1)).toEqual([2,4,5,2]);
  });

test("string values", () => {
    expect(globo("pepe","pepito","pepazo","")).toEqual([4,6,6,0]);
});

