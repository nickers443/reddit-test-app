import React from 'react'
import styles from './card.css'
import { Controls } from './Controls'
import { Menu } from './Menu'
import { Preview } from './Preview'
import { TextContent } from './TextContent'

export function Card({ props }: any) {
  let image
  switch (props.img) {
    case 'default':
      image = 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png'
      break
    case 'self':
      image = 'https://www.redditstatic.com/desktop2x/img/renderTimingPixel.png'
      break
    case 'nsfw':
      image = 'https://www.redditstatic.com/desktop2x/img/nsfw2.png'
      break
    case 'image':
      image = 'https://aktifelk.com.tr/wp-content/uploads/2019/01/no-image-v2-500x383@2x.jpg'
      break
    default:
      image = props.img
  }
  console.log(image)
  return (
    <li className={styles.card}>
      <TextContent
        authorName={props.author}
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
