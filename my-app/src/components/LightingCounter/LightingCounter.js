import React from "react";

export default class LightingCounter extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            strikes: 0
        };
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick(){
        this.setState({
            strikes: this.state.strikes + 100
        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render(){
        return (
            <h1>{this.state.strikes}</h1>
        )
    }

}