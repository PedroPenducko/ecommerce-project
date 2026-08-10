import {describe, expect, it} from "vitest";
import { formatMoney } from "./money";
describe("formatMoney", ()=>{
it("formats 1999 cents to $19.99", ()=>{
  expect(formatMoney(1999)).toBe("$19.99");
})
it("adds $ sign", ()=>{
  expect(formatMoney(100)).toBe("$1.00")
})
it("adds 2 decimals", ()=>{
  expect(formatMoney(8888)).toBe("$88.88")
})
})
