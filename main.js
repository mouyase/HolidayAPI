const request = require("request")

const days = [
    ["01-01", "01-30"],
    ["01-31", "02-27"],
    ["02-28", "03-27"],
    ["03-28", "04-25"],
    ["04-26", "05-25"],
    ["05-26", "06-24"],
    ["06-25", "07-24"],
    ["07-25", "08-23"],
    ["08-24", "09-22"],
    ["09-23", "10-22"],
    ["10-23", "11-21"],
    ["11-22", "12-21"],
    ["12-22", "12-31"],
]
const nowYear = new Date().getFullYear();
const nextYear = new Date().getFullYear();

const args = process.argv.splice(2)
const key = args[0]
request(`https://api.tianapi.com/txapi/jiejiari/index?key=${key}&type=3&date=${nowYear}-${days[0][0]}~${nowYear}-${days[0][1]}`, function (err, response, body) {
    if (!err && response.statusCode === 200) {
        console.log(body)
    }
})
