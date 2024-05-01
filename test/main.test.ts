import { main } from "../src/main.js"
import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

describe('Main', async () => {
  it('Fails', async () => {
    await main()
    equal(1, 1)
  });
});
