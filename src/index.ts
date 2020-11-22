import 'dotenv/config';

import { Client } from 'discord.js';

import psnWrapper from './wrappers/ps-wrapper';
import xboxWrapper from './wrappers/xbox-wrapper';

const token = process.env.DISCORD_TOKEN!;
const PREFIX = '!isitup';

const bot = new Client();

bot.login(token);

bot.on('ready', () => {
  console.log('I am online now....');
});

bot.on('message', async (msg) => {
  if (msg.content.startsWith(PREFIX)) {
    const args = msg.content.substring(PREFIX.length).split(' ');
    const servers = args[1];
    if (!servers) {
      msg.channel.send('Please add playstation or xbox...');
    }

    if (servers) {
      switch (servers) {
        case 'playstation':
          const psMsg = await psnWrapper();
          msg.channel.send(psMsg);
          break;
        case 'xbox':
          const xboxMsg = await xboxWrapper();
          msg.channel.send(xboxMsg);
          break;
        default:
          msg.channel.send('Invalid Arguments...');
      }
    }
  }
});
