import React, { useContext } from 'react'
import { postsContext } from '../context/postsContext'
import { Card } from './Card/Card'
import styles from './cardslist.css'

export function CardsList() {
  const [posts] = useContext(postsContext)
  return (
    <ul className={styles.cardList}>
      {posts.map((post: any) => {
        console.log(post)
      })}
    </ul>
  )
}
