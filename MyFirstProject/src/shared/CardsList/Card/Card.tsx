import React from 'react'
import styles from './card.css'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'

export function Card({ props }: any) {
  return (
    <li className={styles.card}>
      <TextContent
        authorName={props.authorName}
        avatar={props.avatar}
        date={props.date}
        title={props.title}
        view={props.view}
        postId={props.postId}
      />
      <Preview img={props.img} />
      <Menu />
      <Controls />
    </li>
  )
}
