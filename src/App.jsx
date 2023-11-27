import React from 'react';
import Todo from './pages/Todo';
import Login from './pages/Login';

export default class App extends React.Component {
  state = {
    isLogin: true,
  }
  handleLogin = (status) => {
    this.setState({
      isLogin: status,
    });
  }

  render() {
    const {isLogin} = this.state;
    return (
      <div>
        {isLogin ? 
        <Login handleLogin ={this.handleLogin}/>
      :
        <Todo />
      }
        
        
      </div>
    );
  }
}
