const prompt = require('prompt-sync')()
employees = []

function createRegister(name, registration, salary) {
    return {
      name: name,
      registration: registration,
      salary: salary
    }
}
function readRegister(employee) {
    console.log("Matricula: " + employee.registration)
    console.log("Nome: " + employee.name)
    console.log("Salário bruto: " + employee.salary)
    console.log("Dedução INSS: 12%")
    console.log("Salário líquido: " + (employee.salary*.88))
}

for(let i = 0; i < 80; ++i) {
    let name = prompt("Digite o nome do funcionário: ")
    registration = i+1
    let salary = parseInt(prompt("Digite o salário do funcionário: "))    
    employees[i] = createRegister(name, registration, salary)
}

for(i = 0; i < 80; ++i) {
    readRegister(employees[i])
}



  