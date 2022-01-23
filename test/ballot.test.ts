import "@nomiclabs/hardhat-web3"
import { web3 } from "hardhat"
import { deployBallot } from "../src/ballot";

describe("Ballot contract", function () {
    it("Should deploy Ballot contract", async function () {
        await deployBallot(web3, ["Proposal 1", "Proposal 2"])
    });
});