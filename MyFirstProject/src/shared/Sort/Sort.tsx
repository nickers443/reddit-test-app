import React from 'react'
import styles from './sort.css'

export default function Sort() {
  return (
    <p>
      Сортировать по: <button className={styles.sortButton}>Лучшие</button>
    </p>
  )
}
