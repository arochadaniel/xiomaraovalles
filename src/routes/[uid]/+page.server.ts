import type { PageDocument } from '$types';
import type { PageServerLoad } from './$types';
import createClient from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, request, params }) => {
	const client = createClient({ fetch, request });
	const page = await client.getByUID<PageDocument>('page', params.uid);

	if (!page) {
		return error(404, 'Not found');
	}

	return { page };
};
