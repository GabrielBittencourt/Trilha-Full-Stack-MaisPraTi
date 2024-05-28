function groupTransactions(obj) {
    let transactionHistory = {}
  
    for(let i = 0; i < obj.length; ++i){
      let transaction = obj[i]
      let category = transaction.category
  
      if(!transactionHistory[category]){
        transactionHistory[category] = {
            obj: [],
          subtotal: 0
        }
      }
  
      transactionHistory[category].obj.push(transaction)
      transactionHistory[category].subtotal += transaction.value
    }  
    return transactionHistory
}
  
let financialTransactions = [
    { id: 1, value: 1000, date: "24/05/2024", category: "fii" },
    { id: 2, value: 500, date: "22/05/2024", category: "bitcoin" },
    { id: 3, value: 2000, date: "23/05/2024", category: "bitcoin" },
    { id: 4, value: 1500, date: "22/05/2024", category: "fii" },
    { id: 5, value: 10000, date: "21/05/2024", category: "contraband" },
    { id: 6, value: 10000, date: "21/05/2024", category: "contraband" },
]
  
let transactionHistory = groupTransactions(financialTransactions)
console.log("Transações Agrupadas por Categoria:", JSON.stringify(transactionHistory, null, 2))
  