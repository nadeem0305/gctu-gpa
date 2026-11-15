import { test } from "node:test";
import assert from "node:assert/strict";
import { gpa, classOf } from "./gpa.js";

test("weights by credits", () => {
  const r = gpa([{ credits: 3, grade: "A" }, { credits: 1, grade: "C" }]);
  assert.equal(r.gpa, 3.5);
  assert.equal(r.credits, 4);
});

test("ignores incomplete rows", () => {
  assert.deepEqual(gpa([{ credits: "", grade: "A" }, { credits: 3, grade: "" }]), { gpa: null, credits: 0 });
  assert.equal(gpa([{ credits: "3", grade: "B" }, { credits: -2, grade: "A" }]).gpa, 3);
});

test("class boundaries", () => {
  assert.equal(classOf(3.6), "First Class");
  assert.equal(classOf(3.59), "Second Class Upper");
  assert.equal(classOf(2.5), "Second Class Lower");
  assert.equal(classOf(0.4), "Fail");
  assert.equal(classOf(null), "");
});
