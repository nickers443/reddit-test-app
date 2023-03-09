import React from 'react'
import Sort from '../../../Sort/Sort'
import { CommentForm } from './CommentForm'
import CommentList from './CommentList/CommentList'
import styles from './commentSection.css'

export default function CommentSection({ comments }: any) {
  return (
    <div className={styles.main}>
      <CommentForm />
      <Sort />
      <CommentList comments={comments} />
    </div>
  )
}
