import React from 'react'

import { background, textStyle } from './banner.module.css'
import '../../style/global.css'

const content = (
  <>
    <p>
      Ich arbeite hauptsächlich abstrakt mit Acryl auf Leinwand. Die Formate
      sind in der Regel groß gewählt.
    </p>
    <p>
      Abstrakte Malerei ist für mich Komponieren und Erfinden, Verwenden und
      Verfremden bekannter Seh- und Malweisen, Spielen mit Impulsen, die bei dem
      Malprozess entstehen und Schaffen neuer Realitäten – vielleicht
      vergleichbar mit der Komposition von Musik, nur mit Farbe und Form.
    </p>
    <p>
      Den Begriff der „halbabstrakten Malerei“ habe ich kreiert, um den Stil
      meiner Bilder zu definieren.
    </p>
    <p>
      Vordergründig abstrakte Bilder erhalten eine zusätzliche Ebene, indem sie
      konkrete Inhalte erahnen lassen.
    </p>
    <p>
      Mir geht es um die tiefe Schönheit der Welt, der Menschen und der Natur,
      diese zu ergründen und mit Farben sichtbar zu machen.
    </p>
  </>
)

export default function Banner() {
  return (
    <div className={background}>
      <div className="column-inner">
        <div className={textStyle}>{content}</div>
      </div>
    </div>
  )
}
