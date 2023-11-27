import { Component } from 'react';

const withLoading = (WrappedComponent) => {
  return class NewComponent extends Component {
    state = {
      isLoading: true,
    };

    componentDidMount = () => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    };

    render() {
      const { isLoading } = this.state;
      return (
        <>
          <WrappedComponent {...this.props} />
          {isLoading && (
            <div
              className="d-flex justify-content-center align-items-center bg-dark text-white position-absolute top-50 start-50 translate-middle w-100"
              style={{ minHeight: '100vh', opacity: '.5' }}
            >
              <span className="loader"></span>
            </div>
          )}
        </>
      );
    }
  };
};

export default withLoading;