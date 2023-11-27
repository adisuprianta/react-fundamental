/* eslint-disable react/prop-types */
import { Component } from "react";

export default class FormTodo extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        const {handleChange, handleOnSubmit} = this.props;
        return(
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="todo" className="form-label">
                  Todo
                </label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="todo"
                  id="todo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descxription" className="form-label">
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="description"
                  id="description"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                save
              </button>
            </form>
        );
    }
}