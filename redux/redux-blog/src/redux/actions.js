import axios from "axios"

export const addBlog = (blogData) => {
    return async (dispatch) => {
        await axios.post("http://localhost:5000/articles", blogData)
        console.log("blog create success");
        dispatch({ type: "BLOG_ADD", payload: "" })
    }
}
export const getBlog = (blogData) => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:5000/articles")
        dispatch({ type: "BLOG_GET", payload: data })
    }
}