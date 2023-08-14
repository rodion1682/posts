import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const routes = [
	{ path: '/posts', component: Posts },
	{ path: '/posts/:id', component: PostIdPage },
	{ path: '/about', component: About },
	{ path: '*', component: NotFound },
];
