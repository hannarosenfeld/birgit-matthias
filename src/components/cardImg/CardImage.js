import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import {
  galerieListBox,
  bildBox,
  imageStyle,
  centeredText
} from './cardImage.module.css'

export default function Bild(props) {
  const image = props.image
  const title = props.title.title
  const slug = props.slug

  const link = `/galerie/${slug}`

  return (
    <div className={`${bildBox} ${galerieListBox}`}>
      <GatsbyImage image={image} className={imageStyle} />
      <Link to={link}>
        <div className={centeredText}>{title}</div>
      </Link>
    </div>
  )
}
