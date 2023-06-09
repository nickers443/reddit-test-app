import React from 'react'
import { generateId } from '../../../../utils/react/generateRandomIndex'
import { GenericList } from '../../../GenericList'
import { Icon, EIcon } from '../../../Icon'
import styles from './cardmenu.css'

const buttonList = [
  {
    As: 'button' as const,
    text: 'Скрыть',
    onClick: () => {},
    image: <Icon name={EIcon.block} />,
    className: 'itemButton',
  },
  {
    As: 'button' as const,
    text: 'Пожаловаться',
    onClick: () => {},
    image: <Icon name={EIcon.warning} />,
    className: 'itemButton',
  },
  {
    As: 'button' as const,
    text: 'Закрыть',
    onClick: () => {},
    className: 'itemButton',
  },
].map(generateId)

export function CardMenu() {
  return (
    <div className={styles.divider}>
      <ul className={styles.menuItemsList}>
        <GenericList list={buttonList} />
      </ul>
    </div>
  )
}
