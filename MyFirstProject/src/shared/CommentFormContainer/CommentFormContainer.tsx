import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, updateComment } from '../../store'
import { CommentForm } from '../CardsList/Card/CommentSection/CommentForm'

export function CommentFormContainer() {
  const value = useSelector<RootState, string>((state) => state.commentText)
  const dispatch = useDispatch()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  return <CommentForm value={value} onChange={handleChange} onSubmit={handleSubmit} />
}
