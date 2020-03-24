import React from "react";

export default class ToDoItem extends React.Component{
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        let toDoEntries = this.props.entries;
        let listItems = toDoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
}