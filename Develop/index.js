// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = ({title, project, learn, table, install, instructions, 
    screenshot, credits, license, badges, features, contribute, test}) =>  `# ${title}
## Description
${project}, ${learn}
## Table of Contents (Optional)
${table}.
## Installation
${install}
## Usage
${instructions}
## Credits
${credits}
## License
${license}
## Badges
${badges}
## Features
${features}
## How to Contribute
${contribute}
## Tests
${test}.`;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'project',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did your learn?',
      },
      {
        type: 'input',
        name: 'table',
        message: 'Enter your table of content, if not enter N/A',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions on how to use.',
      },
      {
        type: 'input',
        name: 'screenshot',
        message: 'Enter your screenshot filepath.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter license',
      },
      {
        type: 'input',
        name: 'badges',
        message: 'Enter your badges[shield.io](img.shields.io/).',
      },
      {
        type: 'input',
        name: 'features',
        message: 'Enter the features here.',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter the guidelines for other developers to contribute or N/A.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Add test for project or NA',
      },
];
inquirer.prompt(questions).then((answers) => {
    const readMeContent = generateReadme(answers);

    console.log(answers);
    fs.writeFile('README.md', readMeContent, (err)=>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  
   
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
