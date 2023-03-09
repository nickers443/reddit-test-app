import { createContext } from 'react'

type commentContextType = {
  value: string
  onChange: (value: string) => void
}

export const commentContext = createContext<commentContextType>({
  value: '',
  onChange: () => {},
})
