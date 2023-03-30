import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { IPostsData } from '../../hooks/usePostsData'
import { RootState } from '../../store/store'
import { Card } from './Card/Card'
import styles from './cardslist.css'

export function CardsList() {
  const bottomObserver = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState<IPostsData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')
  const [empty, setEmpty] = useState(true)
  const token = useSelector<RootState, string>((state) => state.token)
  useEffect(() => {
    if (!token) return
    async function load() {
      setErrorLoading('')
      setIsLoading(true)

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

      setEmpty(false)
      setIsLoading(false)
    }

    const observer = new IntersectionObserver(
      (entres, obser) => {
        if (entres[0].isIntersecting) {
          load()
        }
      },
      {
        rootMargin: '10px',
      },
    )
    if (bottomObserver.current) {
      observer.observe(bottomObserver.current)
    }

    return () => {
      if (bottomObserver.current) {
        observer.unobserve(bottomObserver.current)
      }
    }
  }, [bottomObserver.current, nextAfter, token])
  return (
    <ul className={styles.cardList}>
      {empty && !errorLoading && !isLoading ? (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Список пуст</p>
      ) : (
        <></>
      )}

      {errorLoading && <p style={{ textAlign: 'center', fontSize: '20px' }}>{errorLoading}</p>}

      {!isLoading && Array.isArray(posts) ? (
        posts.map((card) => {
          return (
            <Card
              key={card.postId + card.author}
              props={{
                authorName: card.author,
                avatar: card.avatar,
                img: card.img,
                date: card.date,
                view: card.postView,
                rating: card.rating,
                title: card.title,
                postId: card.postId,
              }}
            />
          )
        })
      ) : (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Загрузка....</p>
      )}

      <div ref={bottomObserver}></div>
    </ul>
  )
}
