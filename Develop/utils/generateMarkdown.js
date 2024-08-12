// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(typeof data.license[0] === 'undefined'){
   
    return " ";
  }//Apache 2.0 License
    else if(data.license[0] === 'Apache 2.0'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }// Boost Software License 1.0
    else if(data.license[0] === "Boost Software License 1.0"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  }
   //GNU GPL v3
   else if(data.license[0] === "GNU GPL-V3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    
  }//GNU GPL v2
   else if(data.license[0] === "GNU GPL-V2"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
  
  }//The MIT License
   else if(data.license[0] === "MIT"){ 
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  
  }//Mozilla Public License 2.0
   else if(data.license[0] === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    
  }//The Unlicense
   else if(data.license[0] === "Unlicense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(typeof data.license[0] === 'undefined'){
   return " ";
  } // Apache 2.0 License
  else if(data.license[0] === "Apache 2.0"){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }//Boost Software License 1.0
  else if(data.license[0] === "Boost Software License 1.0"){
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }//GNU GPL v3
  else if(data.license[0] === "GNU GPL-V3"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }//GNU GPL v2
  else if(data.license[0] === "GNU GPL-V2"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }//The MIT License
  else if(data.license[0] === "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  }//Mozilla Public License 2.0
  else if(data.license[0] === "Mozilla"){
    return "(https://opensource.org/licenses/MPL-2.0)";
  }
  //The Unlicense
  else if(data.license[0] === "Unlicense"){ 
    return "(http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(typeof renderLicenseBadge(data) === 'undefined' && typeof renderLicenseLink(data) === 'undefined') {
    return " ";
  }
    console.log(renderLicenseBadge(data) + renderLicenseLink(data));
    return renderLicenseBadge(data) + renderLicenseLink(data);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseSection(data)}


  ## Description

${data.description}.


### Table of Contents

- [Title](#)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}.


## Usage

${data.instructions}.


## License

This project is licensed under the ${data.license} license.;


## Contribute

${data.contribute}.


## Tests

${data.test}.


## Questions

* https://github.com/${data.username}
* You can reach me if you have any further questions by email: ${data.email}


`;
}

module.exports = generateMarkdown;
//What are the steps required to install your project? Provide a 
//step-by-step description of how to get the development environment running.