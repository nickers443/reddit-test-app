import React from 'react'
import { UserLink } from '../UserLink'
import styles from './textcontent.css'

interface ITextContent {
  authorName: string
  avatar: string
  date: number
  title: string
  view?: number | null
}

export function TextContent({
  authorName,
  avatar,
  date,
  title,
  view,
}: ITextContent) {
  const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const parseDate = new Date(date * 1000)
  const hour = parseDate.getHours()
  const minuts = parseDate.getMinutes()
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink avatar={avatar} authorName={authorName} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {hour <= 24
            ? hour < 1
              ? `${minuts} минут назад`
              : `${hour} часов назад`
            : `${parseDate.getDay()} ${
                month[parseDate.getMonth()]
              } ${parseDate.getFullYear()}`}
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
  )
}
