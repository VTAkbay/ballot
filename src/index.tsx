import React = require("react");
import { render } from "react-dom";
import Web3 from "web3";
import { App } from "./app";
import { deployBallot } from "./ballot"

declare const ethereum: any;
if (typeof ethereum == "undefined") {
    console.error("No ethereum provider found")
} else {
    const web3 = new Web3(ethereum);
    (window as any).web3 = web3;
    (window as any).deployBallot = deployBallot;

    render(<App web3={web3} />, document.getElementById("content"))
}
