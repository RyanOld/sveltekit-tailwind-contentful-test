import contentful from 'contentful';
import dotenv from 'dotenv';
dotenv.config();

export const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN
});
