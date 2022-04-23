import axios from 'axios'

export default axios.create({
  baseURL: 'https://csegsa-portal.herokuapp.com/api',
  // baseURL: "http://localhost:5000/api",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
