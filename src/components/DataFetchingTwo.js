import React, { useReducer, useEffect } from "react"
import axios from "axios"

const initialState = {
  loading: true,
  error: "",
  post: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload
      }
    case "FETCH_ERROR":
      return {
        loading: false,
        error: `Something went wrong! Error Message: ${action.payload}`,
        post: {}
      }
    default:
      return state
  }
}

function DataFetchingTwo() {
  const [postState, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message
        })
      })
  }, [])

  return (
    <div>
      { postState.loading ? "Loading..." : postState.post.title }
      { postState.error ? postState.error : null }
    </div>
  )
}

export default DataFetchingTwo
