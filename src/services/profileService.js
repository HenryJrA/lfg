import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles/"

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function getAllProfiles() {
  return fetch(
    BASE_URL,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" }
    ).then((res) => res.json())
}

export function updateProfile(profileData) {
  return fetch(`${BASE_URL}update`, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + tokenService.getToken(), "content-type": "application/json" },
    body: JSON.stringify(profileData),
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}