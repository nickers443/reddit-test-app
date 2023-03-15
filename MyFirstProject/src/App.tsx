import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { Header } from './shared/Header'
import { UserContextProvider } from './shared/context/userContext'
import { PostsContextProvider } from './shared/context/postsContext'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './store'
import { useToken } from './hooks/useToken'
import './main.global.css'

const store = createStore(rootReducer, composeWithDevTools())

function AppComponent() {
  useToken()
  return (
    <UserContextProvider>
      <PostsContextProvider>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </PostsContextProvider>
    </UserContextProvider>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
))
