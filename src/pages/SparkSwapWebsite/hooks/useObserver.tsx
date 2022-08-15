import { useContext } from 'react'
import { ObserverContext } from '../context/ObserverContext'

const useObserver = () => {
  const { active, handleActive } = useContext(ObserverContext)
  return { active, handleActive }
}

export default useObserver
