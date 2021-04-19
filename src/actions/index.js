// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CREATE_CAR = 'CREATE_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  const endpoint = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(endpoint)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const endpoint = `${BASE_URL}/cars/${id}`;
  const promise = fetch(endpoint)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(garage, car, callback) {
  const endpoint = `${BASE_URL}/${garage}/cars`;
  const request = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then(() => callback());

  return {
    type: CREATE_CAR,
    payload: request
  };
}

export function removeCar(history, car) {
  const endpoint = `${BASE_URL}/cars/${car.id}`;
  fetch(endpoint, { method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push(""));

  return {
    type: REMOVE_CAR,
    payload: car
  };
}
