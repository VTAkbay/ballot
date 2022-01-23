import React = require("react");
import { deployBallot } from "./ballot"

async function run(web3, proposals) {
    await deployBallot(web3, proposals)
}

export function App(params) {
    const [p1, setp1] = React.useState("")
    return <>
        Ballot
        <button onClick={() => run(params.web3, [p1])}>Test</button>
        <input type="text" value={p1} onChange={e => setp1(e.target.value)}/>
    </>
}