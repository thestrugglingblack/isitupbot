import request from '../util/request';
const xboxUrl = 'https://xnotify.xboxlive.com/servicestatusv5/US/en-US';

const xboxWrapper = async (): Promise<string> => {
  const data = await request(xboxUrl);
  const serviceStatusMessages = [];
  const green = String.fromCodePoint(0x1f7e2);
  const red = String.fromCodePoint(0x1f534);

  for (const xp in data) {
    if (Array.isArray(data[xp])) {
      const svcTitle = `- ${xp} \n`;
      serviceStatusMessages.push(svcTitle);
      data[xp].map((svc) => {
        const status = svc.Status.Name === 'None' ? green : red;
        const subSvcMsg = `  - ${svc.Name} is currently ${status}\n`;
        serviceStatusMessages.push(subSvcMsg);
      });
    }
  }
  const baseMsg = 'Here is the current status of Xbox Servers: \n' + serviceStatusMessages.toString().replace(/,/g, '');
  return baseMsg;
};
export default xboxWrapper;
