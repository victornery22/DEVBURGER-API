import Stripe from "stripe";
import * as Yup from 'yup';
const stripe = require("stripe")('sk_test_51QIq2uKicKsYVblDg3jvTU0wSxb1HyuxGxrxW9Kedyf9pjy4HUbP7Z4iLRyJ1OnRUSsAMZ7RkmVcAlLwUbbJYhXs00PJBMFD8U');

const calcuculateOrderAmount = (items) => {
    const total = items.reduce((acc, current) => {
        return acc + current.price * current.quantity + acc        
    }, 0);
    return total;
}
class CreatePaymentIntentController {
    async store(request, response) {
        const schema = Yup.object().shape({
            products: Yup.array().required().of(
                Yup.object().shape({
                    id: Yup.number().required(),
                    quantity: Yup.number().required(),
                    price: Yup.number().required(),
                })
            )
        });
        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }
        const { products } = request.body;

        const amount = calcuculateOrderAmount(products);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "brl",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  response.json({
    clientSecret: paymentIntent.client_secret,
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
    }
}
export default new CreatePaymentIntentController();