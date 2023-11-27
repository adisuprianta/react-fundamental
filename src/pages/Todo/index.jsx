import { Component } from 'react';
import TodoList from './components/TodoList';
import FormTodo from './components/FormTodo';
import withLoading from '../../hoc/withLoading';
import PropTypes from 'prop-types';

class Todo extends Component {
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
          description: 'sedang tidur',
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { setLoading } = this.props;
    setLoading(true);
    const todos = [...this.state.todoList];
    todos.push(this.state.form);
    this.setState({
      todoList: todos,
      form: {
        todo: '',
        description: '',
      },
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);

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
  };

  handleDelete = (todo) => {
    const { setLoading } = this.props;
    setLoading(true);
    if (confirm('Are you sure you want to delete this')) {
      const todoFilter = [...this.state.todoList].filter((t) => t !== todo);
      this.setState({
        ...this.state.todoList,
        todoList: todoFilter,
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="container mt-4">
        <FormTodo
          handleChange={this.handleChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <hr />
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{minHeight:300}}>
            <span className="loader"></span>
          </div>
        ) : (
          <TodoList
            todoList={this.state.todoList}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

Todo.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const NewTodo = withLoading(Todo);

export default NewTodo;
