import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: 5
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0
            }
            state.push(newPost)
        },
        updatePost: (state, action) => {
            const index = state.findIndex(posts => postSlice.id == action.payload.id)
            state(index) = action.payload
        }
    }
})

export const {createPost, updatePost} = postSlice.actions
export default postSlice.reducers