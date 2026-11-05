import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "./greeting.js";

test("greeting() defaults to Hello World", () => {
  assert.equal(greeting(), "Hello World");
});

test("greeting(name) greets the given name", () => {
  assert.equal(greeting("Agent"), "Hello Agent");
});
