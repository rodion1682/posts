import { useEffect, useState, FC } from 'react';
import '../scss/posts.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { sortPostsAction } from '../store/reducers/ActionCreators';
import PostList from '../componenets/PostList';
import PostForm from '../componenets/PostForm';
import PostFilter from '../componenets/PostFilter';
import Modal from '../componenets/UI/modal/Modal';
import Button from '../componenets/UI/button/Button';
import { useSortedPosts } from '../hooks/usePost';
import Loader from '../componenets/UI/loader/Loader';
import { getPagesCount } from '../utils/pages';
import Pagination from '../componenets/UI/pagination/Pagination';
import { fetchPosts } from '../services/PostService';

const Posts: FC = () => {
	const dispatch = useAppDispatch();
	const { posts, isLoading, error, totalCount, isLoaded } = useAppSelector(
		(state) => state.postReducer
	);

	const [filter, setFilter] = useState({
		sort: '',
		query: '',
	});
	const [modal, setModal] = useState(false);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		dispatch(fetchPosts(limit, page));
	}, [page]);

	useEffect(() => {
		if (isLoaded) {
			setTotalPages(getPagesCount(totalCount, limit));
		}
	}, [isLoaded]);

	useEffect(() => {
		dispatch(sortPostsAction(filter.sort));
	}, [filter.sort]);

	useEffect(() => {
		setModal(false);
	}, [posts.length]);

	const searchedPosts = useSortedPosts(posts, filter.query);

	return (
		<div className="post-list">
			<div className="post-list__button">
				<Button onClick={() => setModal(true)}>Create user</Button>
			</div>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm />
			</Modal>
			<div className="post-list__search">
				<PostFilter filter={filter} setFilter={setFilter} />
			</div>
			<div className="post-list__body">
				{error ? (
					<div>{error}</div>
				) : isLoading ? (
					<Loader />
				) : (
					<PostList posts={searchedPosts} title={'Post list'} />
				)}
			</div>
			<div className="post-list__pagination">
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default Posts;
