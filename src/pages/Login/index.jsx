/* eslint-disable react/prop-types */
import React from 'react';
import LoginImage from '../../assets/images/login_register.svg';
import { validateField, validateUsername } from '../../utils/validation';

// eslint-disable-next-line react/prop-types
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
      },
      errors: {
        username: '',
        password: '',
      },
      tauched: {
        username: false,
        password: false,
      },
      isValid: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          form: {
            ...prevState.form,
            [name]: value,
          },
          touched: {
            ...prevState.touced,
            [name]: true,
          },
        };
      },
      () => this.validateForm()
    );
  };

  handleBlur = (e) => {
    const { name } = e.target;
    console.log(name);
    this.setState(
      (prevState) => {
        return {
        ...prevState,
          touched: {
          ...prevState.touched,
            [name]: true,
          },
        };
      },
      () => this.validateForm()
    );
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state.form;
    console.log(username, password);

    // console.log(this.validateForm());
    // if (this.validateForm()) return;

    if (username === 'admin' && password === 'password') {
      this.props.handleLogin(false);
    }

    // console.log(username, password);
  };

  validateForm = () => {
    const {
      form: { username, password },
    } = this.state;

    const errorUsername = validateField(username, 'username is required')
    const errorPassword = validateField(password, 'password is required');
    const errorUsernameFormat = validateUsername(username, 'Invalid username');

      console.log(errorUsername, errorPassword)
    const errorThem = {
      username: errorUsername || errorUsernameFormat,
      password: errorPassword,
    };

    
    const isValid = !errorThem.username && !errorThem.password;

    this.setState({
      ...this.state,
      errors: errorThem,
      isValid: isValid,
    });


    return isValid;
  };

  render() {
    const {
      errors: { username: usernameError, password: passwordError },
      isValid,
    } = this.state;
    return (
      <div className="container-fluid ms-2 py-4">
        <div className="cursor-pointer">
          <i className="bi bi-chevron-left"></i>
          <span className="fw-bold ms-2">Kembali</span>
        </div>

        <div
          className="container d-flex align-items-center"
          style={{ minHeight: '80vh' }}
        >
          <div
            className="container bg-secondary border border-1 my-4 p-4 d-flex flex-column rounded-2 shadow-sm"
            style={{ width: '448px' }}
          >
            <img
              src={LoginImage}
              width={215}
              alt="login-image"
              className="object-fit-contain align-self-center my-2"
            />
            <h1 className="fw-bold fs-4 text-center my-2">Log In</h1>
            <form onSubmit={this.handleOnSubmit}>
              <div className="mb-3 mt-4">
                <input
                  type="username"
                  name="username"
                  className={`form-control text-normal border-0 border-bottom rounded-0 outline-none ${
                    usernameError && 'is-invalid'
                  }`}
                  id="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  {usernameError}
                </div>
              </div>
              <div className="mb-3 mt-4">
                <input
                  type="password"
                  name="password"
                  className={`form-control text-normal border-0 border-bottom rounded-0 outline-none ${
                    passwordError && 'is-invalid'
                  }`}
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  {passwordError}
                </div>
              </div>
              <p className="fw-bold text-primary text-normal cursor-pointer text-end">
                Lupa Password?
              </p>
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary text-normal fw-bold rounded-4 w-100 mt-4"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
