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
              className="artwork-container d-flex mt-5"
              style={{
                  margin: "0",
                  padding: "0",
                  width: "100%",
                  margin: "auto",
              }}
            >
              <div
                id="artwork-image-container"
                className="d-flex"
                style={{width: "84%"}}
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
                <div className="mb-1">{artwork.width} cm x {artwork.height} cm</div>
                <div>{artwork.date}</div>
              </div>
            </div>
          </Layout>
        </div>
    )
}
