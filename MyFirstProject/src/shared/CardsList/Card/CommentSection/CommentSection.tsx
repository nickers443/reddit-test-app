import React from 'react'
import { CommentFormContainer } from '../../../CommentFormContainer'
import Sort from '../../../Sort/Sort'
import CommentList from './CommentList/CommentList'
import styles from './commentSection.css'

export default function CommentSection({ comments }: any) {
  return (
    <div className={styles.main}>
      <CommentFormContainer />
      <Sort />
      <CommentList comments={comments} />
    </div>
  )
}
