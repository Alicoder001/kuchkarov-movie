import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
const stripe = new Stripe(secretKey, { apiVersion: "2022-11-15" });
export default async function handlerr(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  if (method === "GET") {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });
    return res.status(200).json({ products });
  }
}

type Data = {
  message?: string;
  products?: Stripe.Response<Stripe.ApiList<Stripe.Product>>;
};
