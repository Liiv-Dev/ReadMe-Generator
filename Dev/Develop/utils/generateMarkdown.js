// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case `Apache 2.0 License` :
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      break;
      case `Boost Software License 1.0` :
        badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
      break;
      case `BSD 3-Clause License` :
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
      break;
      case `CC0` :
        badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
      break;
      case `Eclipse Public License 1.0` :
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
      break;
      case `IBM Public License Version 1.0` :
        badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
      break;
      case `ISC License (ISC)` :
        badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      break;
      case `The MIT License` :
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      break;
      case `Mozilla Public License 2.0` :
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
      break;
      case `The Perl License` :
        badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
      break;
      default:
        return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
