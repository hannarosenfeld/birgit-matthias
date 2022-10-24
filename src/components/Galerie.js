import React from "react"
import { StaticQuery, graphql } from "gatsby"

const galerieStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
}
const bildbox = {
    border: "2px solid",
    width: "19vw",
    height: "19vw",
    marginBottom: "2em"
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
                }
              }
            }
          }
       `}
          render={data => {
              const rubriken = data.allContentfulGalerieMenu

              return(
                  <div style={{border: "2px solid blue", width: "100%", heigth: "45vw"}}>
                    {rubriken.nodes.map(rubrik => {
                        return(
                            <div style={galerieStyle} id="galerie-list">
                              {rubrik.bilder.map(bild => (
                                  <div style={bildbox} className="galerie-list-box">
                                  <div style={{width: "100%"}}>
                                      <div className="centered" style={{fontSize: "85%"}}>{bild.title}</div>
                                    </div>
                                  </div>
                        )
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
