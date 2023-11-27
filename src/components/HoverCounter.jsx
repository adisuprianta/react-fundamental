import { Component } from 'react';
import withCounter from '../hoc/withCounter';
import PropTypes from 'prop-types';

class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <>
        <p onMouseLeave={increment}>Hovered: {count} times</p>
      </>
    );
  }
}
HoverCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

const NewHoverCounter = withCounter(HoverCounter);

export default NewHoverCounter;
