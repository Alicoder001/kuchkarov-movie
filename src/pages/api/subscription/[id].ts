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
  if (method === "GET") {
    try {
      const { id } = req.query;
      const customers = await stripe.customers.list();
      const customer = customers.data.find(
        (item) => item.metadata.user_id === id
      );
      if (!customer) {
        return res.status(404).json({ message: "Customer not found!" });
      }
      const subscription = await stripe.subscriptions.list({
        limit: 1,
        customer: customer?.id,
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
  subscription?: Stripe.Response<Stripe.ApiList<Stripe.Subscription>>;
};
