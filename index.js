import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

const licenseList =[{
  MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}]

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
      message: 'Give a short instruction on how to use the app.',
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
      name: 'test',
      message: 'How do you test the app once installed?',
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
      choices: ["MIT", "Zlib", "ISC", "Eclipse","Php","Unlicense"],
      validate: (value) => {
        if(value){
            return true
        } else {
            return 'Must Choose One!. Please Try Again!'
        }
      }
    },
    {
      name: 'fullname',
      message: 'What is your name?',
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

[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

# Table of Contents
* [Usage](#usage)
* [Description](#usage)
* [Installation](#installation)
* [Test](#test)
* [Contributors](#contributors)
* [License](#license)
* [Contacts](#contacts)
  
## Usage
${answers.usage}
  
## Description
${answers.description}
  
## Installation
${answers.installation}

## Test
${answers.test}
  
## Contributors
${answers.contribution}
  
## License
This project is licensed under [${answers.license}](https://opensource.org/licenses/${answers.license})

## Questions?
* Name: ${answers.fullname}
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