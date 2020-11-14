const axios = require('axios');

const request = async (url) => {
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    request: request
}