const fetch = require('node-fetch')

module.exports = (url, ...args) => {
  return fetch(url, ...args)
    .then(response => {
      const clone = response.clone()
      clone.text().then(textResponse => {
        try {
          JSON.parse(textResponse)
        } catch (e) {
          console.log('=====> Unexpected response type (Invalid JSON):')
          console.log(`=====> URL: ${url}`)
          console.log(textResponse)
        }
      })

      return response
    })
    .catch(e => {
      console.log('=====> Request failed:')
      console.log(`=====> URL: ${url}`)
      console.log(e)
    })
}