import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"

export default function ArtWork({ pageContext }) {
    const { artwork } = pageContext
    const image = getImage(artwork.image.gatsbyImageData)

    return(
        <div
          id="artwork-detail-view"
        >
          <Layout>
            <div
              className="artwork-container d-flex mt-5"
              style={{
                  margin: "0",
                  padding: "0",
                  width: "100%",
              }}
            >
              <div
                id="artwork-image-container"
                className="d-flex"
                style={{maxWidth: "82%", maxHeight: "45em"}}
              >
                <GatsbyImage
                  image={image}
                />
              </div>
              <div
                id="artwork-description"
                style={{
                    margin: "0 2em",
                }}
              >
                <h5 className="mb-3">{artwork.title}</h5>
                <p className="mb-1">{artwork.dimension}</p>
                <p>{artwork.type}</p>
                <p>{artwork.date}</p>
              </div>
            </div>
          </Layout>
        </div>
    )
}
