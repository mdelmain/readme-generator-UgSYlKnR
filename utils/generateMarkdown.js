// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if ( license == "None") {
        return "";
    } else {
        return ` ## License
    
    ${license}`
    }
    }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
${data.description}
  
## Table of Contents

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

