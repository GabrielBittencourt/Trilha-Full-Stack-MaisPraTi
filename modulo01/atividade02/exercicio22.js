const prompt = require('prompt-sync')()

function populationData() {
  let salarys = []
  let childrens = []
  let verification = true

  while (verification) {
    let salary = parseFloat(prompt("Digite o salário da pessoa: R$ "))
    let children = parseInt(prompt("Digite o número de filhos da pessoa: "))

    salarys.push(salary)
    childrens.push(children)

    let answer = prompt("Deseja continuar? (s/n): ")
    if (answer.toLowerCase() !== 's') {
      verification = false
    }
  }

  let totalSalarys = 0
  let totalChildren = 0

  for (let i = 0; i < salarys.length; ++i) {
    totalSalarys += salarys[i]
  }

  for (let i = 0; i < childrens.length; ++i) {
    totalChildren += childrens[i]
  }

  let mediaSalarys = totalSalarys / salarys.length
  let mediaChildren = totalChildren / childrens.length

  let biggerSalary = salarys[0]
  for (let i = 1; i < salarys.length; ++i) {
    if (salarys[i] > biggerSalary) {
      biggerSalary = salarys[i]
    }
  }

  let salarysUntil350 = 0
  for (let i = 0; i < salarys.length; ++i) {
    if (salarys[i] <= 350) {
      salarysUntil350++
    }
  }

  let percentualSalarysUntil350 = (salarysUntil350 / salarys.length) * 100

  console.log("Média de salário da população: R$" + mediaSalarys.toFixed(2))
  console.log("Média do número de filhos: " + mediaChildren.toFixed(2))
  console.log("Maior salário: R$" + biggerSalary.toFixed(2))
  console.log("Percentual de pessoas com salário até R$ 350,00: " + percentualSalarysUntil350.toFixed(2) + " %")
}

populationData()
