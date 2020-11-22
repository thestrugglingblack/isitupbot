import axios from 'axios'

import xboxWrapper from "../../src/wrappers/xbox-wrapper";

import  success from './fixtures/xbox/success.json';
import failed from './fixtures/xbox/failed.json';


const green = String.fromCodePoint(0x1F7E2)
const red = String.fromCodePoint(0x1F534)

describe('[ Xbox Wrapper ]',  () => {

    test('returns Failed Xbox Data', async ()=> {
        const mocked = jest.spyOn(axios, 'get')
        mocked.mockResolvedValue({data: failed})


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
        mocked.mockReset()
    })

    test('returns Success Xbox Data', async ()=> {
        const mocked = jest.spyOn(axios, 'get')
        mocked.mockResolvedValue({data: success})
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
        mocked.mockReset()
    })
})