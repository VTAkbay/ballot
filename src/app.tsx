import React = require("react");
import { deployBallot } from "./ballot"

async function run(web3, proposals) {
    await deployBallot(web3, proposals)
}

function parseProposalList(text: string): string[] {
    const lines = text.split("\n")
    const proposals = lines
        .map(line => line.trim())
        .filter(line => line.length > 0)
    return proposals
}

export function App(params) {
    const [proposalList, setProposalList] = React.useState("")
    return <>
        <h1>Create Ballot</h1>
        <hr/>
        <textarea style={{height: "150px", width: "300px"}} value={proposalList} onChange={e => setProposalList(e.target.value)}/>
        <br/>
        <button onClick={() => run(params.web3, parseProposalList(proposalList))}>Test</button>
    </>
}