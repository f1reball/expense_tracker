import React, { Component } from "react";
import './addnew.css';


class AddNewForm extends Component {

    render() {
        return (
            <div className="formBox">
                <form>
                    <input type="text" placeholder="Enter Text"/>
                    <input type="number" step="any" placeholder="Enter Amount"/>
                    <button>Add Transaction</button>
                </form>
            </div>
        )
    }
}

export default AddNewForm