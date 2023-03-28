// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if ( license == "None") {
        return "";
    } else if ( license == "Apache License 2.0") {
        return `[![License: Apache v2](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
    } else if ( license == "GNU General Public License v3.0") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
    } else if ( license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](${renderLicenseLink(license)})`;
    }      
}   

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if ( license == "None") {
        return "";
    } else if ( license == "Apache License 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if ( license == "GNU General Public License v3.0") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if ( license == "MIT") {
        return "https://opensource.org/licenses/MIT";
    }
} 

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if ( license == "None") {
return "";
    } else {
return `## License
    
${license}`
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
  
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  
${data.description}
  
## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)${data.license == 'None' ? '' : "\n* [License](#License)"}
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If there are additional questions, please reach out to me  here: 

* GitHub: https://github.com/${data.username}
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;

