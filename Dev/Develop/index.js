// Added packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')

const isValidEmail = (email) => {
    // Email validation
    const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailChar.test(email);
};

// Array of questions for user input
 const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email',
        validate: function (email) {
            // Use the isValidEmail function to validate the email
            return isValidEmail(email) ? true : 'Invalid email address';
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter github username'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github profile link'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter name for your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter steps required to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information (instructions, examples)'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select licenses used to create your project',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'CC0', 'Eclipse Public License 1.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'The Perl License']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If allowed, tell others how they can contribute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application, Then provide examples on how to run them here'
    },
]

// Function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('success');
        }
    });
}

// Function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md',generateMarkdown(data))
    })
    .then(() => console.log('ReadMe file created'))
    .catch((err) => {
        console.log(err)
    });
}

// Function call to initialize app
init();
