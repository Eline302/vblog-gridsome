const axios = require('axios')

const request = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000,
  headers: {
    // xxx 需换成真实的 token
    Authorization: 'token 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'
  }
})

module.exports = request
