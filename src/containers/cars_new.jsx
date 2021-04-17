import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class CarsNew extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
          <label htmlFor="brand">Content</label>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="model">Content</label>
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="owner">Content</label>
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="plate">Content</label>
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
};

export default CarsNew;
