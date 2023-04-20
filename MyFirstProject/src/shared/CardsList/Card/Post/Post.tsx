import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useCommentsData } from '../../../../hooks/useCommentsData'
import { useNavigate } from 'react-router-dom'
import CommentSection from '../CommentSection/CommentSection'
import styles from './post.css'

interface IPost {
  postId?: string
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null)
  const [comments] = useCommentsData(props.postId)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/')
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
      <h2>{'123123'}</h2>
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
