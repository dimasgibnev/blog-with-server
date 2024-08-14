import styled from 'styled-components';
import { MyButton } from '../../ui';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { useSelector } from 'react-redux';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const isOpen = useSelector(selectModalIsOpen);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<MyButton width="120px" onClick={onConfirm}>
						Да
					</MyButton>
					<MyButton width="120px" onClick={onCancel}>
						Отмена
					</MyButton>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
	& .box {
		position: relative;
		z-index: 25;
		width: 350px;
		margin: auto;
		top: 50%;
		transform: translateY(-50%);
		background-color: #fff;
		border: 2px solid black;
		padding: 15px;

		& > h3 {
			text-align: center;
			margin-bottom: 10px;
		}
	}
	& .buttons {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
`;
