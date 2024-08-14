import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MyButton, H2, MyInput } from '../../ui';
import { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { setUser } from '../../store/actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants/role';
import { FormError } from '../../components';
import { useResetForm } from '../../hooks';
import { request } from '../../utils/request';

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Логин обязателен')
		.matches(/^\w+$/, 'Логин должен содержать только буквы и цифры')
		.min(3, 'Логин должен содержать минимум 3 символа')
		.max(15, 'Логин должен содержать максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d%#]*$/,
			'неверно заполненый пароль, должен содержать буквы , цифры, знаки # и %',
		)
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.max(30, 'Пароль должен содержать максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null, 'Повтор пароля не совпадает!']),
});

const RegistrationContainer = ({ className }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	useResetForm(reset);

	const onSubmit = ({login, password}) => {
		request(`/register`, 'POST', {login, password}).then(({ error, user, token }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			localStorage.setItem('token', token);
		});
	};
	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<MyInput
					type="text"
					placeholder="Логин"
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<MyInput
					type="password"
					placeholder="Пароль"
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<MyInput
					type="password"
					placeholder="Проверка пароля"
					{...register('passcheck', { onChange: () => setServerError(null) })}
				/>
				<MyButton margin="0 0 10px 0" disabled={!!formError} type="submit">
					Зарегистрироваться
				</MyButton>
				{errorMessage && <FormError>{errorMessage}</FormError>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 260px;
	}
`;
