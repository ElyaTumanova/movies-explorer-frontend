import { checkResponse } from "./checkResponse";

export const BASE_URL = 'https://api.tumanova.nomoredomainsrocks.ru';

// function request(url, options) {
//   return fetch(url, options).then(checkResponse)
// }


function request(url, options) {
  let resStatus = ''
  let result = {}  
  return fetch(url, options)
  .then((res) => {
    // console.log(res)
    resStatus = res.ok
    // console.log(resStatus);
    return res.json();
  })
  .then ((data) => {
    result = data
    // console.log(data);
  })
  .then(()=>{
    // console.log(resStatus);
    if (resStatus) {
      return result;
    } else {
      return Promise.reject(result);
    }
  })
}

export function register (name, email, password) {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email})
  })
};

export function login (email, password) {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password,
      email: email})
  })
};

export function authorize (token) {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
}


