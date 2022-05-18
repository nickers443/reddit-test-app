import React, { createContext, ReactNode } from 'react'
import { usePostsData } from '../../hooks/usePostsData'

export const postsContext = createContext({})

export function PostsContextProvider({ children }: { children: ReactNode }) {
  const [posts] = usePostsData()

  return (
    <postsContext.Provider value={[posts]}>{children}</postsContext.Provider>
  )
}
