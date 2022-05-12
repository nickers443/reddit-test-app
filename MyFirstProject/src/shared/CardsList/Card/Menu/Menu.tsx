import React from 'react'
import { Dropdown } from '../../../Dropdown'
import { MenuButton } from '../MenuButton'
import { MenuItemsList } from '../MenuItemsList'
import { Text, EColor } from '../../../Text'
import styles from './menu.css'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<MenuButton />}>
        <div className={styles.dropdown}>
          <MenuItemsList postId="1234" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  )
}
