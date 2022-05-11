import React from 'react'
import styles from './userlink.css'

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://w7.pngwing.com/pngs/78/488/png-transparent-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-face-head-cartoon.png"
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>
        Дмитрий Стремин
      </a>
    </div>
  )
}
