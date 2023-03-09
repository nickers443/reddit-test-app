import React, { useState } from 'react'
import { useTimeStamp } from '../../../../../hooks/useTimeStamp'
import { UserLink } from '../../UserLink'
import { EIcon } from '../../../../Icon'
import { Button } from '../../../../Button/Button'
import styles from './comment.css'
import { AnswerForm } from '../AnswerForm'

export default function Comment({ comment }: any) {
  const [showAnswer, setShowAnswer] = useState(false)

  function commentAnswer() {
    setShowAnswer(!showAnswer)
  }

  const bottomButton = [
    {
      text: 'Ответить',
      icon: EIcon.comment,
      func: commentAnswer,
    },
    {
      text: 'Поделиться',
      icon: EIcon.share,
    },
    {
      text: 'Пожаловаться',
      icon: EIcon.warning,
    },
  ]

  const [created] = useTimeStamp(comment.data.created)
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <UserLink authorName={comment.data.author} avatar={undefined} />
        <span className={styles.time}>{created}</span>
        <div className={styles.liga}>Лига юристов</div>
      </div>
      <div className={styles.text}>{comment.data.body}</div>
      <div className={styles.bottom}>
        {bottomButton.map((el, i) => {
          if (el.func)
            return (
              <Button
                text={el.text}
                buttonIcon={el.icon}
                key={el.text + i}
                onClick={el.func}
              />
            )
          return (
            <Button text={el.text} buttonIcon={el.icon} key={el.text + i} />
          )
        })}
      </div>
      <div className={styles.answer}>
        {showAnswer && <AnswerForm author={comment.data.author} />}
      </div>
    </div>
  )
}
