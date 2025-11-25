function processProducts(products) {
  // 1. Use map() to get only product names
  const productNames = products.map(item => item.name);

  // 2. Use forEach() to log based on price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(${product.name} is above $50);
    } else {
      console.log(${product.name} is below $50);
    }
  });

  // Return the names array (optional but useful)
  return productNames;
}

// Example Input
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

// Function Call
processProducts(items);