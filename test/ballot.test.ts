import { expect } from "chai"
// import "@nomiclabs/hardhat-web3"
// import { artifacts, web3 } from "hardhat"

// describe("Token contract", function () {
//     it("Deployment should assign the total supply of tokens to the owner", async function () {
//         artifacts.require("Ballot")
//         const [owner] = await web3.getSigners();

//         const Ballot = await ethers.getContractFactory("Ballot");

//         const hardhatToken = await Ballot.deploy();

//         const ownerBalance = await hardhatToken.balanceOf(owner.address);
//         expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//     });
// });