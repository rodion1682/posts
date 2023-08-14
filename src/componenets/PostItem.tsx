import React, { FC } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { IPost } from '../models/IPost';
import { deletePostAction } from '../store/reducers/ActionCreators';
import Button from './UI/button/Button';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
	post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleDeletePost = () => {
		dispatch(deletePostAction(post.id));
	};
	return (
		<>
			<div className="post">
				<div className="post__content">
					<div className="post__top">
						<div className="post__id">{post.id}.</div>
						<div className="post__title">{post.title}</div>
					</div>
					<div className="post__body">{post.body}</div>
				</div>
				<div className="post__actions">
					<Button onClick={handleDeletePost}>Delete</Button>
					<Button onClick={() => navigate(`/posts/${post.id}`)}>
						Open
					</Button>
				</div>
			</div>
		</>
	);
};

export default PostItem;
