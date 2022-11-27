<script lang="typescript">
	import Typewriter from 'svelte-typewriter';
	import ImagesSliceMapper from '$components/images-slice-mapper.svelte';
	import type { PageDocument } from '$types';
	export let data: { page: PageDocument };
</script>

<svelte:head>
	<title>
		{data.page.data.title}
	</title>
	<meta name="description" content={data.page.data.description} />
</svelte:head>

<div>
	<header>
		<Typewriter>
			<h1>{data.page.data.title}</h1>
		</Typewriter>
		<h2>{data.page.data.description}</h2>
	</header>
	<div id="slices-container">
		{#each data.page.data.body as slice}
			<ImagesSliceMapper
				title={slice.primary.images_title}
				description={slice.primary.images_description}
				items={slice.items}
			/>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');

	header {
		min-height: 15rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30px;
		border-bottom: solid 1px #1e1e1e;
	}

	h1 {
		font-size: 3.5rem;
		font-family: 'Nanum Gothic Coding', 'Nanum Gothic', Arial, Helvetica, sans-serif;
	}

	h2 {
		font-weight: 400;
	}

	#slices-container {
		padding: 40px 30px;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
</style>
