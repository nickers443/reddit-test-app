import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export interface IPostsData {
  title: string
  author: string
  avatar?: string
  img?: string
  date: number
  rating: number
  postId: string
  postView: number | null
}

export function usePostsData(ref: any) {
  const [posts, setPosts] = useState<IPostsData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [after, setAfter] = useState('')
  const [empty, setEmpty] = useState(true)
  const token = useSelector<RootState, string>((state) => state.token)

  useEffect(() => {
    async function load() {
      setErrorLoading('')
      setIsLoading(true)
      setEmpty(false)

      try {
        const {
          data: {
            data: { after, children },
          },
        } = await axios.get('https://oauth.reddit.com/rising', {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        const postData: Array<IPostsData> = children.map((post: any) => {
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
        setPosts((prev) => prev.concat(...postData))
        setAfter(after)
      } catch (error) {
        setErrorLoading(String(error))
      } finally {
        setIsLoading(false)
      }
    }

    const observer = new IntersectionObserver(
      () => {
        load()
      },
      {
        rootMargin: '10px',
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [token])

  return [posts, isLoading, errorLoading, empty]
}
