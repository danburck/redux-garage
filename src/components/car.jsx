import React from 'react';

const Car = (props) => {
  return (
    <div className="car">
      <div className="car-details">
        <ul>
          <li><strong>{props.car.brand} - {props.car.model}</strong></li>
          <li><strong>Owner:</strong> {props.car.owner}</li>
        </ul>
      </div>
    </div>
  );
};

export default Car;
