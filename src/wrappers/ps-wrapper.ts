import request from '../util/request';

const serverStatusUrl = 'https://status.playstation.com/data/statuses/region/SCEA.json';

const psnWrapper = async (): Promise<string> => {
  const data = await request(serverStatusUrl);

  const US = data.countries.filter((country) => country.countryCode === 'US');

  let serviceStatusMessages = [];

  serviceStatusMessages = US[0].services.map((svc) => {
    const green = String.fromCodePoint(0x1f7e2);
    const red = String.fromCodePoint(0x1f534);
    const status = !svc.status.length ? green : red; // red: green
    const msg = `- ${svc.serviceName} is currently ${status} \n`;
    return msg;
  });

  const baseMsg =
    'Here is the current status of Playstation Servers: \n' + serviceStatusMessages.toString().replace(/,/g, '');

  return baseMsg;
};
export default psnWrapper;
