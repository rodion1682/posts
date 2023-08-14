import React, { FC, useState, MouseEvent } from 'react';
import cl from './Select.module.scss';

interface SelectProps {
	options: Array<Option>;
	defaultValue: string;
	onChange: (value: string) => void;
}

interface Option {
	value: string;
	name: string;
}

const Select: FC<SelectProps> = ({ options, defaultValue, onChange }) => {
	const [isActive, setIsActive] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultValue);
	return (
		<>
			<div className={cl.select}>
				<div
					className={cl.select__button}
					onClick={() => setIsActive(!isActive)}
				>
					<span>{selectedOption}</span>
					<div
						className={
							isActive
								? `${cl.select__icon} ${cl.select__icon_active}`
								: `${cl.select__icon}`
						}
					></div>
				</div>
				<div
					className={
						isActive
							? `${cl.select__content} ${cl.select__content_active}`
							: `${cl.select__content}`
					}
				>
					{options.map((option) => (
						<div
							key={option.value}
							className={cl.select__item}
							onClick={(e: MouseEvent<HTMLDivElement>) => {
								onChange(option.value);
								setSelectedOption(option.name);
								setIsActive(!isActive);
							}}
						>
							{option.name}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Select;
