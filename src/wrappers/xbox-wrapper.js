const request = require('../util/request').request;
const xboxUrl = 'https://xnotify.xboxlive.com/servicestatusv5/US/en-US';

module.exports = async () => {
    const data = await request(xboxUrl)
    let serviceStatusMessages =[]
    const green = String.fromCodePoint('0x1F7E2')
    const red = String.fromCodePoint('0x1F534')

    for ( const xp in data){
        if( Array.isArray(data[xp])){
            const svcTitle = `- ${xp} \n`;
            serviceStatusMessages.push(svcTitle)
            data[xp].map(svc => {
                const status = svc.Status.Name === 'None' ? green : red;
                const subSvcMsg = `  - ${svc.Name} is currently ${status}\n`;
                serviceStatusMessages.push(subSvcMsg);
            })
        }
    }
    const baseMsg = "Here is the current status of Xbox Servers: \n" + serviceStatusMessages.toString().replace(/,/g, '');
    return baseMsg;

}