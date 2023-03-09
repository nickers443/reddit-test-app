import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

export function useCommentsData(postId: any) {
  const [comments, setComments] = useState([{}])
  const token = useContext(tokenContext)

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
