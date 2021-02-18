import apiUrl from '../apiConfig'

import axios from 'axios'

export const profileIndex = user => {
  return axios({
    url: apiUrl + '/profiles',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const profileCreate = (profile, user) => {
  return axios({
    url: apiUrl + '/profiles',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { profile }
  })
}

// get a single profile
export const profileShow = (id, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const profileDelete = (id, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const profileUpdate = (id, profile, user) => {
  return axios({
    url: apiUrl + '/profiles/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { profile }
  })
}
