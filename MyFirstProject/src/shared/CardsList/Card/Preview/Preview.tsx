import React from 'react'
import styles from './preview.css'

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/2620419/file/original-5875a399ff03d51144dd573f3cd62e41.png"
      />
    </div>
  )
}
