import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import CardImage from '../cardImg/CardImage'

import { galerieStyle, titleSection, container } from './gallerie.module.css'
import '../../style/global.css'

export default function Galerie() {
  const data = useStaticQuery(
    graphql`
      query GalerieQuery {
        allContentfulGalerieMenu {
          nodes {
            bilder {
              title {
                title
              }
              slug
              image {
                gatsbyImageData(width: 620)
              }
            }
          }
        }
      }
    `
  )
  const rubriken = data.allContentfulGalerieMenu
  return (
    <section className={`column-inner ${container}`}>
      <div className={titleSection}>
        <h4>Galerie</h4>
      </div>
      {rubriken.nodes.map((rubrik) => {
        return (
          <div className={galerieStyle}>
            {rubrik.bilder.map((bild) => {
              const image = getImage(bild.image.gatsbyImageData)

              return (
                <CardImage
                  id={bild.slug}
                  image={image}
                  title={bild.title}
                  slug={bild.slug}
                />
              )
            })}
          </div>
        )
      })}
    </section>
  )
}
