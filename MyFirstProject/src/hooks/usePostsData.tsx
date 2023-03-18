import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface IPostsData {
  title: string
  author: string
  avatar?: string
  img?: string
  date: number
  rating: number
  postId: string
  postView: number | null
}

export function usePostsData() {
  const [posts, setPosts] = useState<IPostsData[]>([
    {
      title: '',
      author: '',
      date: 0,
      rating: 0,
      postId: '',
      postView: null,
    },
  ])
  const token = useSelector<RootState, string>((state) => state.token)

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((resp) => {
        const postData: Array<IPostsData> = resp.data.data.children.map((post: any) => {
          let avatar = null
          if (post.data.all_awardings.length) avatar = post.data.all_awardings[0].icon_url
          return {
            title: post.data.title,
            author: post.data.author,
            avatar,
            img: post.data.thumbnail,
            date: post.data.created,
            rating: post.data.score,
            postId: post.data.id,
            postView: post.data.view_count,
          }
        })
        setPosts(postData)
      })
      .catch(console.log)
  }, [token])

  return [posts]
}
