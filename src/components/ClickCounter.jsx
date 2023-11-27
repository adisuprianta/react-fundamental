import { Component } from 'react';
import withCounter from '../hoc/withCounter';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <button className="btn btn-primary" onClick={increment}>
          Clicked: {count} times
        </button>
      </>
    );
  }
}

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

const NewClickCounter = withCounter(ClickCounter);

export default NewClickCounter;
