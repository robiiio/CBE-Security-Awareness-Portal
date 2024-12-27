import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'})
//make api call

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const fetchPostsContent = () => API.get('/courses/foundations');
export const getContent=() => API.get('/courses/subtitle/:id');



//Course 
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatedPost = (id, percentage) => API.put(`/posts/${id}`, {percentage});

//Course Content
export const createCourse = (post) => API.post('/courses/foundations', post);
export const updateCourse = (post) => API.post('/courses/foundations', post);
//auth
export const signIn = async (formData) => {
    try{
    const response = await API.post('/users/signin', formData);
    return response;
  } catch (error) {
    throw error.response.data.message; // This contains the error message from the server
  }
}
export const signUp = async(formData) => {
  try{
    const response = API.post('/users/signup', formData);
    return response;
  } catch (error) {
    throw error.response.data.message; // This contains the error message from the server
  }
}




