// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i -y'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testing',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the Repo?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Insert link to Mock-up if needed:',
        name: 'mock-up',
        default: './assets/images/'
    },
    {
        type: 'input',
        message: 'Insert your application URL:',
        name: 'link-to-app'
    },
    {
        type: 'input',
        message: 'What kind of license would you like to use?',
        name: 'license'
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = "./dist/README.md";
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md has been created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
    }


// Function call to initialize app
init();