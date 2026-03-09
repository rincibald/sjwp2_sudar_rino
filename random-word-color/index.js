import colorname from 'random-color-name';
import starwarsNames from 'starwars-names';
var color = colorname.random();
var name = starwarsNames.random();
console.log(color + " " + name);