import React from 'react'
import styles from './userlink.css'

interface IUserLink {
  avatar: string | undefined | null
  authorName: string | null
}

export function UserLink({ avatar, authorName }: IUserLink) {
  if (avatar === undefined || avatar === null)
    avatar = 'https://www.redditstatic.com/avatars/avatar_default_02_A5A4A4.png'
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <a href="#user-url" className={styles.username}>
        {authorName}
      </a>
    </div>
  )
}
