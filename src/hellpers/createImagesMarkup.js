export function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img 
			class="gallery-image" 
			src="${preview}" 
			alt="${description}"
			/>
	</a>
</li>
`;
    })
    .join('');
}
