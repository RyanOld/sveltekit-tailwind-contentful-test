import contentful from 'contentful';
import dotenv from 'dotenv';
dotenv.config();

export const client = contentful.createClient({
	// @ts-ignore
	space: process.env.CONTENTFUL_SPACE_ID,
	// @ts-ignore
	accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN
});
