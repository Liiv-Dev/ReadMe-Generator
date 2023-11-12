// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case `Apache 2.0 License` :
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      break;
      case `Boost Software License 1.0` :
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
      break;
      case `BSD 3-Clause License` :
        return`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
      break;
      case `CC0` :
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
      break;
      case `Eclipse Public License 1.0` :
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
      break;
      case `IBM Public License Version 1.0` :
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
      break;
      case `ISC License (ISC)` :
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
      break;
      case `The MIT License` :
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      break;
      case `Mozilla Public License 2.0` :
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
      break;
      case `The Perl License` :
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
      break;
      default:
        return ''
        break
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch(license) {
    case `Apache 2.0 License` :
      return `For more information about licensing, click [here] (https://opensource.org/licenses/Apache-2.0)

      `
      break;
      case `Boost Software License 1.0` :
        return `For more information about licensing, click [here] (https://www.boost.org/LICENSE_1_0.txt)`
      break;
      case `BSD 3-Clause License` :
        return`For more information about licensing, click [here] (https://opensource.org/licenses/BSD-3-Clause)`
      break;
      case `CC0` :
        return ` For more information about licensing, click [here] (http://creativecommons.org/publicdomain/zero/1.0/)`
      break;
      case `Eclipse Public License 1.0` :
        return ` For more information about licensing, click [here] (https://opensource.org/licenses/EPL-1.0)`
      break;
      case `IBM Public License Version 1.0` :
        return `For more information about licensing, click [here] (https://opensource.org/licenses/IPL-1.0)`
      break;
      case `ISC License (ISC)` :
        return `For more information about licensing, click [here] (https://opensource.org/licenses/ISC)`
      break;
      case `The MIT License` :
        return `For more information about licensing, click [here] (https://opensource.org/licenses/MIT)`
      break;
      case `Mozilla Public License 2.0` :
        return `For more information about licensing, click [here] (https://opensource.org/licenses/MPL-2.0)`
      break;
      case `The Perl License` :
        return `For more information about licensing, click [here] (https://opensource.org/licenses/Artistic-2.0)`
      break;
      default:
        return ''
        break
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license) {
   return `Application is licensed by ${license}.`
  } else {
    return ''
  }
};

// Function to generate markdown for README
const generateMarkdown = data => {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##  Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## About the Project
  ${data.description}
  ${renderLicenseBadge(data.license)}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions, please contact or visit:
  - Email: ${data.email}
  - Username: ${data.username}
  - Github: ${data.github}
`;
}

module.exports = generateMarkdown;
