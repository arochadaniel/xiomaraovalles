<script lang="typescript">
	import type { ImagesSliceItem } from '$types/page-document';

	export let item: ImagesSliceItem;
</script>

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
	<img
		style="object-fit: contain;"
		width="200px"
		height="200px"
		src={item.image.url}
		alt={item.image_description}
	/>
	<h4>{item.image_title}</h4>
	<p>{item.image_description}</p>
</div>
