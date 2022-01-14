import React, { Component } from "react";
import './totalContainer.css';

import TotalCalculated from "./totalCalculated";

class TotalContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'balance_value' : '800.00'
        };
    }    

    render() {
        return (
            <div className="balanceContainer">
                <h1>Balance</h1>
                <TotalCalculated value={this.state.balance_value} />
            </div>
        )
    }
}

export default TotalContainer