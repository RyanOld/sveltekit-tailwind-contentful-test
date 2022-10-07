import { client } from '$lib/contentfulClient';

export async function get() {
	// get all blogs from Contentful
	const data = await client.getEntries({
		content_type: 'data'
	});

	if (data) {
		return {
			status: 200,
			body: {
				data
			}
		};
	}

	return {
		status: 404
	};
}
