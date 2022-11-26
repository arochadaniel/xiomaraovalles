<script lang="typescript">
	import type { PrismicDocument } from '@prismicio/types';

	export let pages: PrismicDocument[];
</script>

{#each pages as page}
	<a class="link" href={page.uid}>
		{page.data.title}
	</a>
{/each}

<style>
	a {
		transition: all 0.15s;
	}

	a:hover {
		opacity: 0.5;
	}
</style>
