import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: 'Projeto 04-Ignite_shop',
  }
})