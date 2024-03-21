import { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
      },
      tableList: [
        {
          name: 'T01',
        },
        {
          name: 'T02',
        },
      ],
    };
  }

  handleDelete = (table) => {
    if (confirm('Are you sure you want to delete this')) {
      const tableFilter = [...this.state.tableList].filter((t) => t !== table);
      this.setState({
        ...this.state.tableList,
        tableList: tableFilter,
      });
    }
  };
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
    const table = [...this.state.tableList];
    table.push(this.state.form);
    this.setState({
      tableList: table,
      form: {
        name: '',
      },
    });
  };

  render() {
    const { tableList } = this.state;
    return (
      <div className="container mt-4">
        <div className="todo-list p4 bg-secondary rounded-2 pt-4">
          <button
            className="btn btn-primary mb-4 mx-4 "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus-circle m-1"></i>
            Add Table
          </button>
          {/* <form onSubmit={this.handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              save
            </button>
          </form> */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Table
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={this.handleOnSubmit}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <h2 className="text-center mb-3">Table List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((table, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{++index}</th>
                    <td>{table.name}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.handleDelete(table)}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
