import React from 'react'
import { Dropdown } from '../../../Dropdown'
import { MenuButton } from '../MenuButton'
import { MenuItemsList } from '../MenuItemsList'
import styles from './menu.css'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<MenuButton />}>
        <div className={styles.dropdown}>
          <MenuItemsList />
          <button className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  )
}
