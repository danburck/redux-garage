import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render() {
    return (
      <div>
        {this.props.cars.map(car => <Car />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
