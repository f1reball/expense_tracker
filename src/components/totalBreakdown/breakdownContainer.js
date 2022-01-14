import React, { Component } from "react";
import './breakdownContainer.css';


class BreakdownContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'positive_value': '800.00',
            'negative_value': '300.00'
        };
    }    

    render() {
        return (
            <div className="breakdownBox">
                <div className="unitHolder">
                    <h1>Income</h1>
                    <h1 className="green moneyDisplay">${this.state.positive_value}</h1>
                </div>

                <div className="unitHolder">
                    <h1>Expense</h1>
                    <h1 className="red moneyDisplay">${this.state.negative_value}</h1>
                </div>
            </div>
        )
    }
}

export default BreakdownContainer