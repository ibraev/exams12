import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS
} from "./actionsType";
import axios from '../../axios-api'
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';

const registerUserSuccess = user => ({type: REGISTER_USER_SUCCESS, user});
const registerUserFailure = error => ({type: REGISTER_USER_FAILURE, error});

const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const registerUser = userData => {
    return dispatch => {
        return axios.post('/users', userData).then(
            response => {
                dispatch(registerUserSuccess(response.data.user));
                NotificationManager.success('Registered successfully!');
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(registerUserFailure(error.response.data));
                } else {
                    dispatch(registerUserFailure({global: 'No connection'}));
                }
            }
        )
    }
};

export const loginUser = userData => {
    return (dispatch, getState) => {
        return axios.post('/users/sessions', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data.user));
                NotificationManager.success('Logged in successfully!');
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(loginUserFailure(error.response.data));
                } else {
                    dispatch(loginUserFailure({global: 'No connection'}));
                }
            }
        )
    }
};

export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {'Token': token};
        return axios.delete('/users/sessions', {headers}).then(
            response => {
                dispatch({type: LOGOUT_USER});
                dispatch(push('/'))
            }
        );
    }
};
