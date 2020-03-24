import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        }

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        )
    }
}