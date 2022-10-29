import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'



export default function GalerieTemplate({ pageContext }) {
    const { category } = pageContext
    return(
        <Layout>
          <div>
            <h4
              style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "2px",
                  maxWidth: "fit-content"
              }}>{category.title.title}</h4>
            <br/>
            <div className="d-flex flex-wrap justify-content-between">
              {category.werke.map(werk =>{
                  const image = getImage(werk.gatsbyImageData)
                  return(
                      <div
                        className="galerie-image"
                        style={{
                            width: "28%",
                            marginBottom: "1.5em"
                        }}>
                        <Link to="#">
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
