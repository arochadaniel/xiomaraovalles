<script lang="typescript">
	import ImagesSliceMapper from '$components/images-slice-mapper.svelte';
	import type { PageDocument } from '$types';
	export let data: { page: PageDocument };
</script>

<div>
	<h1>{data.page.data.title}</h1>
	<h2>{data.page.data.description}</h2>
	{#each data.page.data.body as slice}
		<ImagesSliceMapper items={slice.items} />
	{/each}
</div>
