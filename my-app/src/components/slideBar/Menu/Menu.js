import React from "react";
import './Menu.css'
export default class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Rendering: Menu");
        let visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show";
        }
        return(
            <div id="flyMenu"
            onMouseDown={this.props.handleMouseDown}
            className={visibility}>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>
                <h2><a href="#"> ssss</a> </h2>

            </div>
        )
    }
}