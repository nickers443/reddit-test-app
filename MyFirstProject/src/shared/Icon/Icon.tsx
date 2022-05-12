import React, { ReactNode } from 'react'
import styles from './icon.css'
import {
  BlockIcon,
  CommentIcon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
} from '../Icons'

type TSizes = 16 | 20

export enum EIcon {
  block,
  comment,
  menu,
  save,
  share,
  warning,
}

interface IIcon {
  name: ReactNode
  size?: TSizes
}

export function Icon({ name, size = 16 }: IIcon) {
  if (name === EIcon.block) name = <BlockIcon />
  if (name === EIcon.comment) name = <CommentIcon />
  if (name === EIcon.menu) name = <MenuIcon />
  if (name === EIcon.save) name = <SaveIcon />
  if (name === EIcon.share) name = <ShareIcon />
  if (name === EIcon.warning) name = <WarningIcon />
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {name}
    </svg>
  )
}
