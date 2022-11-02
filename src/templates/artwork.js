import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

export default function ArtWork({ pageContext }) {
    const { artwork } = pageContext
    const image = getImage(artwork.image.gatsbyImageData)
    console.log(artwork)
    return(
        <div
          id="artwork-detail-view"
        >
          <Layout>
            <div
              className="artwork-container d-flex"
              style={{
                  margin: "0",
                  padding: "0",
                  width: "100%",
                  margin: "auto",
                  maxHeight: "70vh"
              }}
            >
              <div
                className="d-flex"
              >
                <GatsbyImage
                  style={{maxWidth: "85%"}}
                  image={image}
                />
              </div>
              <div
                style={{
                    margin: "0 3em",
                    fontFamily: "arial"
                }}
              >
                <h5 className="mb-4">{artwork.title}</h5>
                <div className="mb-2">{artwork.description.description}</div>
                <div>{artwork.date}</div>
              </div>
            </div>
          </Layout>
        </div>
    )
}
