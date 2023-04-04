import React from 'react'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'

import { bildContainer, bildStyling, frameImage } from './hero.module.css'
import '../../style/global.css'

function Hero(props) {
  const image = props.image
  return (
    <div className={`column-inner ${bildContainer}`}>
      {image.map((img) => {
        const image = getImage(img.image)
        return (
          <div key={img.id} className={frameImage}>
            <BgImage
              id={img.title}
              image={image}
              className={bildStyling}
              alt={img.title}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Hero
