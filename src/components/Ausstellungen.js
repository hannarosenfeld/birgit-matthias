import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import a from "../images/a.png"

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
              const ausstellungen = data.allContentfulAusstellung.nodes
              return(
                  <div
                    id="ausstellungen"
                    style={{
                        width: "156.8%",
                        padding: "0 28.4%",
                        margin: "0 0 0 -28.4%",
                        background: "#FDA1C9",
                    }}>
                    <div
                      style={{
                          display: "grid",
                          gridTemplateColumns: "14em 2em",
                          gridTemplateRows: "1fr 4fr 3fr",
                      }}
                    >
                      <div
                        style={{
                            gridColumn: "1/4",
                            marginTop: "1.5em",
                        }}>
                        <h4
                          style={{
                              color: "#f7efef",
                              marginLeft: "1em",
                              borderBottom: "1px solid #f7efef",
                              paddingBottom: "2px",
                              marginLeft: "3em",
                              letterSpacing: "0.1em",
                              width: "8em"
                          }}>Ausstellungen</h4>
                      </div>
                      <div
                        style={{
                            gridRow: "2/4",
                            gridColumn: "1/3",
                            padding: "3em 0"

                        }}>
                        <img style={{width: "100%"}} src={a}/>
                      </div>
                      <div
                        id="einzelaustellungen"
                        style={{
                            gridColumn: "3/4",
                            gridRow: "2/4",
                            padding: "3em",
                        }}
                      >
                          <p>Einzelausstellungen</p>
                          <div>
                            {ausstellungen.map(e => (
                                <p><span style={{marginRight: "1em"}}>{e.zeitraum}</span> <span>{e.lokation}</span></p>
                            ))}
                          </div>
                        </div>
                        <div
                          id="ausstellungsbeteiligungen"
                          style={{
                              gridColumn: "3/4",
                              gridRow: "3/4",
                              padding: "0 3em",
                          }}>
                          <p>Ausstellungsbeteiligungen</p>
                          <div>
                            Mal- und Zeichenschule Weimar: In den Werkschauen, Ausleihungen an fördernde
                            Unternehmen wie Grafe, Blankenhain und Bayer AG, Weimar, Thüringer Landtag,
                            Gruppenausstellungen mit dem Malkurs Roger Bonnard im Erbenhof, Weimar und
                            Seebachstift, Weimar
                          </div>
                        </div>
                      </div>
                    </div>

              )
          }}
        />
    )

}
