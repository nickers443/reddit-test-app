import React from 'react'
import Comment from '../Comment/Comment'
import styles from './commentlist.css'

export default function CommentList({ comments }: any) {
  console.log(comments)
  return (
    <div className={styles.list}>
      {comments.map((comment: any, i: any) => {
        if (comment.kind === 't1') {
          return <Comment key={comment.data.link_id + i} comment={comment} />
        }
      })}
    </div>
  )
}
