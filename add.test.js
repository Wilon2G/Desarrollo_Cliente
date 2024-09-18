import { expect, test } from "vitest";
import { add } from "./intro2";

test("No values", () => {
  expect(add()).toBe(0);
});

test("One value", () => {
    expect(add(1)).toBe(1);
  });

  test("One neg value", () => {
    expect(add(-7)).toBe(-7);
  });

  test("Multi value", () => {
    expect(add(2,5,0,1)).toBe(8);
  });

  test("Multi neg value", () => {
    expect(add(-7,5,-2,1)).toBe(-3);
  });

  for(let i=0; i<1000; i++){
    let v1=i-500;
    let v2=i+800;
    test("Loop values", () => {
        expect(add(i,v1,v2)).toBe(i+v1+v2);
      });
  }