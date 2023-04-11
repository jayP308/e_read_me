import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

inquirer.prompt([
    {
      name: 'title',
      message: 'What is the name of your project?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'usage',
      message: 'What is this app use for?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'description',
      message: 'Describe your the functionality of the app?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'installation',
      message: 'Give a brief instruction on how to use your app.',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'contribution',
      message: 'who are your contributors?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'license',
      message: 'What license are you using?',
      type: "list",
      choices: [{
        key: "this is not a test",
        value: "Apache_2.0"
      },
      "GNU_General_Public_License_v3.0", "MIT_License", "Boost_Software_License_1.0", "Creative_Commons_Zero_v1.0_Universal", "Eclipse_Public_License 2.0", "Mozilla_Public_License 2.0", " The_Unlicense"],
      validate: (value, key) => {
        if(value){
            return true
        } else if (key) {
          return true
        } else {
            return 'Must Choose One!. Please Try Again!'
        }
      }
    },
    {
      name: 'github',
      message: 'What is your github username?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
    {
      name: 'email',
      message: 'What is your email address?',
      type: 'input',
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Cannot be blank!. Please Try Typing again'
        }
      }
    },
  ]).then((answers) => {
    
const displayInfo = `# ${answers.title}

![License Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

# Table of Contents
* [Usage](#usage)
* [Description](#usage)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Contacts](#contacts)
  
## Usage
${answers.usage}
  
## Description
${answers.description}
  
## Installation
${answers.installation}
  
## Contributors
${answers.contribution}
  
## License
![License Badge](https://img.shields.io/badge/License-${answers.license}-blue.svg)

${answers.license}

## Contacts
* Github: https://github.com/${answers.github}
* Email: ${answers.email}`;
  
createNewFile(displayInfo);
  });

  function createNewFile(data) {
    fs.writeFile(path.join(`README.md`), data,(err) => {
      if (err) throw err;
      console.log("Read Me has been created!");
    })
  };
