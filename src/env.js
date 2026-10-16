import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	STRIPE_KEY: {
		public: true
	},
	STRIPE_API_KEY: {
		public: false
	},
	PRICE_ID: {
		public: false
	},
	FRONTEND_URL: {
		public: true
	}
});
