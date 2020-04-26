import { AppVariable, AppDefault } from "./app.constant";
import { describe, it } from "mocha";
import { assert } from "chai";

describe("app.constant", () => {
	it("should define all app variables", () => {
		assert.isNotNull(AppVariable.NODE_PORT);
		assert.isNotNull(AppVariable.NODE_ENV);
		assert.isNotNull(AppVariable.KUBE_CLUSTER_CONTEXT_NAME);
		assert.isNotNull(AppVariable.KUBE_CLUSTER_NAME);
		assert.isNotNull(AppVariable.KUBE_CLUSTER_PASSWORD);
		assert.isNotNull(AppVariable.KUBE_CLUSTER_SERVER);
		assert.isNotNull(AppVariable.KUBE_CLUSTER_USER);
	});

	it("should define all app defaults", () => {
		assert.isNotNull(AppDefault.NODE_PORT);
		assert.isNotNull(AppDefault.NODE_ENV);
	});
});
