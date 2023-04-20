import React from 'react'
import { useTimeStamp } from '../../../../hooks/useTimeStamp'
import { UserLink } from '../UserLink'
import styles from './textcontent.css'
import { Link } from 'react-router-dom'

interface ITextContent {
  authorName: string
  avatar: string
  date: number
  title: string
  view?: number | null
  postId: string
}

export function TextContent({ authorName, avatar, date, title, view, postId }: ITextContent) {
  const [publicationTime] = useTimeStamp(date)

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink avatar={avatar} authorName={authorName} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {publicationTime}
        </span>
      </div>
      <h2 className={styles.title}>
        <Link to="/posts/1" className={styles.postLink}>
          {title}
        </Link>
      </h2>
    </div>
  )
}
