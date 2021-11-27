// this page is for template literal for employee cards

const generateManager = function (manager) {
  return `
        <div class="card employee-card">
  <div class="card-header bg-primary">
      <h2 class="card-title text-white">${manager.name}</h2>
      <h3 class="card-title text-white"><i class="fa-light fa-mug-hot"></i> Manager</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">${manager.officeNumber}</li>
      </ul>
  </div>
</div>
    `;
};

const generateEngineer = function (engineer) {
  return `
      <div class="card employee-card">
  <div class="card-header bg-primary">
      <h2 class="card-title text-white">${engineer.name}</h2>
      <h3 class="card-title text-white"><i class="fas fa-glasses"></i> Engineer</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
      </ul>
  </div>
</div>
    `;
};

const generateIntern = function (intern) {
  return `
 
     <div class="card employee-card">
  <div class="card-header bg-primary">
      <h2 class="card-title text-white">${intern.name}</h2>
      <h3 class="card-title text-white"><i class="fa-light fa-user-graduate"></i> Intern</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">${intern.school}</li>
      </ul>
  </div>
</div>
    `;
};

generatePage = (data) => {
  // array for cards
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join("");
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

const generateTeamPage = function (teamMemberCards) {
  return `
      <!DOCTYPE html> 
<html lang="en"> 

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="./src/style.css">
</head>

<body>
<header>
  <div class="p-3 mb-2 bg-danger text-white text-center">
    <h1>My Team</h1>
  </div>
</header>


<main class="container">
${teamMemberCards}
</main>

<footer></footer>
</body>
</html>
    `;
};

module.exports = generatePage;
