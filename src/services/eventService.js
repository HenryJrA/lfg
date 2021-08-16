import { func } from 'prop-types'
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