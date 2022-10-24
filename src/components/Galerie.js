import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from "gbimage-bridge"

const galerieStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    zIndex: "0"
}
const bildbox = {
    marginBottom: "2em",
    height: "20vw",
    width: "20vw",
    overflow: "hidden",
    position: "relative",
    textAlign: "center"
}
const centeredText = {
    color: "#E42B9E",
    textShadow: "1px 1px #000123",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9"

}
export default function Galerie() {
    return(
        <StaticQuery
          query={graphql`
          query GalerieQuery {
            allContentfulGalerieMenu {
              nodes {
                bilder {
                  title
                  gatsbyImageData(width: 620)

                }
              }
            }
          }
       `}
          render={data => {
              const rubriken = data.allContentfulGalerieMenu

              return(
                  <div style={{ width: "100%", heigth: "45vw"}}>
                    {rubriken.nodes.map(rubrik => {
                        return(
                            <div style={galerieStyle} id="galerie-list">
                              {rubrik.bilder.map(bild => {
                                  const image = getImage(bild.gatsbyImageData)
                                  console.log(bild)
                                  return(
                                      <div style={bildbox} className="galerie-list-box">
                                        <div style={centeredText}>{bild.title}</div>
                                        <GatsbyImage
                                          image={image}
                                          style={{width: "150%"}}
                                        />


                                      </div>
                                  )
                              }
                                                )}</div>
                        )

                    })}
                  </div>
              )
          }

                 }
        />
    )
}
