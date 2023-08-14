import React, { FC } from 'react';
import { IPost } from '../models/IPost';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PostListProps {
	posts: IPost[];
	title: string;
}

const PostList: FC<PostListProps> = ({ posts, title }) => {
	if (!posts.length) {
		return <div className="post-list__title">Posts not found</div>;
	}

	return (
		<>
			<h1 className="post-list__title">{title}</h1>
			<TransitionGroup>
				{posts &&
					posts.map((post: IPost) => (
						<CSSTransition
							key={post.id}
							timeout={300}
							unmountOnExit
							classNames="post-transition"
						>
							<PostItem post={post} />
						</CSSTransition>
					))}
			</TransitionGroup>
		</>
	);
};

export default PostList;
