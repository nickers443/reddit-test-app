import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { useSelector } from 'react-redux'
import { IPostsData } from '../../hooks/usePostsData'
import { RootState } from '../../store/store'
import { Card } from './Card/Card'
import styles from './cardslist.css'
import { Button } from '../Button'

export function CardsList() {
  const LIMIT = 25
  const infiniteLoaderRef = useRef(null)
  const [posts, setPosts] = useState<IPostsData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')
  const [loadCount, setLoadCount] = useState(0)
  const token = useSelector<RootState, string>((state) => state.token)

  const isItemLoaded = (index: number) => index < posts.length && posts[index] !== null

  async function load() {
    if (loadCount >= 3) {
      return
    }
    setErrorLoading('')
    setIsLoading(true)

    try {
      setLoadCount((prev) => prev + 1)
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get('https://oauth.reddit.com/rising', {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: {
          after: nextAfter,
          limit: LIMIT,
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
      setNextAfter(after)
    } catch (error) {
      setErrorLoading(String(error))
    }

    setIsLoading(false)
  }

  const Row = ({ index, style, data }: any) => {
    const post = data[index]
    return (
      <>
        <div className="Row" style={style}>
          <Card
            key={post.postId + post.author}
            props={{
              authorName: post.author,
              avatar: post.avatar,
              img: post.img,
              date: post.date,
              view: post.postView,
              rating: post.rating,
              title: post.title,
              postId: post.postId,
            }}
          />
        </div>
      </>
    )
  }

  useEffect(() => {
    if (!token) return

    if (token && posts.length === 0) {
      load()
    }
  }, [token])

  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !errorLoading && !isLoading && (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Список пуст</p>
      )}

      {posts.length !== 0 && (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={Infinity}
          loadMoreItems={load}
          ref={infiniteLoaderRef}>
          {({ onItemsRendered, ref }) => (
            <>
              <List
                height={450}
                width={'auto'}
                ref={ref}
                itemData={posts}
                itemCount={posts.length}
                itemSize={148}
                onItemsRendered={onItemsRendered}>
                {Row}
              </List>
              {isLoading && <p style={{ textAlign: 'center', fontSize: '20px' }}>Загрузка....</p>}
              {errorLoading && (
                <p style={{ textAlign: 'center', fontSize: '20px' }}>{errorLoading}</p>
              )}
              {loadCount === 3 && (
                <button className={styles.loadMore} onClick={() => setLoadCount(0)}>
                  Загрузить еще...
                </button>
              )}
            </>
          )}
        </InfiniteLoader>
      )}
    </ul>
  )
}
