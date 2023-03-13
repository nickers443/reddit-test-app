import React, { useState } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { Header } from './shared/Header'
import { useToken } from './hooks/useToken'
import { tokenContext } from './shared/context/tokenContext'
import { UserContextProvider } from './shared/context/userContext'
import { PostsContextProvider } from './shared/context/postsContext'
import { commentContext } from './shared/context/commentContext'

function AppComponent() {
  const [token] = useToken()
  console.log(token)
  const [commentValue, setCommentValue] = useState('')

  const CommentProvider = commentContext.Provider

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <CommentProvider
            value={{
              value: commentValue,
              onChange: setCommentValue,
            }}>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </CommentProvider>
        </PostsContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />)
