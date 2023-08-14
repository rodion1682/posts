import React, { FC, MouseEvent } from 'react';
import cl from './Button.module.scss';

interface ButtonProps {
	children: string;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
	return (
		<button className={cl.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
