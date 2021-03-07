import React from 'react'
import { Link } from 'react-router-dom'

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

const ShoesIndex = () => {
  console.log(Object.entries(shoes))
  return (
    <div>
      <h1>Shoes index</h1>
      <ul>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <Link to={`/shoes/${slug}`}>
            <li key={slug}>
              <h3>{name}</h3>
              <img src={img} alt={slug} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ShoesIndex
