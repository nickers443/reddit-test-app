import React, { ChangeEvent, FormEvent, useContext } from 'react'
import { commentContext } from '../../../../context/commentContext'
import styles from './commentform.css'

export function CommentForm() {
  const { value, onChange } = useContext(commentContext)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
