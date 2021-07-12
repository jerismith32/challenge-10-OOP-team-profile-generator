function getRole(teamList) {

    let role = ''

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Manager'){
              role += `    
              <div class="card text-center" style="width: 18rem;">
              <div class="card-header text-white text-center" style="background-color: #21113c;">
                Manger
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${teamList[i].email}">${teamList[i].email}</a></li>
                <li class="list-group-item">Office Number: ${teamList[i].officeNumber}</li>
              </ul>
            </div>`  
        }
    }

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Engineer'){
              role += `    
              <div class="card text-center" style="width: 18rem;">
              <div class="card-header text-white" style="background-color: #6f42c1;">
                Engineer
              </div>
              <ul class="list-group list-group-flush card-text">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${teamList[i].email}">${teamList[i].email}</a></li>
                <li class="list-group-item">GitHub: ${teamList[i].github}</li>
              </ul>
            </div>`  
        }
    }

    for (let i=0; i < teamList.length; i++) {
        if (teamList[i].getRole() === 'Intern'){
              role += `    
              <div class="card text-center" style="width: 18rem;">
              <div class="card-header text-white" style="background-color: #9777d1;"">
                Intern
              </div>
              <ul class="list-group list-group-flush card-text">
                <li class="list-group-item">${teamList[i].name}</li>
                <li class="list-group-item">ID: ${teamList[i].id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${teamList[i].email}">${teamList[i].email}</a></li>
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
  <div class="container-fluid container-fluid text-center" style="background-color: #dbcfdf;">
    <span class="navbar-brand mb-0 h1 text-center">My Team</span>
  </div>
</nav>

<div class="card-deck>
${getRole(teamList)};
</div>


</body>
</html>
    `
}

module.exports = generateMarkdown;