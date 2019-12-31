const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
// const util = require('util');
const pdf = require('html-pdf');
const genHTML = require('./generateHTML.js');
// const readFileAsync = util.promisify(fs.readFile);
let githubData;
// will prompt user for github username and to pick favorite color
inquirer
    .prompt([{
        type: "input",
        message: "Please enter GitHub username.",
        name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: [
            "Green",
            "Blue",
            "Pink",
            "Red",
        ]
    }
    ])
    // after prompt runs, then it will run function to access github profile based on username supplied
    .then(function ({ username, color }) {
        // variable for query URL from github API
        const queryUrl = `https://api.github.com/users/${username}`;
        const starsQueryUrl = `https://api.github.com/users/${username}/starred`;

        //   using axios to retrieve info from github API
        axios.get(queryUrl).then(function (res) {
            githubData = res.data;

        }).then(function (res) {
            axios.get(starsQueryUrl).then(function (res) {
                const stars = res.data.length;

                // this logs the number showing up on page1...not sure how to get the TOTAL number of stars a user has


                // writes HTML File
                console.log(genHTML(username, color));
                fs.writeFile('first.html', genHTML(githubData, stars, color), function (err) {
                    console.log(genHTML);
                    if (err) throw err;
                    console.log('Saved HTML File');



                    // creates PDF file
                    const html = fs.readFileSync('./first.html', 'utf8');
                    const options = { format: 'Letter' };

                    pdf.create(html, options).toFile('.devprofile.pdf', function (err, res) {
                        if (err) return console.log(err);
                        console.log(res);

                    });
                });
            });


        });
    });

