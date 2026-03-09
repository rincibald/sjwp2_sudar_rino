import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {       
            message:"Unesi URL: ",
            name:"URL"
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr_img.png"));
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("Datoteka je sacuvana!");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something went wrong");
        }
    });

    