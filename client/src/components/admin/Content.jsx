import { useState } from "react";
import { Button, TextField } from "@mui/material";
import FileBase from "react-file-base64";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../actions/course";

const initialstate = {
  topic: "",
  subtitle: "",
  description: "",
  points: 0,
  url: "",
};
function Content() {
  const [postContent, setPostContent] = useState(initialstate);

  const post = useSelector((state) => state.foundations);
  console.log(post);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} =  e.target;
    setPostContent({...postContent, [name]: value});
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", postContent);
    dispatch(createCourse(postContent));
  };
  const clear = () => {
    setPostContent({
      topic: "",
      subtitle: "",
      description: "",
      points: "",
      url: "",
    });
  };

  return (
    <div className="mr-20 ml-10 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 w-auto">
          <div className="border-b border-gray-900 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add New Course Content
            </h2>
            <div className="mt-10 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* {postContent.map((user, index) => ( */}
                {/* <div key={index} className="flex-row "> */}
              <div className="sm:col-span-full mb-7">
                <div className="mt-2">
                  <TextField
                    name="topic"
                    label="Topic"
                    required
                    value={postContent.topic}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </div>
             
                  <div className="sm:col-span-full mb-7">
                    <TextField
                      name="subtitle"
                      label="Subtitle"
                      required
                      value={postContent.subtitle}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                    />
                  </div>

                  <div className="col-span-full mb-7">
                    <TextField
                      fullWidth
                      multiline
                      rows={10}
                      name="description"
                      value={postContent.description}
                      onChange={handleChange}
                      label="description"
                    />
                  </div>

                  <div className="col-span-full mb-7">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Images
                    </label>
                    <FileBase
                      type="file"
                      name="url"
                      multiple={true}
                      value={postContent.url}
                      onDone={({base64}) => setPostContent({ ...postContent, url: base64})}
                    />
                  </div>

                  <div className="sm:col-span-3 mb-7">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Points
                    </label>
                    <div className="mt-2">
                      <select
                        id="points"
                        name="points"
                        value={postContent.points}
                        onChange={handleChange}
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                {/* </div> */}
              {/* ))} */}
            </div>
          
            <div className="buttonSubmit">
              <Button
                className="buttons"
                variant="contained"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className="buttonClear">
              <Button variant="container" size="small" onClick={clear}>
                Clear
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Content;
