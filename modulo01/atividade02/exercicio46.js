function totalSalesPerSaler(sales){
    let salesSummary = {}
  
    for(let i = 0; i < sales.length; ++i){
      let sale = sales[i]
      let saler = sale.saler
      let value = sale.value
  
      if(salesSummary[saler]){
        salesSummary[saler] += value
      }else{
        salesSummary[saler] = value
      }
    }
    return salesSummary
  }
  
  let sales = [
    { saler: "Gabriel", value: 1000 },
    { saler: "Bittencourt", value: 2000 },
    { saler: "Gabriel Bittencourt", value: 1500 },
    { saler: "Gabriel", value: 250 },
    { saler: "Bittencourt", value: 100 },
  ]
  
  let resume = totalSalesPerSaler(sales)
  console.log("Resumo das Vendas por Vendedor: ", resume)
  