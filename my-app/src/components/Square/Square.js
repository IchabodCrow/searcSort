import React from "react";
import square from "./Square.module.css"
export default class Square extends React.Component {
    render () {
        let squareStyle = {
            backgroundColor: this.props.color
        }
        return(
            <div style={squareStyle} className={square.square}>

            </div>
        )
    }
}