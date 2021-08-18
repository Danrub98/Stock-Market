// Save the stocks that the user buys on local storage

// Get the saved stocks
export const getSavedStocks = () => {
  const savedStocksIds = localStorage.getItem('saved_stocks')
    ? JSON.parse(localStorage.getItem('saved_stocks'))
    : [];

  return savedStocksIds;
};

// Save the stocks
export const savedStocksIds = (stockIdArr) => {
  if (stockIdArr.length) {
    localStorage.setItem('saved_stocks', JSON.stringify(stockIdArr));
  } else {
    localStorage.removeItem('saved_stocks');
  }
};

// Remove the stocks
export const removeStockId = (stockId) => {
  const savedStocksIds = localStorage.getItem('saved_stocks')
    ? JSON.parse(localStorage.getItem('saved_stocks'))
    : null;

  if (!savedStocksIds) {
    return false;
  }

  // Update the portfolio
  const updatedSavedStocksIds = savedStocksIds?.filter((savedStockId) => savedStockId !== stockId);
  localStorage.setItem('saved_stocks', JSON.stringify(updatedSavedStocksIds));

  return true;
};
