import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, saveToken } from '../store/store'

export function useToken() {
  const dispatch = useDispatch<any>()
  const token = useSelector<RootState, string>((state) => state.token)
  useEffect(() => {
    dispatch(saveToken())
  }, [])

  return [token]
}
