import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

const garageName = 'parking-lot' || `garage${Math.floor(10 + (Math.random() * 90))}`; // prompt("What is your garage?") ||

const initialState = {
  garage: garageName
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/:id" exact component={CarsShow} />
          <Route path="/new" exact component={CarsNew} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
