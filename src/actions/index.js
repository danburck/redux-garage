// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export default function fetchCars(garage) {
  const endpoint = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(endpoint)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

