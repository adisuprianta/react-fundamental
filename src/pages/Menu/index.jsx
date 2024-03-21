import { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        price: '',
      },
      menuList: [
        {
          name: 'menu 1',
          price: '1',
        },
        {
          name: 'menu 2',
          price: '2',
        },
      ],
    };
  }
  handleDelete = (menu) => {
    if (confirm('Are you sure you want to delete this')) {
      const menuFilter = [...this.state.menuList].filter((t) => t !== menu);
      this.setState({
        ...this.state.menuList,
        menuList: menuFilter,
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
    const menu = [...this.state.menuList];
    menu.push(this.state.form);
    this.setState({
      menuList: menu,
      form: {
        name: '',
        price:'',
      },
    });
  };

  render() {
    const { menuList } = this.state;
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
            Add Menu
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
                    Add Menu
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
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Price
                      </label>
                      <input
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        name="price"
                        id="price"
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
          <h2 className="text-center mb-3">Menu List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">price</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {menuList.map((menu, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{++index}</th>
                    <td>{menu.name}</td>
                    <td>{menu.price}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => this.handleDelete(menu)}
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
export default Menu;
