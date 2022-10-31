import type { FilledImageFieldImage, PrismicDocument, Slice, SliceZone } from '@prismicio/types';

export type PageDocument = PrismicDocument<{
	title: string;
	description: string;
	body: SliceZone<ImagesSlice, 'filled'>;
}>;

export type ImagesSlice = Slice<'images', ImagesSlicePrimaryFields, ImagesSliceItem>;

export type ImagesSlicePrimaryFields = { images_title: string; images_description: string };

export type ImagesSliceItem = {
	image_title: string;
	image_description: string;
	image: FilledImageFieldImage;
};
