// const initialstate ={
//     subtitle: "",
//     description: "",
//     points: "",
//     url: "",
//   };
const  foundations =  (state = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATECOURSE': 
            console.log(action.payload);
            return [...state, action.payload];
           
        default:
            return state;
    }

 }
 export default  foundations