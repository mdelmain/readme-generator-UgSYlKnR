const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'editor',
        name: 'description',
        message: 'Enter a project description.',
      },
      {
        type: 'editor',
        name: 'installation',
        message: 'Enter the installation instructions.',
      },
      {
        type: 'editor',
        name: 'usage',
        message: 'Enter instructions and examples for use.',
      },
      {
        type: 'editor',
        name: 'contribution',
        message: 'Enter contribution guidelines.',
      },
      {
          type: 'editor',
          name: 'test',
          message: 'Enter testing instructions.',
        },
      {
          type: 'list',
          name: 'license',
          message: 'Select a license.',
          choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'None'],
        },
      {
          type: 'input',
          name: 'username',
          message: 'Enter your GitHub username.',
        },
      {
          type: 'input',
          name: 'email',
          message: 'Enter your email address.',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
