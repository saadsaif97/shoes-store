import React from 'react'
import { Link } from 'react-router-dom'

const shoes = {
  'air-jordan-3-valor-blue': {
    name: 'VALOUR BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 200,
    description:
      'VALOUR BLUE will make you look becoming and give you a sense of pride and satisfaction, and will give you a sense of comfort and relief.',
  },
  'jordan-mars-270-london': {
    name: 'JORDAN MARS 270 LONDON',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 250,
    description:
      'JORDAN MARS 270 LONDON will take you from season to season with effortless style and will make your feet feel in heaven.',
  },
  'air-jordan-1-zoom-racer-blue': {
    name: 'RACER BLUE',
    img:
      'https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1',
    price: 300,
    description:
      'RACER BLUE will give you all the comfort with the cushioning support of a running shoe.',
  },
}

const ShoesIndex = () => {
  return (
    <div>
      <h1>Shoes Home</h1>
      <div className='shoe-grid'>
        {Object.entries(shoes).map(
          ([slug, { name, img, price, description }]) => (
            <Link to={`/shoes/${slug}`} key={slug}>
              <div className='card'>
                <h3>{name}</h3>
                <img src={img} alt={slug} />
                <p className='price'>
                  Price: <strong>${price}</strong>
                </p>
                <p>{description.slice(0, 70)}...</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default ShoesIndex
