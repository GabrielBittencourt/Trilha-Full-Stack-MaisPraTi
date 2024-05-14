const prompt = require('prompt-sync')();

function createRegister(name, role, salary) {
    return {
      name: name,
      role: role,
      salary: salary
    };
}
function readRegister(employee) {
    console.log("Nome: " + employee.name);
    console.log("Cargo: " + employee.role);
    console.log("Salário: " + employee.salary);
}

let name = prompt("Digite o nome do funcionário: ")
let role = prompt("Digite o cargo do funcionário: ")
let salary = parseInt(prompt("Digite o salário do funcionário: "))

let employeeRegister = createRegister(name, role, salary);
readRegister(employeeRegister);
  