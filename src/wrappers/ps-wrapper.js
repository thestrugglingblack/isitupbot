const request = require('../util/request').request;
const axios = require('axios');

const serverStatusUrl = "https://status.playstation.com/data/statuses/region/SCEA.json";
module.exports = async () => {
    const data = await request(serverStatusUrl);

    const US = data.countries.filter(country => country.countryCode === 'US')

    let serviceStatusMessages =[]

    serviceStatusMessages = US[0].services.map(svc => {
        const green = String.fromCodePoint('0x1F7E2')
        const red = String.fromCodePoint('0x1F534')
        const status = !svc.status.length ? green: red; // red: green
        const msg = `- ${svc.serviceName} is currently ${status} \n`;
        return msg;
    })

    const baseMsg = "Here is the current status of Playstation Servers: \n" + serviceStatusMessages.toString().replace(/,/g, '');

    return baseMsg;
}