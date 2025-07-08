const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paymentRepository = require("../repositories/paymentRepository");

const createCheckoutSession = async (req, res) => {
  try {
    const { products, totalPrice, user, cargoFee } = req.body;
    const lineItems = paymentRepository.generateLineItems(products, cargoFee);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: user.email,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
};

module.exports = {
  createCheckoutSession,
};
