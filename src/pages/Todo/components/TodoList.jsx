/* eslint-disable react/prop-types */
import { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {todoList, handleDelete} = this.props;

        return(
            <div className="todo-list p4 bg-secondary rounded-2 pt-4">
            <h2 className='text-center mb-3'>Todo List</h2>
            <table className="table table-striped">
              
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Todo</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {todoList.map((todo, index) =>{
                  return(
                    <TodoItem todo={todo} key={index} index={index} handleDelete={handleDelete} />
                  )
                })}
              </tbody>
            </table>
            </div>
        );
    }
}