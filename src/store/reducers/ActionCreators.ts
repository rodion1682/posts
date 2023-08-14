import { AppDispatch } from '../store';
import { IPost } from '../../models/IPost';
import { postSlice } from './PostSlice';

export const addNewPostAction = (post: IPost) => (dispatch: AppDispatch) => {
	try {
		dispatch(postSlice.actions.addNewPost(post));
	} catch (error: any) {
		dispatch(postSlice.actions.postsFetchingError(error.message));
	}
};

export const deletePostAction = (id: number) => (dispatch: AppDispatch) => {
	try {
		dispatch(postSlice.actions.deletePost(id));
	} catch (error: any) {
		dispatch(postSlice.actions.postsFetchingError(error.message));
	}
};

export const sortPostsAction =
	(sort: string) =>
	(dispatch: AppDispatch): void => {
		try {
			dispatch(postSlice.actions.sortPosts(sort));
		} catch (error: any) {
			dispatch(postSlice.actions.postsFetchingError(error.message));
		}
	};
