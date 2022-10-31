<script lang="typescript">
	import type { ImagesSliceItem } from '$types/page-document';
	import ImageWithText from './image-with-text.svelte';

	export let items: ImagesSliceItem[];
</script>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
	{#each items as item}
		<ImageWithText {item} />
	{/each}
</div>
