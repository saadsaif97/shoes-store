import { useNavigate } from 'react-router-dom'

const GoToShop = () => {
  const navigate = useNavigate()
  function goToShop() {
    navigate('/shoes')
  }
  return <button onClick={goToShop}>GO TO SHOP</button>
}

export default GoToShop
