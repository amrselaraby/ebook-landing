import Stripe from 'stripe';
import { STRIPE_API_KEY, PRICE_ID } from '$app/env/private';
import { FRONTEND_URL } from '$app/env/public';

let stripe = new Stripe(STRIPE_API_KEY);

export async function POST() {
	try {
		const session = await stripe.checkout.sessions.create({
			allowed_payment_method_types: ['card'],
			line_items: [
				{
					price: PRICE_ID,
					quantity: 1
				}
			],
			mode: 'payment',
			success_url: `${FRONTEND_URL}/checkout/success`,
			cancel_url: `${FRONTEND_URL}/checkout/failure`
		});
		return Response.json({ url: session.url });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
