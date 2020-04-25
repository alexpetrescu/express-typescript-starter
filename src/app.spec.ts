import app from "./app";
import { describe, it } from "mocha";
import { assert } from "chai";

describe("app.spec.ts", () => {
	it("should exist app", () => {
		assert.isNotNull(app);
	});
});
