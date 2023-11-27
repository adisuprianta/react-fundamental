import React from 'react';
import Todo from './pages/Todo';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import withLoading from './hoc/withLoading';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

 class App extends React.Component {
  state = {
    isLogin: true,
  }
  handleLogin = (status) => {
    this.setState({
      isLogin: status,
      page: 1,
    });
  };

  handlePage = (page) => {
    this.setState({
      ...this.state,
      page,
    });
  };


  render() {
    const {isLogin} = this.state;
    return (
      <>
        {isLogin ? 
        <Login handleLogin ={this.handleLogin}/>
      :
      <div className='d-flex'>
        <Sidebar handlePage = {this.handlePage} handleLogin = {this.handleLogin}/>
        <Todo />
      </div>
      }

        
      </>
      // <>
      // {/* <ClickCounter/>
      // <HoverCounter/> */}
      // <Todo/>
      // </>
    );
  }
}
const NewApp = withLoading(App);
export default NewApp;
