<script lang="typescript">
	import PrismicPage from '$components/prismic-page.svelte';
	import type { PageDocument } from '$types';
	export let data: { page: PageDocument };
</script>

<PrismicPage {data} />
