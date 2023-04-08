import inquirer from 'inquirer';

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
      name: 'contribution',
      message: 'What is your apps contribution?',
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
      name: 'instruction',
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
      name: 'installation',
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
      choice: ['Apache License 2.0', "GNU General Public License v3.0", "MIT License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "Mozilla Public License 2.0", " The Unlicense"],
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
  ]).then(answers => {
    console.dir(answers, {colors: true});
  });