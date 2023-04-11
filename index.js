import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { error } from 'console';

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
      message: 'What is the license you using?',
      type: "list",
      choices: ['Apache License 2.0', "GNU General Public License v3.0", "MIT License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "Mozilla Public License 2.0", " The Unlicense"],
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
      message: 'What is your github username and link?',
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
  
# Table of Contents
* [Usage](#usage)
* [Description](#usage)
* [Installation](#installation)
* [Contributors](#contribution)
* [License](#license)
* [Contacts](#github)
  
## Usage
${answers.usage}
  
## Description
${answers.description}
  
## Installation
${answers.installation}
  
## Contributors
${answers.contribution}
  
## License
${answers.license}
  
## Contacts
* Github: ${answers.github}
* Email: ${answers.email}`;
  
    createNewFile("readme", displayInfo);
  });

  function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase()}.md`, data,(err) => {
      if (err) throw err;
      console.log("Read Me has been created!");
    })
  };
