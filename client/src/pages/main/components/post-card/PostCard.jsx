import PropTypes from 'prop-types'
import { MyIcon } from '../../../../ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
	height: 240px;
	border-bottom: 1px solid black;
`;

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<Image className="post-card-image" src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<MyIcon
								id={'fa-calendar-o'}
								margin="0 10px 0 0"
								isIcon={true}
							/>
							{publishedAt.slice(0, 10)}
						</div>
						<div className="comments-count">
							<MyIcon
								id={'fa-comment-o'}
								margin="0 10px 0 0"
								isIcon={true}
							/>
							{commentsCount.length }
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	border: 1px solid black;
	height: 350px;
	& h4 {
		padding: 5px;
	}
	& .post-card-footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5px;
	}
	& .post-card-info {
		display: flex;
		justify-content: space-between;
		padding: 5px;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.array.isRequired,
	imageUrl: PropTypes.string.isRequired,

}