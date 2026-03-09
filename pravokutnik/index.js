import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "a",
      message: "Unesite duljinu pravokutnika:"
    },
    {
      type: "input",
      name: "b",
      message: "Unesite širinu pravokutnika:"
    }
  ])
  .then((answers) => {
    const a = Number(answers.a);
    const b = Number(answers.b);

    const povrsina = a * b;

    const rezultat = `Duljina: ${a}
Širina: ${b}
Površina pravokutnika: ${povrsina}`;

    fs.writeFileSync("izracun.txt", rezultat);

    console.log("Rezultat je spremljen u izracun.txt");
  });