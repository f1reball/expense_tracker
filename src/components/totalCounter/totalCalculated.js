import React, { Component } from "react";

import './totalCalculated.css';

class TotalCalculated extends Component {

    render() {
        return (
            <div className="balance">
                <h1>$ {this.props.value} </h1>
            </div>
        )
    }
}

export default TotalCalculated