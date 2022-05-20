import React, { createContext, ReactNode } from 'react'
import { usePostsData } from '../../hooks/usePostsData'

interface IPostsContextData {
  title: string
  author: string
  avatar?: string
  img?: string
  date: number
  rating: number
  postId: string
  postView: number | null
}

export const postsContext = createContext<Array<IPostsContextData>>([
  {
    title: '',
    author: '',
    date: 0,
    rating: 0,
    postId: '',
    postView: null,
  },
])

export function PostsContextProvider({ children }: { children: ReactNode }) {
  const [posts] = usePostsData()

  return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}
