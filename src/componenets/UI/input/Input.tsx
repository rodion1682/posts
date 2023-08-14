import React, { FC } from 'react';
import cl from './Input.module.scss';

interface InputProps {
	placeholder: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ onChange, value, placeholder, type }) => {
	return (
		<>
			<input
				className={cl.input}
				value={value}
				placeholder={placeholder}
				type={type ? type : 'text'}
				onChange={onChange}
			/>
		</>
	);
};

export default Input;
