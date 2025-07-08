exports.generateLineItems = (products, cargoFee) => {
  const lineItems = products.map((product) => {
    const unitPrice = product.price - product.price * (product.discount / 100);
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
        },
        unit_amount: Math.round(unitPrice * 100), // Stripe fiyatı cent cinsinden ister
      },
      quantity: product.quantity || 1,
    };
  });

  if (cargoFee > 0) {
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Fast Cargo",
        },
        unit_amount: Math.round(cargoFee * 100),
      },
      quantity: 1,
    });
  }

  return lineItems;
};
