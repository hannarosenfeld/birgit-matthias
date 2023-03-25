import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout/Layout'


export default function GalerieTemplate({ pageContext }) {
    const { category } = pageContext

    return(
        <Layout>
          <div
            style={{margin: "4em 0"}}
          >
            <h4
              style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "2px",
                  marginLeft: "3em",
                  maxWidth: "fit-content"
              }}>{category.title.title}</h4>
            <br/>
            <br/>
            <div className="d-flex flex-wrap justify-content-between">
              {category.kunstwerke.map(werk =>{
                  const image = getImage(werk.image.gatsbyImageData)
                  console.log(category.slug)
                  return(
                      <div
                        className="galerie-image"
                        style={{
                            width: "23%",
                            marginBottom: "1.5em"
                        }}>
                        <Link to={`/galerie/${category.slug}/${werk.slug}`}>
                          <GatsbyImage
                            image={image}
                          />
                        </Link>
                      </div>
                  )
              })}
            </div>
          </div>
        </Layout>
    )
}
