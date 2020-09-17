const test = require("ava");

const get = require("..");

test("main", (t) => {
	t.is(get([4, 5], "[0]"), 4);
	t.is(get("napo", "[1]"), "a");
	t.is(get({ a: { b: 1 } }, "a.b"), 1);
	t.is(get({ a: { b: 1 } }, "a.c", "blah"), "blah");
});
