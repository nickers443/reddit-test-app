import { useEffect, useState } from 'react'

export function useTimeStamp(date: number) {
  const [timestamp, setTimestamp] = useState('')
  const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const parseDate = new Date(date * 1000)
  const hour = parseDate.getHours()
  const minuts = parseDate.getMinutes()

  useEffect(() => {
    const time =
      hour <= 24
        ? hour < 1
          ? `${minuts} минут назад`
          : `${hour} часов назад`
        : `${parseDate.getDay()} ${
            month[parseDate.getMonth()]
          } ${parseDate.getFullYear()}`

    setTimestamp(() => time)
  }, [date])

  return [timestamp]
}
