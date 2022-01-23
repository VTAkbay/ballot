import Web3 from "web3"

import * as BallotArtifact from "../artifacts/contracts/ballot.sol/Ballot.json"

export async function getAccounts(web3: Web3) {
    let accounts = await web3.eth.getAccounts()
    if (accounts.length == 0) {
        accounts = await web3.eth.requestAccounts()
    }
    return accounts
}

export async function deployBallot(web3: Web3, proposals: string[]) {
    const [ account ] = await getAccounts(web3)
    console.log("account:", account)
    const BallotContract = new web3.eth.Contract(BallotArtifact.abi as any)
    console.log("BallotContract:", BallotContract)
    const tx = BallotContract.deploy({
        data: BallotArtifact.bytecode,
        arguments: [ proposals.map(proposal => web3.utils.utf8ToHex(proposal)) ],
    })
    console.log("transaction:", tx)
    const contract = await tx.send({
        from: account,
        gas: 1500000,
        gasPrice: '30000000000'
    })
    console.log("contract:", contract)
}
