import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
const stripe = new Stripe(secretKey, { apiVersion: "2022-11-15" });
export default async function handlerr(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;
  if (method === "POST") {
    try {
      const customer = await stripe.customers.create({
        email: body.email,
      });
      return res.status(200).json({ message: "Succesfully, customer added!" });
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
  products?: Stripe.Response<Stripe.ApiList<Stripe.Product>>;
};
