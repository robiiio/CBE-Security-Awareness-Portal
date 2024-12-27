
const authReducer =  (state={autoData : null}, action) => {
    switch (action.type){
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            console.log(action?.data)
            return {...state, autuData:  action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return {...state, autoData: null};
        case 'LOGIN_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;

    }
}

export default authReducer