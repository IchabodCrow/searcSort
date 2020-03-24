import React from "react";
import card from "./Card.module.css"
import Square from "../Square/Square";
import Label from "../Label/Label";

export default class Card  extends React.Component {
   render () {
       return (
           <div className={card.card}>
               <Square color={this.props.color}/>
               <Label color={this.props.color}/>
           </div>
       )
   }
}