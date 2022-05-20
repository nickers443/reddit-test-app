import React from 'react'
import styles from './preview.css'

export function Preview({ img }: any) {
  if (img === 'default' || img === 'self' || img === 'spoiler')
    img =
      'https://music112.com.ua/upload/resizer2/13/196/196771f0520c4642aa750d52e4c77fc2.png'
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={img} />
    </div>
  )
}
