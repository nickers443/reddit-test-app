import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { IPostsData } from '../../hooks/usePostsData'
import { RootState } from '../../store/store'
import { Card } from './Card/Card'
import styles from './cardslist.css'

export function CardsList() {
  const LIMIT = 25
  const token = useSelector<RootState>((state) => state.token)
  const [posts, setPosts] = useState<IPostsData[]>([])
  const [loading, setLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')
  const [countOfLoad, setCountOfLoad] = useState(0)
  const bottomOfList = useRef<HTMLDivElement>(null)

  async function load() {
    setErrorLoading('')
    setLoading(true)

    try {
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
      setCountOfLoad((prevCount) => prevCount + 1)
    } catch (error) {
      setErrorLoading(String(error))
    }
    setLoading(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load()
        }
      },
      {
        rootMargin: '100px',
      },
    )

    if (bottomOfList.current !== null) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current !== null) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, nextAfter, token])

  return (
    <ul className={styles.cardList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map((post) => (
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
      ))}

      {(countOfLoad === 0 || countOfLoad % 3 !== 0) && !errorLoading && <div ref={bottomOfList} />}

      {!loading && !errorLoading && countOfLoad % 3 === 0 && (
        <button className={styles.loadMore} onClick={load}>
          Загрузить еще
        </button>
      )}

      {loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}
      {errorLoading && <div style={{ textAlign: 'center' }}>{errorLoading}</div>}
    </ul>
  )
}
