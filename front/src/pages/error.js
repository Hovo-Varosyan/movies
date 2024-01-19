import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import ContentLoader from 'react-content-loader';
import '../assets/style/error.scss'

const Error = ({ status }) => {

    const location = useLocation()
    const [err, setErr] = useState(null)

    useEffect(() => {
        if (location.state) {
            setErr(location.state.err)
        }
       
    }, [])

    return (
        <div>
            {err ? <h1 className="error">{err.toUpperCase()}</h1> : <ContentLoader
                height={140}
                скорость={1}
                backgroundColor={'black'}
                foregroundColor={'#999'}
                viewBox="0 0 380 70"
            >
                <rect x="0" y="0" rx="3" ry="3" width="400" height="10" />
            </ContentLoader>}

        </div>
    )
}

export default Error
