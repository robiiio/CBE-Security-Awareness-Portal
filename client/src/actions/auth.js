import * as api from '../api'
//import authReducer from '../reducers/Auth'

export const signin = (formData, navigate) => async(dispatch) => {
    try{
        const {data} =  await api.signIn(formData);
        dispatch({type: 'AUTH', data});
        if(data.result.role === "intern") {
            navigate('/dashboard');
            }else{
                navigate('/admin');
            }
    } catch(err){
        dispatch({ type: 'LOGIN_FAILURE', payload: err });
        console.log(err);
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try{
        const {data} =  await api.signUp(formData);
        dispatch({type: 'AUTH', data});
        if(data.result.role === "intern") {
        navigate('/dashboard');
        }else{
            navigate('/admin');
        }

    } catch(err){
        dispatch({ type: 'LOGIN_FAILURE', payload: err });
        console.log(err.message);
    }
}