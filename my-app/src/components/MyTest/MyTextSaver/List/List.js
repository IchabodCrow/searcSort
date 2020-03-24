import React, { Component } from "react";
import {Counter} from "../../../WebDev/Counter/Leason/Leason";

export default class CounterButton extends Component{
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState(({counter}) => ({
            counter: ++counter,
        }))
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                <div>{ counter }</div>
                <Counter
                    counter={counter}
                />
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}