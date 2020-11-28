import { expect } from "chai";
import { describe, it } from "mocha";
import { lastNames } from "../src/index";

describe("lastNames", () => {
	it("should return an array of strings", () => {
		const types = [...new Set(lastNames.map(lastName => typeof lastName))];

		expect(types).to.be.deep.equal(["string"]);
	});

	it("should not contain duplicates", () => expect([... new Set(lastNames)]).to.be.deep.equal(lastNames));
});
