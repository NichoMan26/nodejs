const colors = require('colors')
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let colorsArr = ["black","red","green","yellow","blue","magenta","cyan","white","gray"]
setInterval(()=>{
    let number = getRandomInt(colorsArr.length)
    let colorNumber = colorsArr[number]
    console.log(colors[colorNumber](colorNumber));
},1000)
