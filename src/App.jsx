import React from 'react';

import Login from './pages/Login';
import Sidebar from './components/Sidebar';
// import withLoading from './hoc/withLoading';
import Table from './pages/Table';
import Menu from './pages/Menu';
import Dashboard from './pages/Dashboard';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';

 class App extends React.Component {
  state = {
    isLogin: true,
    page: 1,
  }
  handleLogin = (status) => {
    this.setState({
      isLogin: status,
      
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
        {this.state.page ===1&& <Dashboard />}
        {this.state.page ===2&& <Table />}
        {this.state.page ===3&& <Menu />}
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
// const NewApp = withLoading(App);
export default App;
