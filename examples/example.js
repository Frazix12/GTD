const Github = require("gtd.js")
const github = new Github("Frazix12", {
repositories: ["Discord-Bot-For-Starters", "canvas-senpai"]
})
github.setup()

github.on('newEvent', (json) => {
console.log(json)
})
