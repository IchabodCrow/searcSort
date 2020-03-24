import React from "react";
import LightingCounter from "../LightingCounter/LightingCounter";
import light from './LightingCounterDisplay.module.css'

export default class LightingCounterDisplay extends React.Component {
    render(){
        return (
            <div className={light.light}>
                <LightingCounter/>
            </div>
        )
    }
}