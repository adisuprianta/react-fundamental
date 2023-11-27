import { Component } from "react";
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          form: {
            todo: '',
            description: '',
          },
          todoList: [
            {
              todo: 'makan',
              description: 'sedang makan nasi padang',
            },
            {
              todo: 'tidur',
              description:'sedang tidur',
            },
          ],
        };
      }
    
      handleChange = (e) => {
        
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          form: {
            ...this.state.form,
            [name]: value,
          },
        });
      };

      
      handleOnSubmit= (e) => {
        e.preventDefault();
        const todos = [...this.state.todoList];
        todos.push(this.state.form);
        this.setState({
          todoList: todos,
          form: {
            todo: '',
            description: '',
          },
        });
    
        // this.setState({
        //   todoList: [
        //   ...this.state.todoList,
        //     {
        //       todo: this.state.form.todo,
        //       description: this.state.form.description,
        //     },
        //   ],
        //   form: {
        //     todo: '',
        //     description: '',
        //   },
        // });
      }
      handleDelete = (todo)=>{
        if(confirm('Are you sure you want to delete this')){
          
          const todoFilter = [...this.state.todoList].filter(t => t!==todo);
          this.setState({
            ...this.state.todoList,
            todoList: todoFilter,
          });
        }
      }
    
    
      render() {
        console.log(this.state);
        return (
          <div className="container mt-4" >
            <FormTodo handleChange = {this.handleChange} handleOnSubmit = {this.handleOnSubmit} />
            <hr />
            <TodoList todoList={this.state.todoList} handleDelete = {this.handleDelete}/>
          </div>
        );
      }
}