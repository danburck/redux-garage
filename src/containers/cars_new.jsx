import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createCar } from '../actions/index';

import Aside from '../components/aside';

const required = value => value ? undefined : '*Required';
const plate = value => value && !/[A-Z0-9]/.test(value) ? 'Invalid licence plate' : undefined;

// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
//   'Invalid email address' : undefined

class CarsNew extends Component {
  onSubmit = (car) => {
    this.props.createCar(this.props.garage, car, () => {
      this.props.history.push('/');
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control"
          type={type}
          {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            placeholder="Jeep"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            placeholder="Wrangler"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            placeholder="Dan Burck"
            validate={required}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            placeholder="123456"
            validate={[required, plate]}
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
