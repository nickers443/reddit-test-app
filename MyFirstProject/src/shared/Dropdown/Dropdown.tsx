import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './dropdown.css'

interface IdropdownProps {
  button?: ReactNode
  children: ReactNode
  isOpen?: boolean
  position: {
    top: any
    left: any
  }
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
  button,
  children,
  isOpen,
  position,
  onClose = NOOP,
  onOpen = NOOP,
}: IdropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

  const root = document.querySelector('#dropdown_root')
  if (!root) return null

  return createPortal(
    <div
      className={styles.container}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(!isOpen)}>
            {children}
          </div>
        </div>
      )}
    </div>,
    root,
  )
}
