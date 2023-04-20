import React, { useEffect, useState } from 'react'
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
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Post } from './shared/CardsList/Card/Post'
import './main.global.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  useToken()
  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Routes>
                <Route path="/" element={<Navigate to={'/posts'} />} />
                <Route path="/auth" element={<Navigate to={'/posts'} />} />
                <Route index path="/posts" element={<CardsList />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route
                  path="*"
                  element={
                    <div
                      style={{
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      404 — страница не найдена
                    </div>
                  }
                />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
))
