import type { PageDocument } from '$types';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';
import createClient from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, request }) => {
	const client = createClient({ fetch, request });
	const page = await client.getByUID<PageDocument>('page', 'arte');

	if (!page) {
		return error(404, 'Not found');
	}

	return { page };
};
