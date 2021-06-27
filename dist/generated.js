function getRole(teamList) {

    let role = ''

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Manager'){
              role += `    <div class="card" style="width: 18rem;">
              <div class="card-header">
                Manger
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: ${teamList[i].email}</li>
                <li class="list-group-item">Office Number: ${teamList[i].officeNumber}</li>
              </ul>
            </div>`  
        }
    }

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Engineer'){
              role += `    <div class="card" style="width: 18rem;">
              <div class="card-header">
                Engineer
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: ${teamList[i].email}</li>
                <li class="list-group-item">GitHub: ${teamList[i].github}</li>
              </ul>
            </div>`  
        }
    }

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Intern'){
              role += `    
              <div class="card" style="width: 18rem;">
              <div class="card-header">
                Intern
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: ${teamList[i].email}</li>
                <li class="list-group-item">School: ${teamList[i].school}</li>
              </ul>
            </div>`  
        }
    }

    return role
}


function generateMarkdown(teamList) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Challenge 10 OOP Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">My Team</span>
  </div>
</nav>

${getRole(teamList)};



</body>
</html>
    `
}

module.exports = generateMarkdown;