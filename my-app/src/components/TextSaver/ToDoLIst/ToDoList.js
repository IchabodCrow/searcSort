import React from "react";
import toDo from "./toDoList.module.css"
import ToDoItem from "../ToDoItems/ToDoItems";

export default class ToDoList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let itemArray = this.state.items;

        if(this._inputElement.value !== ""){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray,
            });

            this._inputElement.value = ""
        }

        console.log(itemArray);

        e.preventDefault();
    }

    deleteItem(key) {
        let filterItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items : filterItems,
        });
    }

    render(){
        return(
            <div className={toDo.toDoListMain}>
                <div className={toDo.header}>
                    <form onSubmit={this.addItem}>
                        <input
                            ref={ (a) => this._inputElement = a}
                            placeholder="Введите задачу"/>
                        <button type="submit">OK</button>
                    </form>
                </div>
                <ToDoItem entries={this.state.items}
                    delete={this.deleteItem}/>
            </div>
        )
    }
}