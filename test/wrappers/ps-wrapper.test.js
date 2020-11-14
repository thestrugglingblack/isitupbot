const psnWrapper = require('../../src/wrappers/ps-wrapper');
const request = require('../../src/util/request');

const success = require('../fixtures/psn/success.json');
const failed =  require('../fixtures/psn/failed.json');

const green = String.fromCodePoint('0x1F7E2')
const red = String.fromCodePoint('0x1F534')

const axios = require('axios');

jest.mock('axios');

describe('[ PSN Wrapper ]', () => {

    // TODO: Provide authentic failed PSN JSON
    // test('returns Failed PSN Data', async ()=> {
    //     axios.get.mockResolvedValue({data: failed})
    //     const msg = {}
    //     expect(await psnWrapper()).toBe(msg)
    //     axios.get.mockReset()
    // })

    test('returns Success PSN Data', async ()=> {
        axios.get.mockResolvedValue({data: success})
        const msg = [`Here is the current status of Playstation Servers: \n`, `- Account Management is currently ${green} \n`, `- Gaming And Social is currently ${green} \n`,  `- PlayStation Now is currently ${green} \n`, `- PlayStation Video is currently ${green} \n`, `- PlayStation Store is currently ${green} \n`, `- PlayStation Music is currently ${green} \n`, `- PlayStation Direct is currently ${green} \n`].toString().replace(/,/g, '');
        expect( await psnWrapper()).toEqual(msg)
        axios.get.mockReset()
    })
})