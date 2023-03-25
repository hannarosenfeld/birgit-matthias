import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"

export default function Aktuelles({ data }) {
    const entry = data.allContentfulBlog
    return(
        <Layout>
          <div className="mt-5" style={{width: "80%"}}>
            {entry.nodes.map(e => {
                console.log(e.pictures)
                return(
                    <div key={e.id} style={{marginBottom: "3em"}}>
                      <h3>{e.heading}</h3>
                      <div>{e.text.text}</div>
                      <div className="mt-3">
                      {e.pictures.map(img => {
                          const image = getImage(img.gatsbyImageData)
                          return(
                              <div className="mb-2" style={{width: "100%"}}>
                              <GatsbyImage image={image} style={{width: "100%"}}/>
                              </div>
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
