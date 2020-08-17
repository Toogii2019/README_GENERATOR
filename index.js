var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./lib/generateMarkdown.js");

// array of questions for user
const questions = [
    {message: 'What is your github username ?',name: 'github_username', type: 'input'},
    {message: 'What is your email address ?',name: 'email_address', type: 'input'},
    {message: 'What is your project name ?',name: 'title', type: 'input'},
    {message: 'Short description of your project: ',name: 'description', type: 'input'},
    {message: 'What kind of license should your project have ?',name: 'license', type: 'list', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', "None"]},
    {message: 'What command should be run to install dependencies ?',name: 'cmd_dependency', type: 'input'},
    {message: 'What command should be run to run tests ?',name: 'cmd_test', type: 'input'},
    {message: 'What does the user need to know about using the repo ?',name: 'repo_use', type: 'input'},
    {message: 'What does the user need to know about contributing to the repo ?',name: 'repo_contrib', type: 'input'},
];

// function to write README file
function writeToFile(fileName, dataArray) {
    // Check if file exist !

    fs.appendFile(fileName, dataArray + '\n\n', function(err) {
        if (err) {
            console.log(err);
            }
    });
    console.log(`Successfully Generated file at ${fileName}`);
}
    

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        console.log(`Your response was ${JSON.stringify(response)}`);

        //Markdown called

        let data = generateMarkdown(response);

        if (fs.existsSync("./README/README.md")) {
            console.log("File already exist");
            fs.unlinkSync("./README/README.md");
        }
        else {


            fs.mkdir("./README", function(err) {
                if (err) {
                    if (err.code === "EEXIST") {
                    return;
                    } 
                }
                else {
                console.log("New directory successfully created.")
                }
            })
        }
        writeToFile('./README/README.md', data);
});
}



// function call to initialize program
init();
