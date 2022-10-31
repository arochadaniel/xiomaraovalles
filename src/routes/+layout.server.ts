import type { LayoutServerLoad } from './$types';
import createClient from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch, request }) => {
	const client = createClient({ fetch, request });
	const pages = await client.getAllByType('page');

	if (!pages.length) {
		return error(404, 'Not found');
	}

	return { pages };
};
