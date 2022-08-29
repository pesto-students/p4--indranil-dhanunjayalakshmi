function stockProfit(prices) {
    let buyStock = prices[0];
    let profit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      buyStock = Math.min(buyStock, prices[i-1]);
      profit = Math.max(profit, prices[i]-buyStock);
    }
    return profit;
  }
  
  stockProfit([7,1,5,3,6,4]);
  