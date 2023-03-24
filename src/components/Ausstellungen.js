import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
                        width: "100%",
                        background: "#FDA1C9",
                        minHeight: "95vh",
                        padding: "2em 0"
                    }}>
                    <div
                      style={{
                          width: "65vw",
                          margin: "0 auto",
                      }}
                    >
                      <h4
                        style={{
                            color: "white",
                            borderBottom: "1px solid white",
                            paddingBottom: "2px",
                            marginLeft: "3em",
                            letterSpacing: "0.1em",
                            width: "8em"
                        }}>Ausstellungen</h4>
                      <div
                        id="ausstellungen-container"
                        style={{
                            padding: "3em 0",
                            display: "flex"
                        }}
                      >
                        <img
                          style={{
                              width: "18em",
                          }}
                          src={a}/>

                        <div
                          style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between"
                          }}
                        >
                          <div
                            style={{
                                padding: "0 3em",
                                margin: "1em 0"
                            }}>
                            <p className="mt-3">Einzelausstellungen</p>
                            <div>
                              {ausstellungen.map(e => (
                                  <p><span style={{marginRight: "1em"}}>{e.zeitraum}</span> <span>{e.lokation}</span></p>
                              ))}
                            </div>
                          </div>
                          <div
                            style={{
                                padding: "0 3em",
                                margin: "1em 0"
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
                    </div>
                  </div>

              )
          }}
        />
    )

}
