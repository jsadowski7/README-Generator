// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL": 
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get info about this license\n";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## license
    ${data.license}
    
  ## Table of Contents

    - [Description](#description)
    - [installation](#installation)
    - [testing](#testing)
    - [contribution](#contribution)
    - [Mock-Up](#mock-up)
    - [Application](#link-to-app)
    - [license](#license)
    - [email](#email)
    - [GitHub](#GitHub)
    
  ## description
  ${data.description}
    
  ## installation
  ${data.installation}
    
  ## testing
  ${data.testing}
    
  ## contribution
  ${data.contribution}

  ## Mock-Up

  ## Contact Me  
    Email: ${data.email}
  
    GitHub: ${data.GitHub}`;  
}

module.exports = generateMarkdown;
