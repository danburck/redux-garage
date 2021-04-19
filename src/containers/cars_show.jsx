import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar, removeCar } from '../actions/index';
import Car from '../components/car';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    const car = this.props.car;
    return (
      <div>
        <Car car={car} key={car.id} />
        <button className="delete" onClick={this.handleClick}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          Delete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(car => car.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, removeCar}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
