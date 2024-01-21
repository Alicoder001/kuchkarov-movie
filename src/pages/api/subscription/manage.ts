import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { SubstitutionType } from "typescript";

const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;
const stripe = new Stripe(secretKey, { apiVersion: "2022-11-15" });
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { user_id } = req.body;
      const customers = await stripe.customers.list();
      const customer = customers.data.find(
        (item) => item.metadata.user_id === user_id
      );
      if (!customer) {
        return res.status(404).json({ message: "Customer not found!" });
      }
      const portal = await stripe.billingPortal.sessions.create({
        customer: customer.id,
        return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/account`,
      });
      return res.status(200).json({ portal: portal.url });
    } catch (error) {
      const result = error as Error;
      console.log(error);
      return res.status(400).json({ message: result.message });
    }
  }
}
interface Data {
  portal?: string;
  message?: string;
}
