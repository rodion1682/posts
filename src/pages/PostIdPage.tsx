import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Loader from '../componenets/UI/loader/Loader';
import '../scss/postIdPage.scss';
import { fetchPostById } from '../services/PostService';

const PostIdPage: FC = () => {
	const { id } = useParams();

	const dispatch = useAppDispatch();
	const { posts, isLoading, error, comments } = useAppSelector(
		(state) => state.postReducer
	);

	useEffect(() => {
		if (id) {
			dispatch(fetchPostById(id));
		}
	}, []);

	if (!posts.length) {
		return <Loader />;
	}

	return (
		<div className="post-page">
			<div className="post-page__title">
				You opened the post page with ID: {id}
			</div>
			{error ? (
				<div>{error}</div>
			) : isLoading ? (
				<Loader />
			) : (
				<>
					<div className="post-page__top">
						<div className="post-page__id">{posts[0].id}.</div>
						<div className="post-page__label">{posts[0].title}</div>
					</div>
					<div className="post-page__body">{posts[0].body}</div>
					<div>
						<div className="post-page__small-title">Comments:</div>
						{comments.map((comment) => (
							<div key={comment.id} className="post-page__content">
								<div className="post-page__user">{comment.email}</div>
								<div className="post-page__text">{comment.body}</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default PostIdPage;
