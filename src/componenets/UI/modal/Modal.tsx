import React, { FC, ReactNode } from 'react';
import cl from './Modal.module.scss';

interface ModalProps {
	children: ReactNode;
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
	const rootClasses = [cl.modal];

	if (visible) {
		rootClasses.push(cl.active);
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div
				className={cl.modal__content}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
