import React from 'react'
import { Icon, EIcon } from '../../../Icon'
import { Text, EColor } from '../../../Text'
import styles from './menuitemslist.css'

interface IMenuItemsList {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsList) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcon.block} />
        <Text mobileSize={12} size={14} color={EColor.black}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <Icon name={EIcon.warning} />
        <Text mobileSize={12} size={14} color={EColor.black}>
          Пожаловаться
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <Icon name={EIcon.comment} />
        <Text mobileSize={12} size={14} color={EColor.black}>
          Комментарии
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <Icon name={EIcon.share} />
        <Text mobileSize={12} size={14} color={EColor.black}>
          Поделиться
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        <Icon name={EIcon.save} />
        <Text mobileSize={12} size={14} color={EColor.black}>
          Сохранить
        </Text>
      </li>
    </ul>
  )
}
