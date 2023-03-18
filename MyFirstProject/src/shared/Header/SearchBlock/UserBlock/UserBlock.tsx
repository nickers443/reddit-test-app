import React from 'react'
import { Break } from '../../../Break'
import { IconAnon } from '../../../Icons'
import { Text, EColor } from '../../../Text'
import styles from './userblock.css'

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=AUCfJmkiAb-ulJR98W1J4Q&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
      <div className={styles.avatarBox}>
        {!avatarSrc ? (
          <IconAnon />
        ) : (
          <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.gray99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.gray99}>
            {username || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  )
}
