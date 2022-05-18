import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { tokenContext } from '../shared/context/tokenContext'

interface IPostsData {
  postData: Object[]
}

export function usePostsData() {
  const [posts, setPosts] = useState<IPostsData>()
  const token = useContext(tokenContext)

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        const postData = resp.data.data.children
        console.log(postData)
        setPosts(postData)
      })
      .catch(console.log)
  }, [token])

  return [posts]
}
