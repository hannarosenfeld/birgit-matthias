import React from 'react'
import { titleSection } from './headerSection.module.css'

export default function HeaderSection({ title }) {
  return (
    <div className={titleSection}>
      <h4>{title}</h4>
    </div>
  )
}
