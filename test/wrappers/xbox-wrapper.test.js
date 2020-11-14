const xboxWrapper = require('../../src/wrappers/xbox-wrapper');
const request = require('../../src/util/request');

const success = require('../fixtures/xbox/success.json');
const failed =  require('../fixtures/xbox/failed.json');

const green = String.fromCodePoint('0x1F7E2')
const red = String.fromCodePoint('0x1F534')

const axios = require('axios');

jest.mock('axios');
describe('[ Xbox Wrapper ]',  () => {

    test('returns Failed Xbox Data', async ()=> {
        axios.get.mockResolvedValue({data: failed})

        const msg = [
            `Here is the current status of Xbox Servers: \n`,
            `- CoreServices \n`,
            `  - Xbox Live Core Services is currently 🟢\n`,
            `  - Purchase and Content Usage is currently 🟢\n`,
            `  - TV Music and Video is currently 🟢\n`,
            `  - Social and Gaming is currently 🟢\n`,
            `- Apps \n`,
            `  - Xbox One is currently 🟢\n`,
            `  - Xbox 360 is currently 🟢\n`,
            `  - Windows & Mobile is currently 🟢\n`,
            `- Games \n`,
            `  - Xbox One is currently 🔴\n`,
            `  - Xbox 360 is currently 🟢\n`,
            `  - Windows & Mobile is currently 🟢\n`].toString().replace(/,/g, '');

        expect(await xboxWrapper()).toEqual(msg)
        axios.get.mockReset()
    })

    test('returns Success Xbox Data', async ()=> {
        axios.get.mockResolvedValue({data: success})
        const msg = [
            `Here is the current status of Xbox Servers: \n`,
            `- CoreServices \n`,
            `  - Xbox Live Core Services is currently 🟢\n`,
            `  - Purchase and Content Usage is currently 🟢\n`,
            `  - TV Music and Video is currently 🟢\n`,
            `  - Social and Gaming is currently 🟢\n`,
            `- Apps \n`,
            `  - Xbox One is currently 🟢\n`,
            `  - Xbox 360 is currently 🟢\n`,
            `  - Windows & Mobile is currently 🟢\n`,
            `- Games \n`,
            `  - Xbox One is currently 🟢\n`,
            `  - Xbox 360 is currently 🟢\n`,
            `  - Windows & Mobile is currently 🟢\n`].toString().replace(/,/g, '');
        expect(await xboxWrapper()).toBe(msg)
        axios.get.mockReset()
    })
})