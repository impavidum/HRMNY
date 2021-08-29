import { useEffect, useRef } from 'react'

export const useReturnPrevProps = (val) => {
    const ref = useRef()
    useEffect(() => {
        ref.current = val
    })
    return ref.current
}
