import React from "react";
import label from "./Label.module.css"

export default class Label extends React.Component {
    render () {
        return(
           <div>
               <p className={label.label}>{this.props.color}</p>
           </div>
        )
    }
}