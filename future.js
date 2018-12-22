import React, {useContext} from 'react'

export const RouterContext = React.createContext()

export function useRouter() {
  return useContext(RouterContext)
}
