import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, EColor } from '../../../../Text'
import styles from './commentform.css'

type TForm = {
  comment: string
}

export function CommentForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      comment: '',
    },
  })

  const onSubmit: SubmitHandler<TForm> = (data: TForm) => {
    console.log(data, 'submit')
    reset()
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="comment"
        control={control}
        rules={{ minLength: 3 }}
        render={({ field: { value, ref, onChange } }) => (
          <textarea
            value={value}
            ref={ref}
            onChange={onChange}
            className={styles.input}
            aria-invalid={errors.comment ? 'true' : 'false'}
          />
        )}
      />
      {errors.comment?.type === 'minLength' && (
        <div className={styles.error}>
          <Text size={14} color={EColor.orange}>
            Минимальная длинна комментария составляет 3 символа
          </Text>
        </div>
      )}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
