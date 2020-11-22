const axios = require('axios');

import psnWrapper from "../../src/wrappers/ps-wrapper";

import success from './fixtures/psn/success.json';
// import failed from '../fixtures/psn/failed.json';

const green = String.fromCodePoint(0x1F7E2)
const red = String.fromCodePoint(0x1F534)


describe('[ PSN Wrapper ]', () => {

    // TODO: Provide authentic failed PSN JSON
    // test('returns Failed PSN Data', async ()=> {
    //     axios.get.mockResolvedValue({data: failed})
    //     const msg = {}
    //     expect(await psnWrapper()).toBe(msg)
    //     axios.get.mockReset()
    // })

    test('returns Success PSN Data', async ()=> {
        const mocked = jest.spyOn(axios, 'get')
        mocked.mockResolvedValue({data: success})
        const msg = [`Here is the current status of Playstation Servers: \n`, `- Account Management is currently ${green} \n`, `- Gaming And Social is currently ${green} \n`,  `- PlayStation Now is currently ${green} \n`, `- PlayStation Video is currently ${green} \n`, `- PlayStation Store is currently ${green} \n`, `- PlayStation Music is currently ${green} \n`, `- PlayStation Direct is currently ${green} \n`].toString().replace(/,/g, '');
        expect( await psnWrapper()).toEqual(msg)
        mocked.mockReset()
    })
})