import React, { ReactNode, useState } from 'react'
import { Icon } from '../Icon'
import { Text, EColor } from '../Text'
import styles from './button.css'

interface IButton {
  text: string
  buttonIcon?: ReactNode
  onClick?: () => void
}

const NOOP = () => {}

export function Button({ text, buttonIcon, onClick = NOOP }: IButton) {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <button
      className={styles.button}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick()}>
      <Icon name={buttonIcon} size={14} hover={hover} />
      <Text size={14} color={EColor.black} hover={hover}>
        {text}
      </Text>
    </button>
  )
}
