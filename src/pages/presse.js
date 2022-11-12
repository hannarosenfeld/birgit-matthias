import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"


const Gallery = (props) => {
    const gallery = props.gallery
    return(
          <div className="mt-3">

          </div>
    )
}

export default function Presse({data}) {
    const entry = data.allContentfulPresse
    return(
        <Layout>
          <div className="mt-5" style={{width: "80%"}}>
            {entry.nodes.map(e => {
                console.log(e.pictures)
                return(
                    <div key={e.id} style={{marginBottom: "3em"}}>
                      <h5 style={{color: "#E42B9E"}}>{e.type}</h5>
                      <h4>{e.title}</h4>
                      <div>{e.text.text}</div>
                      <Gallery gallery={entry}/>
                    </div>
                )
            })}
          </div>
        </Layout>
    )
}


export const query = graphql`
  query PressePageQuery {
    allContentfulPresse {
      nodes {
        type
        title
        text {
          text
        }
        id
        pictures {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
  }
`
