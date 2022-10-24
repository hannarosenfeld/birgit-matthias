import React from "react"
import { StaticQuery, graphql } from "gatsby"


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
                            <div>{rubrik.bilder.map(bild => (
                                <div>{bild.title}</div>
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
