import * as prismic from '@prismicio/client';

const repoName = 'xiomaraovalles';

const createClient = ({ request, fetch }: { request: Request; fetch: prismic.FetchLike }) => {
	const clientOptions: prismic.ClientConfig = { fetch };

	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
