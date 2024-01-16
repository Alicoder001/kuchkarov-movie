import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { SubstitutionType } from "typescript";

const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
const stripe = new Stripe(secretKey, { apiVersion: "2022-11-15" });
export default async function handlerr(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;
  if (method === "POST") {
    try {
      const public_domain = process.env.NEXT_PUBLIC_DOMAIN as string;
      const customers = await stripe.customers.list({ limit: 100 });
      const curtomer = customers.data.find((item) => item.email === body.email);
      const subscription = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{ price: body.priceId, quantity: 1 }],
        customer: curtomer?.id,
        success_url: `${public_domain}/success`,
        cancel_url: `${public_domain}/cancel`,
      });
      return res.status(200).json({ subscription });
    } catch (error) {
      const result = error as Error;
      console.log(error);
      return res.status(400).json({ message: result.message });
    }
  } else {
    return res.status(400).json({ message: "Method not allowed!" });
  }
}

type Data = {
  message?: string;
  subscription?: Stripe.Response<Stripe.Checkout.Session>;
};
