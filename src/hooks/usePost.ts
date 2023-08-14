import { useMemo } from 'react';
import { IPost } from '../models/IPost';

export const useSortedPosts = (posts: IPost[], query: string) => {
	const searchedPosts = useMemo(() => {
		if (query) {
			return posts.filter((post) =>
				post.title.toLowerCase().includes(query)
			);
		}
		return posts;
	}, [query, posts]);
	return searchedPosts;
};
