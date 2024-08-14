import { request } from '../../utils/request';
import { setUser } from './set-user';

export const setUserAsync = () => (dispatch) => {
	request(`/users/me`).then((UserData) => {
		dispatch(setUser(UserData.data));
	});
};
