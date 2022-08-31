import { useState, useEffect, useRef } from 'react'

/**
 *
 * @param {String} key The key to set in sessionStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in sessionStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */

function useSessionStorageState(
  key: string,
  defaultValue:  number | string | object = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {}, // Destructuring object and assign default value.
) {
  const [state, setState] = useState(() => {                    // Lazy Initializer. It cannot be initialzied whenever re-rendering.
    const valueInsessionStorage = window.sessionStorage.getItem(key)
    if (valueInsessionStorage) {
      return deserialize(valueInsessionStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.sessionStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.sessionStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export {useSessionStorageState}
