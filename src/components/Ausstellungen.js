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
                          border: "2px solid yellow",
                          display: "grid",
                          gridTemplateColumns: "12em 2em",
                          gridTemplateRows: "1fr 4fr 3fr",
                      }}
                    >
                      <div
                        style={{
                            border: "2px solid blue",
                            gridColumn: "1/4",
                            marginTop: "1.5em",
                        }}>
                  <h4 style={{color: "#f7efef", marginLeft: "1em", textDecoration: "underline"}}>Ausstellungen</h4>
                      </div>
                      <div
                        style={{
                            border: "2px solid white",
                            gridRow: "2/4",

                        }}>
                      </div>
                      <div
                        style={{
                            border: "2px solid beige",
                            gridColumn: "2/4",
                            gridRow: "2/4",
                            padding: "3em",
                        }}
                      >
                        <div>
                          <p>Einzelausstellungen</p>
                          <div>
                            {ausstellungen.map(e => (
                                <p><span style={{marginRight: "1em"}}>{e.zeitraum}</span> <span>{e.lokation}</span></p>
                            ))}
                          </div>
                        </div>
                        <div style={{marginTop: "3em"}}>
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
              )
          }}
        />
    )

}
