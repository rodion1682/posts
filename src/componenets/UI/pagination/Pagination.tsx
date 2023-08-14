import React, { FC } from 'react';
import { usePagination } from '../../../hooks/usePagination';
import cl from './Pagination.module.scss';

interface PaginationProps {
	totalPages: number;
	page: number;
	setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, setPage }) => {
	let pagesArray = usePagination(totalPages);

	return (
		<div className={cl.pagination}>
			{pagesArray.map((p) => (
				<div
					onClick={() => setPage(p)}
					key={p}
					className={
						page === p
							? `${cl.pagination__button} ${cl.pagination__button_active}`
							: `${cl.pagination__button}`
					}
				>{`${p}`}</div>
			))}
		</div>
	);
};

export default Pagination;
