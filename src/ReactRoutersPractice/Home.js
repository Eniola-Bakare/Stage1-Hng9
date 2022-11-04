import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigateTo = useNavigate()
  return (
    <div>
        <p>You are Home!</p>
        <button onClick={() => navigateTo('order-summary')}>Place your oders now!</button>

    </div>
  )
}

export default Home