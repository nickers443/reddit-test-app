import React, { createRef, useEffect, useState } from 'react'
import { Dropdown } from '../../../Dropdown'
import { MenuButton } from '../MenuButton'
import { MenuItemsList } from '../MenuItemsList'
import { Text, EColor } from '../../../Text'
import styles from './menu.css'

interface IPosition {
  top: number | string
  left: number | string
}

export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [position, setPosition] = useState<IPosition>({
    top: 0,
    left: 0,
  })
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setPosition({
        top: rect?.y + window.scrollY + 81,
        left: rect?.x + window.scrollX + 100,
      })
    }
  }, [isDropdownOpen])

  return (
    <div className={styles.menu} ref={ref}>
      <MenuButton onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
      {isDropdownOpen && (
        <Dropdown
          isOpen={isDropdownOpen}
          position={position}
          onOpen={() => setIsDropdownOpen(true)}
          onClose={() => setIsDropdownOpen(false)}
        >
          <div className={styles.dropdown}>
            <MenuItemsList postId="1234" />
            <button className={styles.closeButton}>
              <Text mobileSize={12} size={14} color={EColor.grey66}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  )
}
