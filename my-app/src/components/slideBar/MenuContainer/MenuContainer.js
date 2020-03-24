import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import Menu from "../Menu/Menu";

export default class MenuContainer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);

    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log('clicked');
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        console.log("Rendering: MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible}/>
                <div>
                    <p>Найди пункт</p>
                    <ul>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                        <li>11</li>
                    </ul>
                </div>
            </div>
        )
    }

}