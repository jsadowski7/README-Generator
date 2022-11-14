// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'MIT', 'BSD', 'GPL']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: (titleCheck) => {
            if (titleCheck) {
                return true;
            } else {
                console.log("Please enter a title.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
        validate: (descCheck) => {
            if (descCheck) {
                return true;
            } else {
                console.log("Please enter a description.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i -y',
        validate: (installCheck) => {
            if (installCheck) {
                return true;
            } else {
                console.log("Please add installation instructions.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testing',
        default: 'npm test',
        validate: (testCheck) => {
            if (testCheck) {
                return true;
            } else {
                console.log("Please add testing instructions.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the Repo?',
        name: 'contribution',
        validate: (contCheck) => {
            if (contCheck) {
                return true;
            } else {
                console.log("Please enter contribution instructions.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'Insert link to Mock-up if needed:',
        name: 'mockup',
        default: '![Project-Name](./assets/images/your-photo)'
    },
    {
        type: 'input',
        message: 'Insert your application URL:',
        name: 'link-to-app',
        validate: (linkCheck) => {
            if (linkCheck) {
                return true;
            } else {
                console.log("Please add the link to your app.");
                return false;
            }
        },
    },
    {
        type: 'list',
        message: 'What kind of license would you like to use?',
        name: 'license',
        choices: licenses
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'GitHub',
        validate: (gitHubCheck) => {
            if (gitHubCheck) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (emailCheck) => {
            if (emailCheck) {
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        },
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