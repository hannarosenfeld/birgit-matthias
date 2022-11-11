import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

export default function Aktuelles({ data }) {
    const entry = data.allContentfulBlog
    return(
        <Layout>
          <div className="mt-5">
            {entry.nodes.map(e => {
                console.log(e.pictures)
                return(
                    <div key={e.id}>
                      <h3>{e.heading}</h3>
                      <div>{e.text.text}</div>
                      <div className="mt-3">
                      {e.pictures.map(img => {
                          const image = getImage(img.gatsbyImageData)
                          return(
                              <GatsbyImage image={image} style={{width: "33em"}}/>
                          )
                      })}
                    </div>
                     </div>
                )
            })}
          </div>
        </Layout>
    )
}

export const query = graphql`
  query AktuellesPageQuery {
    allContentfulBlog {
      nodes {
        id
        heading
        text {
          text
        }
        pictures {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  }
`
