const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//should only have 1 manager
  // name
  //id
  // let manger = new Manager ()
  // create team function
// can have mulitple roles 

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your name here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your ID? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your ID here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your email here."
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your office here here."
            }
            return true;
        }
    },
    {
        type: 'confirm',
        name: 'addMembers',
        message: "Would you like to add more members to your team?"
    }

]