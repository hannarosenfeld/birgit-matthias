import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Ausstellungen() {
    return(
        <StaticQuery
          query={graphql`
          query AustellungQuery {
            allContentfulAusstellung {
              nodes {
                zeitraum
                lokation
              }
            }
          }
       `}
          render={data => {
              const austellungen = data.allContentfulAusstellung.nodes
              return(
                  <div
                    id="ausstellungen"
                    style={{
                        width: "156.8%",
                        padding: "0 28.4%",
                        margin: "0 0 0 -28.4%",
                        background: "#FDA1C9"
                    }}>
                    <div
                      style={{
                          border: "2px solid yellow",
                          display: "grid",
                          gridTemplateColumns: "12em 2em",
                          gridTemplateRows: "1fr 4fr 3fr"
                      }}
                    >
                      <div
                        style={{
                            border: "2px solid blue",
                        }}>
                        Ausstellungen
                      </div>
                      <div
                        style={{
                            border: "2px solid white",
                            gridRow: "2/4"

                        }}>
                      </div>
                      <div
                        style={{
                            border: "2px solid beige",
                            gridColumn: "2/4"
                        }}
                      >

                      </div>
                    </div>
                  </div>
              )
          }}
        />
    )

}
