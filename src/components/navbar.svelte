<script lang="typescript">
	import type { PrismicDocument } from '@prismicio/types';
	import NavbarLinks from './navbar-links.svelte';

	let open = false;
	const handleMenu = () => {
		open = !open;
	};

	export let pages: PrismicDocument[];
</script>

<nav>
	<div>
		<p>Xiomara Ovalles</p>
	</div>
	<div class="desktop">
		<NavbarLinks {pages} />
	</div>
	<div class="mobile">
		<button on:click={handleMenu}>Menú</button>
	</div>
</nav>
{#if open}
	<div class="mobileMenu">
		<NavbarLinks {pages} />
	</div>
{/if}

<style>
	@media screen and (max-width: 1200px) {
		.desktop {
			display: none !important;
		}

		.mobile {
			display: block !important;
		}

		.mobileMenu {
			display: flex !important;
			flex-direction: column;
			position: absolute;
			gap: 0.5rem;
			top: 100px;
			background: #1e1e1e;
			border-bottom: solid 1px #1e1e1e;
			overflow: hidden;
			padding: 10px 30px;
			width: -webkit-fill-available;
		}
	}

	.desktop {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.mobileMenu {
		display: none;
	}

	.mobile {
		display: none;
	}

	nav {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 30px;
		height: 100px;
		border-bottom: solid 1px #1e1e1e;
	}
</style>
