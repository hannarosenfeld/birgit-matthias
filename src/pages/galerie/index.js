import React from 'react'

import Layout from '../../components/layout/Layout'
import Galerie from '../../components/galerie/Galerie'

export default function GaleriePage() {
  return (
    <Layout>
      <div style={{ width: '88%', margin: '2.5em auto 0 auto' }}>
        <Galerie />
      </div>
    </Layout>
  )
}
