import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { Header } from './shared/Header'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './store/store'
import { useToken } from './hooks/useToken'
import thunk from 'redux-thunk'
import './main.global.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
  useToken()
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
))
