const axios = require('axios')
const { API_URL } = require('../config')

async function fetchPrice() {
  try {
    const response = await axios.get(API_URL)
    return response.data.bitcoin.usd
  } catch (error) {
    console.error('Error fetching price:', error)
    return null
  }
}

module.exports = fetchPrice
