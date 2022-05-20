import React, { useContext } from 'react'
import { postsContext } from '../context/postsContext'
import { Card } from './Card/Card'
import styles from './cardslist.css'

export function CardsList() {
  const posts = useContext(postsContext)
  const cards = posts.map((card) => {
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
  return <ul className={styles.cardList}>{cards}</ul>
}
