const test = require("node:test");
const assert = require("node:assert");

const { add } = require("../Controller/math.js");

test ("2 + 3 skal være 5", () => {
    assert.strictEqual(add(2, 3), 5);
});

