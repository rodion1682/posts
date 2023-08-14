import React, { FC, SetStateAction, Dispatch } from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

interface PostFilterProps {
	filter: {
		sort: string;
		query: string;
	};
	setFilter: Dispatch<SetStateAction<{ sort: string; query: string }>>;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
	return (
		<div className="post-list__actions">
			<div className="post-list__input">
				<Input
					onChange={(e) => setFilter({ ...filter, query: e.target.value })}
					value={filter.query}
					placeholder={'Search'}
				/>
			</div>
			<div className="post-list__select">
				<Select
					onChange={(selectedSort) =>
						setFilter({ ...filter, sort: selectedSort })
					}
					defaultValue={'Sort by'}
					options={[
						{ value: 'title', name: 'By title' },
						{ value: 'body', name: 'By description' },
					]}
				/>
			</div>
		</div>
	);
};

export default PostFilter;
