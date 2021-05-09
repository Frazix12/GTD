# Gitgub-to-Discord

> GTD allows you to send the github feeds to your discord server without having any issue.

## LINKS

- 馃搩 Guide/Docs: `Soon`
- 馃挰 Discord: https://discord.gg/fKSgw4yhb6
- 馃帴 Youtube: https://youtube.com/channel/UCgiRfle1_JSaFV00XcUzfHQ
- 馃檶 Video Tutorial: `Not Out`
- 馃洜 Tools Used: [Axios](https://www.npmjs.com/package/axios)

## Features

- Allows you to easily get the event details
- Fast and Highly Configurable
- Easy to Implement

## Example

```js
const Github = require("gitcord")
const github = new Github("CTK-WARRIOR", {
repositories: ["Discord-Bot-For-Starters", "canvas-senpai"]
})
github.setup()

github.on('newEvent', (json) => {
//do something
})
```
## Without Manual Repositories Addition
Basically you have to add the array of repositories name in options or subscribe repository in order to get feeds related to that repository but we have implemented very usefull feauture for you to get rid of these long chain process.

```js
const Github = require("gitcord")
const github = new Github("CTK-WARRIOR", { token: "Your Super Cool Github Token", gitall: true }) //will throw error if user have more than 50 repo
github.setup()

github.on('newEvent', (json) => {
//do something
})
```

## 馃惐鈥嶐煆� How to use on Discord ?
```js
const Github = require("gitcord")
const Discord = require("discord.js")
const client = new Discord.Client();
const github = new Github("CTK-WARRIOR", { token: "Your Super Cool Github Token", gitall: true })
github.setup()

client.on("ready", () => {
  console.log("Connected to the discord, now ready for fight :D")
})

github.on("newEvent", (embed) => {
  client.channels.cache.get("CHANNEL ID").send({embed})
})

client.login("YOUR DISCORD TOKEN")

```
