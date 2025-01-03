export const blogReducer = (state = { blogs: [] }, { type, payload }) => {
    // conditions goes here
    if (type === "BLOG_ADD") {
        return { ...state, blogCreate: true }
    }
    if (type === "BLOG_GET") {
        return { ...state, blogs: payload }
    }
    return state
}