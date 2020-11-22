```
                                       _____             _____
                                      |_____|___________|_____|
                                      |_____| / _____ \ |_____|
                                      |_____|/ /\___/\ \|_____|
                                     /|====|__/_/___\_\__|====|\
                                     ||====|  _/_\_/_\_  |====||
                                     \|====| | \ ... / | |====|/
                                           |__\ `---' /__|
                                            |==\_____/==|
                                            |===|===|===|
                                            |===|+-+|===|
                                            >|||<   >|||<
                                            |---|   |---|
                                            || ||   || ||
                                            || ||   || ||
                                            >= =<   >= =<
                                            |===|   |===|
                                            >---/   \---<
                                            ||#|     |#||
                                            ||-|\   /|-||
                                            ||+||   ||+||
                                            ||-|/   \|-||
                                            ||_|\   /|_||      
                                         ___|/-\/   \/-\|___
                                        /________\ /________\
            
                    ██ ███████ ██ ████████ ██    ██ ██████  ██████   ██████  ████████ 
                    ██ ██      ██    ██    ██    ██ ██   ██ ██   ██ ██    ██    ██    
                    ██ ███████ ██    ██    ██    ██ ██████  ██████  ██    ██    ██    
                    ██      ██ ██    ██    ██    ██ ██      ██   ██ ██    ██    ██    
                    ██ ███████ ██    ██     ██████  ██      ██████   ██████     ██ 

```
![CI](https://github.com/thestrugglingblack/isitupbot/workflows/CI/badge.svg)

## Overview
IsItUp is a Discord bot dedicated letting us know if any of our favorite console or game servers are experiencing an outage.

## Commands
To use IsItUp type in any channel `!isitup` followed by a console or a game.
The consoles and server that we have available at the moment are:
* Playstation
* Xbox

For example, if you are interested in seeing if the Playstation servers are experiencing an outage you would type the following command.
`!isitup playstation`
`!isitup xbox`

## Contributing
Coming Soon...

## To Do
- [X] Create environment file for storing sensitive secrets
- [X] Connect bot to test Discord Server
- [X] Parse out "playstation" or "xbox" and responds to the channel that its pulling information from stated console.
- [X] Create method that parses out data from Playstation and Xbox.
    - [X] Playstation
    - [X] Xbox
- [X] Implement unit test.
- [X] Implement TypeScript and linting.    
- [ ] Setup CI/CD to help with build process. 
 - GitHub => GitHub Actions
    - [X] Build TS files
    - [X] Run Linters
    - [X] Run Test
    - [X] Build Podman/Docker Image
        - [X] Combine build, lint and test within image and remove BLT workflow
    - [X] Publish to container registry
    - [ ] Deploy to Microsoft Virtual Machines
- [X] Dockerzie or Podmanize  bot server.
- [ ] Deploy it to a cloud a service. 
  - Microsoft Azure


