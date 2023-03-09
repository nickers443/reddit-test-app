import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './answerForm.css'

interface IAnswerFomr {
  author: string
}

export function AnswerForm({ author = '' }: IAnswerFomr) {
  const [value, setValue] = useState(`${author}, `)
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    ref.current?.focus()
    ref.current!.selectionStart = value.length
    ref.current!.selectionEnd = value.length
  }, [value])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
