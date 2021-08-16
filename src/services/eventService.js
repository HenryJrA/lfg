import * as tokenService from './tokenService'
const BASE_URL = "/api/events/"

export function createEvent(event){
  return fetch(
    `${BASE_URL}createEvent`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(event)
    },
    { mode: "cors" })
    .then((res)=> res.json())
}

export function getAllEvents() {
  return fetch(
    `${BASE_URL}`, {
      method: "GET",
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: "cors"}
  ).then(res => res.json())
}

export function deleteEvent(){
  return fetch(
    `${BASE_URL}`,
    {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    },
    { mode: "cors" })
  .then((res) => res.json())
  
}