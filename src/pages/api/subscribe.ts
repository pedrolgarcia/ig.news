import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { stripe } from '../../services/stripe'

const subcribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method now allowed')
  }

  const session = await getSession({ req })

  if (!session?.user?.email) {
    res.status(400).end('Unknown user e-mail')
    return
  }

  const stripeCustomer = await stripe.customers.create({
    email: session?.user?.email,
  })

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [{ price: 'price_1M4UnLHmcPsCHD7ebYrZPMdN', quantity: 1 }],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  })

  return res.status(200).json({ sessionId: stripeCheckoutSession.id })
}

export default subcribe
