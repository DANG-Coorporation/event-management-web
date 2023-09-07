export const convertNumberToCurrency = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const getLowestPrice = (ticketArray) => {
  if (!Array.isArray(ticketArray) || ticketArray.length === 0) {
    return null; // Return null for an empty or invalid array
  }

  let lowestPrice = ticketArray[0].price; // Initialize with the first price

  for (let i = 1; i < ticketArray.length; i++) {
    const currentPrice = ticketArray[i].price;
    if (typeof currentPrice === "number" && currentPrice < lowestPrice) {
      lowestPrice = currentPrice; // Update lowestPrice if a lower price is found
    }
  }

  return lowestPrice;
};
  