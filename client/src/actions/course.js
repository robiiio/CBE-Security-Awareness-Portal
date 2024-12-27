import * as api from '../api';

export const createCourse = (post) => async (dispatch) =>{
    try{
        const {data} = await api.createCourse(post);
      console.log(data);
        dispatch({type: 'CREATECOURSE', payload: data});
    }catch(error){
        console.log(error);
    }
}
export const getCourse = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPostsContent();
        console.log(data)
        dispatch({type: 'FETCH_ALL', payload: data})
    }catch(error){
        console.log(error.message)
    }
}