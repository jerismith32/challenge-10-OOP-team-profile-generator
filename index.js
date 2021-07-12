const { listenerCount } = require('events');
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatedMarkdown = require('./dist/generated');

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
                return "Please make sure you enter your office number here."
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

const engineerQuestions = [
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
        name: 'github',
        message: "What is your github? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your github here."
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

const internQuestions = [
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
        name: 'school',
        message: "What school did you attend? (Required)",
        validate: (input) => {
            if (input === '') {
                return "Please make sure you enter your school here."
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

let teamList = [];

// TODO: Create a function to write file
function writeToFile() {
    // console.log(fileName);
    // console.log(data);
    console.log(teamList);
    fs.writeFile(`index.html`, generatedMarkdown(teamList), err => {
        if (err) {
            throw err
        };
        console.log('File has been successfully created!')
    });

};


function init() {
    inquirer.prompt(managerQuestions).then(function(data) {

        //console.log('data', data)

        //need create new manager
        let managerData = new Manager (data.name, data.id, data.email, data.officeNumber)
        teamList.push(managerData);

        if(data.addMembers === true){
            createNewTeam();
        }else{
            writeToFile()
        }
       
    })
};

function createNewTeam() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'teamSelection',
                message: "Would you like to add an Engineer or Intern?",
                choices: ['Engineer', 'Intern', 'Cancel']
            }
        ]
    ).then(function(data){
        if (data.teamSelection === 'Engineer') {
            createEngineer();
        } else if (data.teamSelection === 'Intern') {
            createIntern();
        } else writeToFile();
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions).then(function(data){

    let engineerData = new Engineer (data.name, data.id, data.email, data.github)
    teamList.push(engineerData);
    if(data.addMembers === true){
        createNewTeam();
    }else{
        writeToFile()
    }
    })
    
}

function createIntern() {
    inquirer.prompt(internQuestions).then(function(data){

    let internData = new Intern (data.name, data.id, data.email, data.school)
    teamList.push(internData);
    if(data.addMembers === true){
        createNewTeam();
    }else{
        writeToFile()
    }
    })
    
}

// Function call to initialize app
init();