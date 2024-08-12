// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const readMe = 'README.md';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell me what your project does?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions on how to use: ',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select a License: ',
        choices: [
          'MIT', 'Apache 2.0', 'GNU GPL-V3', 'GNU GPL-v2', 
          'Boost Software License 1.0', 'Mozilla', 'Unlicense'],
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for other developers to contribute?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Are there any test to add for the project?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
      }
];
// TODO: Create a function to write README file
function writeToFile(readMe, data) {
 
  fs.writeFile(readMe, generateMarkdown(data), (err)=>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}
// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.info(answers);
    writeToFile(readMe, answers);
  });
}
// Function call to initialize app
init();
