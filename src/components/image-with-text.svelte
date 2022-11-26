<script lang="typescript">
	import type { ImagesSliceItem } from '$types/page-document';

	export let item: ImagesSliceItem;
	let open = false;
	const handleDialog = (newOpen: boolean) => {
		open = newOpen;
	};
</script>

<div>
	<img
		id="previewImg"
		width="100%"
		height="200px"
		src={item.image.url}
		alt={item.image_description}
	/>
	<h4>{item.image_title}</h4>
	<button on:click={() => handleDialog(true)}>Detalles</button>
	{#if open}
		<div id="backdrop" />
	{/if}
	<dialog {open}>
		<img id="dialogImg" src={item.image.url} alt={item.image_description} />
		<h2>{item.image_title}</h2>
		<p>{item.image_description}</p>
		<button on:click={() => handleDialog(false)}>Cerrar</button>
	</dialog>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		align-items: center;
		border: solid 1px #1e1e1e;
		padding: 2.5rem;
		border-radius: 2%;
		transition: all 0.15s;
	}

	dialog[open] {
		position: fixed;
		inset: 0;
		background-color: black;
		border: solid 1px #1e1e1e;
		color: #ededed;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-radius: 1%;
		overflow: auto;
		transition: all 0.15s;
	}

	dialog p {
		font-size: 0.9rem;
	}

	#backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.75);
		animation: fade-in 0.15s;
		width: 100%;
		height: 100%;
	}

	#previewImg {
		object-fit: cover;
		border-radius: 2%;
	}

	#dialogImg {
		width: 800px;
		height: 400px;
		object-fit: contain;
	}

	h4 {
		text-align: center;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media screen and (max-width: 600px) {
		#dialogImg {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>
