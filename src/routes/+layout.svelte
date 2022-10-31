<script lang="typescript">
	import type { PrismicDocument } from '@prismicio/types';
	export let data: { pages: PrismicDocument<{ title: string }>[] };
</script>

<nav>
	<div>
		<p>Xiomara Ovalles</p>
	</div>
	<div>
		{#each data.pages as page}
			<a href={page.uid}>
				{page.data.title}
			</a>
		{/each}
	</div>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px 5px 20px;
	}
</style>
