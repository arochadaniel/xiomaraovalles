<script lang="typescript">
	import Navbar from '$components/navbar.svelte';

	export const ssr = false;
	export const prerender = true;

	import type { PrismicDocument } from '@prismicio/types';
	export let data: { pages: PrismicDocument<{ title: string }>[] };
</script>

<main>
	<Navbar pages={data.pages} />
	<div id="page">
		<slot />
	</div>
	<footer>
		<h6 style="margin-bottom: 1rem; font-size: 1.25rem;">Contacto</h6>
		<div>
			<p>+58424-2415085</p>
			<p>xiomaraovalles1@gmail.com</p>
		</div>
	</footer>
</main>

<style>
	footer {
		display: flex;
		flex-direction: column;
		padding: 30px;
		border-top: solid 1px #1e1e1e;
	}

	footer > div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
