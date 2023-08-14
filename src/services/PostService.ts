import axios from 'axios';
import { postSlice } from './../store/reducers/PostSlice';
import { AppDispatch } from '../store/store';
import { IPost } from '../models/IPost';
import { IComment } from '../models/IComment';

export const fetchPosts =
	(limit = 10, page = 1) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(postSlice.actions.postsFetching());
			const response = await axios.get<IPost[]>(
				`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
			);
			const totalCount = parseInt(response.headers['x-total-count'], 10);
			dispatch(
				postSlice.actions.postsFetchingSuccess({
					data: response.data,
					totalCount,
				})
			);
		} catch (error: any) {
			dispatch(postSlice.actions.postsFetchingError(error.message));
		}
	};

export const fetchPostById = (id: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(postSlice.actions.postsFetching());
		const response = await axios.get<IPost>(
			'https://jsonplaceholder.typicode.com/posts/' + id
		);
		const commentResponse = await axios.get<IComment[]>(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		dispatch(
			postSlice.actions.getPostById({
				data: response.data,
				comment: commentResponse.data,
			})
		);
	} catch (error: any) {
		dispatch(postSlice.actions.postsFetchingError(error.message));
	}
};
