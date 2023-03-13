import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useCommentsData } from '../../../../hooks/useCommentsData'
import CommentSection from '../CommentSection/CommentSection'
import styles from './post.css'

interface IPost {
  onClose?: () => void
  postId: string
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null)

  const id = props.postId

  const [comments] = useCommentsData(id)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const root = document.querySelector('#modal_root')
  if (!root) return null
  return createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Заголовок модалки</h2>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem ipsa
          provident? Illum rerum libero facere doloribus culpa sit, molestias inventore officiis
          unde maiores dolor, dolorum est corporis? Soluta, molestiae.
        </p>
      </div>
      <CommentSection comments={comments} />
    </div>,
    root,
  )
}
