import { toast } from "react-hot-toast"
import { useState, useEffect } from "react"

const useAsync = (asyncFunc, dependecies = []) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependecies)) {
        toast.error('No se pasó un Array como dependencia')
        dependecies = []
    }

    useEffect(() => {
        setLoading(true)

        asyncFunc()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependecies)

    return {
        data,
        error,
        loading
    }
}

export default useAsync
