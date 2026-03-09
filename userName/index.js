import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "ime",
      message: "Unesite ime:"
    },
    {
      type: "input",
      name: "prezime",
      message: "Unesite prezime:"
    }
  ])
  .then((answers) => {
    const ime = answers.ime;
    const prezime = answers.prezime;

    const username = ime + prezime;

    fs.appendFileSync("users.txt", username + "\n");

    console.log("Kreiran username:", username);
    console.log("Spremljeno u users.txt");
  });