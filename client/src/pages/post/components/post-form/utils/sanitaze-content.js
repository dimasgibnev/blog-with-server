export const sanitazeContent = (content) => {
	return content
	.replaceAll('<br>', '\n')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
};
