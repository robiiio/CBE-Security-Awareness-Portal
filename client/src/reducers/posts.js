// const initialstate = {
//   username: "",
//   email: "",
//   percentage: 0,
//   status: "",
// };
export default function posts(posts = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log(action.payload);
      return [...posts, action.payload];
    case "UPDATE":
      const updatedItem = posts.map((post) => {
        if (post._id === action.payload._id) {
            return action.payload;
      }
      return post;
    });
    return {
        ...posts, percentage: updatedItem,   
    };

    default:
      return posts;
  }
}
