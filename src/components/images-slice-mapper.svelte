<script lang="typescript">
	import type { ImagesSliceItem } from '$types/page-document';
	import ImageWithText from './image-with-text.svelte';

	export let items: ImagesSliceItem[];
	export let title: string;
	export let description: string;
</script>

<section>
	<h3>{title}</h3>
	<h4>{description}</h4>
	<div>
		{#each items as item}
			<ImageWithText {item} />
		{/each}
	</div>
</section>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	h4 {
		font-weight: 400;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	@media screen and (max-width: 1200px) {
		div {
			display: flex;
			flex-direction: column;
		}
	}
</style>
