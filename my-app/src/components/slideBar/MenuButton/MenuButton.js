import React, {PureComponent} from "react";
import './MeneButton.css'

export default class MenuButton extends PureComponent{
    constructor(props){
        super(props);
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextProps.handleMouseDown === this.props.handleMouseDown){
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // };

    render(){
        console.log("Rendering: MenuButton");
       return (
           <button id="roundButton"
                   onMouseDown={this.props.handleMouseDown}></button>
       )
    }
}