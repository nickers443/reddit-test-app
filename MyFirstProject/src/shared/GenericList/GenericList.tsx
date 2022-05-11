import React, { ReactNode } from 'react'

interface IItem {
  id: string
  text?: string
  onClick: (id: string) => void
  className?: string
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
  image?: ReactNode
}

interface IGenericListProps {
  list: IItem[]
}

const NOOP = () => {}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({ As = 'div', text, onClick = NOOP, className, id, href, image }) => {
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {image}
            {text}
          </As>
        }
      )}
    </>
  )
}
