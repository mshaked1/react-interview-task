import fetch from 'isomorphic-fetch'

export default {
  fetch: () => {
    return fetch(`http://localhost:3000/fetchPreviousRecords`)
    .then(statusHelper)
    .then((data) => {
      return data.json()
    })
  },
  addRecord: (data) => {
    return fetch(`http://localhost:3000/addRecord`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        nickName: data.nickName,
        date: Date.now(),
        floor: data.floor
      })
    })
    .then(statusHelper)
    .then((data) => {
      return data.json()
    })
  },
  deleteRecord: (id) => {
    return fetch(`http://localhost:3000/deleteRecord`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(statusHelper)
  }
}

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}
