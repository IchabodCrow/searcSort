import React from "react";
import {Lesson} from "./components/WebDev/Counter/Leason/Leason";
import List from "./components/MyTest/MyTextSaver/List/List";
import MyLink from "./components/MyTest/MyTextSaver/Item/Item";
import AppRend from "./components/Rendering/AppRend/AppRend";


export default class App extends React.Component {
    render(){
        return(
            <div>
                <AppRend/>
            </div>
        )
    }
}