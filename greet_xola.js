// const greet = require('./greet');
// console.log(greet('xola'))
const figlet = require("figlet")

const chalk = require("chalk");


const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet("xola"));

console.log(styledMessage)
figlet.text(greet("xola"), {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});