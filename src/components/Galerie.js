import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from "gbimage-bridge"

const galerieStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

}
const bildbox = {
    marginBottom: "2em",
    height: "20vw",
    width: "20vw",
    overflow: "hidden"
}
const centeredText = {

    Color: "#E42B9E",
    textShadow: "1px 1px #000123"

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
                                      <GatsbyImage
                                        image={image}
                                        style={{width: "150%"}}
                                      />
                                        <div style={centeredText}>{bild.title}</div>

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
