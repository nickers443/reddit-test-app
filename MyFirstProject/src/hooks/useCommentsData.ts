import { RootState } from './../store'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useCommentsData(postId: any) {
  const [comments, setComments] = useState([{}])
  const token = useSelector<RootState, string>((state) => state.token)

  useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/comments/${postId}`, {
        params: { limit: 5 },
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setComments(resp.data[1].data.children)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return [comments]
}
