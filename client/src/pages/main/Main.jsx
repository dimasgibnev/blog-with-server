import { useEffect, useMemo, useState } from 'react';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils/debounce';
import { request } from '../../utils/request';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { lastPage, posts } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});
	}, [page, searchPhrase, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="post-search">
				<Search onChange={onSearch} searchPhrase={searchPhrase} />
			</div>
			<div className="post-list">
				{posts.length ? (
					posts.map(({ id, title, publishedAt, comments, imageUrl }) => {
						return (
							<PostCard
								imageUrl={imageUrl}
								key={id}
								id={id}
								title={title}
								publishedAt={publishedAt}
								commentsCount={comments}
							/>
						);
					})
				) : (
					<h3 className="no-post-found">Статьи не найдены!</h3>
				)}
			</div>

			{lastPage > 1 && (
				<Pagination setPage={setPage} page={page} lastPage={lastPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	padding: 20px 10px;

	& .post-list {
		display: flex;
		flex-flow: row wrap;
		gap: 30px;
		margin-bottom: 40px;
		min-height: 720px;
	}
	& .no-post-found {
		margin: 0 auto;
		text-align: center;
	}
`;
