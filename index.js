const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user input
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

// function to write README file
function writeToFile(data) { 
    fs.writeFile("NewREADME.md", data, function (err) {
        if (err) throw err;
        console.info("Saved NewREADME.md");
    } 
)};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile(markdown);
    })
}

// Function call to initialize app
init();
