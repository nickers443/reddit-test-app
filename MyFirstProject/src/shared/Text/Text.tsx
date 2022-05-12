import React, { ReactNode } from 'react'
import styles from './text.css'
import classNames from 'classnames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  grey66 = 'grey66',
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
  children?: ReactNode
  size: TSizes
  mobileSize?: TSizes
  tabletSize?: TSizes
  desctopSize?: TSizes
  color?: EColor
  bold?: Boolean
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size,
    mobileSize,
    desctopSize,
    tabletSize,
    color = EColor.black,
    bold = false,
  } = props

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`m${desctopSize}`]]: desctopSize },
    { [styles[`m${tabletSize}`]]: tabletSize }
  )
  return <As className={classes}>{children}</As>
}
