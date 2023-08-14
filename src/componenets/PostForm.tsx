import React, { useState, MouseEvent, FC } from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';
import { useAppDispatch } from '../hooks/redux';
import { addNewPostAction } from '../store/reducers/ActionCreators';

const PostForm: FC = () => {
	const dispatch = useAppDispatch();
	const [post, setPost] = useState({ title: '', body: '' });

	const handleAddNewPost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(addNewPostAction({ ...post, id: Date.now() }));
		setPost({ title: '', body: '' });
	};

	return (
		<form className="post-list__form">
			<div className="post-list__form-input">
				<Input
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
					placeholder="Post title"
				/>
			</div>
			<div className="post-list__form-input">
				<Input
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
					placeholder="Post description"
				/>
			</div>
			<Button onClick={handleAddNewPost}>Add post</Button>
		</form>
	);
};

export default PostForm;
