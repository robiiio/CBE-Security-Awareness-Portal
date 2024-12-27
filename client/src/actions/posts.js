import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        console.log(data)
        dispatch({type: 'FETCH_ALL', payload: data})
    }catch(error){
        console.log(error)
    }
}
export const createPost = (post) => async (dispatch) =>{
    try{
        const {data} = await api.createPost(post);
        console.log(data);
        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error);
    }
}
export const updatedPost = (id, percentage) => async (dispatch) =>{
    try{
        const response =  await api.updatedPost(id, percentage);
      dispatch({type: 'UPDATE', payload: response.data});
        
       // dispatch({type: 'UPDATE'});
    }catch(error){
        console.log(error);
    }
}

