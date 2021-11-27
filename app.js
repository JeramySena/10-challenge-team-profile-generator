// require inquirer
const inquirer = require('inquirer');
//generate html page
const generatePage = require("./src/page-template");
const { writeFile } = require('./utils/generate-site');

// import manager, engineer, and intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty array for team
const teamMemberArray = [];

// prompts/questions to build team
const addManager = () => {
  return inquirer.prompt([
     {
      type: "input",
      name: "name",
      message: "Enter manager's name? (Required)",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Please enter manager's name!");
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter manager's ID number (Required)",
      validate: (managerId) => {
        if (managerId) {
          return true;
        } else {
          console.log("Please enter manager's ID number!");
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter manager's email address (Required)",
      validate: (managerEmail) => {
        if (managerEmail) {
          return true;
        } else {
          console.log("Please enter managers email address!");
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter manager's office number (Required)",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter manager's office number!");
        }
      },
    },
  ])
  .then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager (name, id, email, officeNumber);
    teamMemberArray.push(manager);
  })
};

const addTeamMember = () => {
  console.log(`
  =================
  Add Team Member:
  =================
  `);
  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose your team member's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "Enter team member's name (Required)?", 
          validate: (teamMemberName) => {
            if (teamMemberName) {
              return true;
            } else {
              console.log("Please enter team member's name!");
            }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter team member's ID number. (Required)",
          validate: (teamMemberId) => {
            if (teamMemberId) {
              return true;
            } else {
              console.log("Please enter team member's ID!");
            }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter team member's email. (Required)",
          validate: (teamMemberEmail) => {
            if (teamMemberEmail) {
              return true;
            } else {
              console.log("Please enter team member's email!");
            }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Enter Engineer's Github username. (Required)",
          when: (input) => input.role === "Engineer",
          validate: (engineerGithub) => {
            if (engineerGithub) {
              return true;
            } else {
              console.log("Please enter Engineer's Github username!");
            }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Enter Intern's school. (Required)",
          when: (input) => input.role === "Intern",
          validate: (internSchool) => {
            if (internSchool) {
              return true;
            } else {
              console.log("Please enter team member's school!");
            }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddTeamMember',
          message: 'Do you want to add another team member?',
          default: false
      }
  ])
  .then(teamMemberData => {
      let { name, id, email, role, github, school, confirmAddTeamMember } = teamMemberData; 
      let teamMember; 
      if (role === "Engineer") {
          teamMember = new Engineer (name, id, email, github);
          console.log(teamMember);
      } else if (role === "Intern") {
          teamMember = new Intern (name, id, email, school);
          console.log(teamMember);
      }
      teamMemberArray.push(teamMember); 
      if (confirmAddTeamMember) {
          return addTeamMember(teamMemberArray); 
      } else {
          return teamMemberArray;
      }
  })
};


addManager()
.then(addTeamMember)
.then(teamMemberArray => {
  return generatePage(teamMemberArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
  console.log(err);
console.log(err);
}); 
