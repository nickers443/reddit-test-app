import React from 'react'
import { Dropdown } from '../../Dropdown'
import styles from './card.css'
import { CardMenu } from './CardMenu'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  )
}
