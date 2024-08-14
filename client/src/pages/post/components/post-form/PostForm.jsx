import { MyIcon, MyInput } from '../../../../ui';
import { SpecialPanel } from '../special-panel/SpecialPanel';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitazeContent } from './utils';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../../store/actions';
import { useNavigate } from 'react-router-dom';
import { PROP_TYPE } from '../../../../constants';
import styled from 'styled-components';

const PostFormContainer = ({
	className,
	post: { id, imageUrl, title, publishedAt, content },
}) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSave = () => {
		const newContent = sanitazeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(id,{
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<MyInput
				onChange={({ target }) => setImageUrlValue(target.value)}
				value={imageUrlValue}
				placeholder="Изображение..."
			/>
			<MyInput
				onChange={({ target }) => setTitleValue(target.value)}
				value={titleValue}
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				id={id}
				margin="20px 0"
				publishedAt={publishedAt}
				editButton={<MyIcon id={'fa-floppy-o'} onClick={onSave} />}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	margin-bottom: 20px;

	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .post-text {
		min-height: 80px;
		border: 1px solid black;
		white-space: pre-line;
		font-size: 22px;
	}
`;

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
