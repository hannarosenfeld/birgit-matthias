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
              }}
            >
              <div
                id="artwork-image-container"
                className="d-flex mt-3"
                style={{width: "84%"}}
              >
                <GatsbyImage
                  image={image}
                />
              </div>
              <div
                id="artwork-description"
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
