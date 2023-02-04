const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installationInstructions, usage, contribution, tests, license, github, email  }) =>
  `# ${title}

  [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${github}/${title})
  
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Support](#support)
  
  ## Installation
  ${installationInstructions}
  
  ## Usage
  ${usage}
  
  ## License
  This project is licensed under the ${license} license.
  
  ## Contribution
  ${contribution}
  
  ## Tests
  ${tests}
  
  ## Support
  Any questions or concerns can be directed to [${email}](${email}) or visit my GitHub page at [github.com/${github}](github.com/${github}).`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Any useage notes?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Any contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ])
  .then((answers) => {
    const READMEcontent = generateREADME(answers);

    fs.writeFile('README.md', READMEcontent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
