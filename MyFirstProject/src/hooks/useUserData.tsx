import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { meRequestAsync } from '../store/me/actions'

export function useUserData() {
  const { data, loading } = useSelector<RootState, any>((state) => state.me)
  const token = useSelector<RootState, string>((state) => state.token)
  const dispatch = useDispatch<any>()
  useEffect(() => {
    if (!token) return
    dispatch(meRequestAsync())
  }, [token])

  return { data, loading }
}
