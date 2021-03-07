import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const shoes = {
  'air-jordan-3-valor-blue': {
    name: 'VALOUR BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
  },
  'jordan-mars-270-london': {
    name: 'JORDAN MARS 270 LONDON',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
  },
  'air-jordan-1-zoom-racer-blue': {
    name: 'RACER BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
  },
}

const SingleShoe = () => {
  const { slug } = useParams()
  const { name, img } = shoes[slug]

  let navigate = useNavigate()
  function backToShoes() {
    navigate('/shoes')
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={slug} />
      <button onClick={backToShoes}>← Back</button>
    </div>
  )
}

export default SingleShoe
