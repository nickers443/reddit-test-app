import React, { useState } from 'react'
import { useTimeStamp } from '../../../../hooks/useTimeStamp'
import { Post } from '../Post'
import { UserLink } from '../UserLink'
import styles from './textcontent.css'

interface ITextContent {
  authorName: string
  avatar: string
  date: number
  title: string
  view?: number | null
  postId: string
}

export function TextContent({
  authorName,
  avatar,
  date,
  title,
  view,
  postId,
}: ITextContent) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <a
          href="#post-url"
          className={styles.postLink}
          onClick={() => setIsModalOpen(true)}
        >
          {title}
        </a>
        {isModalOpen && (
          <Post postId={postId} onClose={() => setIsModalOpen(false)} />
        )}
      </h2>
    </div>
  )
}
