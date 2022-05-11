import React from 'react'
import { ComplainButton } from '../ComplainButton'
import { HideButton } from '../HideButton'
import styles from './menuitemslist.css'

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <HideButton />
        <span>Скрыть</span>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <ComplainButton />
        <span>Пожаловаться</span>
      </li>
    </ul>
  )
}
