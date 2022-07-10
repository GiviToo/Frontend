import { useRouter } from 'next/router'

const DetailCard = () => {
    const router = useRouter()
    const { id } = router.query
  
    return <p>Hello: {id}</p>
}

export default DetailCard