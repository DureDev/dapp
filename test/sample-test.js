const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ElectionManager", function () {
  it("Should return the election shcedule once it's changed", async function () {
    const ElectionManager = await ethers.getContractFactory("ElectionManager");
    const electionManager = await ElectionManager.deploy(
      "Election is scheduled"
    );
    await electionManager.deployed();

    expect(await electionManager.getVote()).to.equal();

    const setElectionManagerTx = await electionManager.vote();

    // wait until the transaction is mined
    await setElectionManagerTx.wait();

    expect(await electionManager.getVote()).to.equal();
  });
});
