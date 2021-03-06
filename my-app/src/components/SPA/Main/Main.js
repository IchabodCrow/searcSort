import React, {Component} from 'react';
import {Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Home/Home";
import Stuff from "../Stuff/Stuff";
import Contact from "../Contact/Contact";


export default class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>IZI SPA application</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Главная</NavLink></li>
                        <li><NavLink to="/stuff">Продукты</NavLink></li>
                        <li><NavLink to="/contact">Контакты</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
