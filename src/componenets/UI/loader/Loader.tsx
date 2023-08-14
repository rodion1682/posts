import React, { FC } from 'react';
import cl from './Loader.module.scss';

const Loader: FC = () => {
	return (
		<div className={cl.loader}>
			<div className={cl.loader__content}></div>
		</div>
	);
};

export default Loader;
