import { IPost } from '../../models/IPost';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from '../../models/IComment';

interface PostState {
	posts: IPost[];
	isLoading: boolean;
	error: string;
	totalCount: number;
	isLoaded: boolean;
	comments: IComment[];
}

const initialState: PostState = {
	posts: [],
	isLoading: false,
	error: '',
	totalCount: 0,
	isLoaded: false,
	comments: [],
};

type PostSort = {
	title: string;
	body: string;
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		postsFetching: (state) => {
			state.isLoaded = false;
		},
		postsFetchingSuccess: (
			state,
			action: PayloadAction<{ data: IPost[]; totalCount: number }>
		) => {
			state.isLoading = false;
			state.error = '';
			state.posts = action.payload.data;
			state.totalCount = action.payload.totalCount;
			state.isLoaded = true;
		},
		getPostById: (
			state,
			action: PayloadAction<{ data: IPost; comment: IComment[] }>
		) => {
			state.isLoading = false;
			state.error = '';
			state.posts = [action.payload.data];
			state.comments = action.payload.comment;
			state.isLoaded = true;
		},
		postsFetchingError: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
			state.isLoaded = false;
		},
		addNewPost: (state, action: PayloadAction<IPost>) => {
			state.posts.push(action.payload);
		},
		deletePost: (state, action: PayloadAction<number>) => {
			state.posts = state.posts.filter((post) => post.id !== action.payload);
		},
		sortPosts: (state, action: PayloadAction<string>) => {
			state.posts = [...state.posts].sort((a, b) =>
				a[action.payload as keyof PostSort].localeCompare(
					b[action.payload as keyof PostSort]
				)
			);
		},
	},
});

export default postSlice.reducer;
