exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
      allContentfulGalerieMenu {
        nodes {
          bilder {
            image {
              gatsbyImageData
            }
            title {
              title
            }
            slug
            kunstwerke {
              title
              slug
              date
              width
              height
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    `)
    data.allContentfulGalerieMenu.nodes.forEach(node => {
        node.bilder.map(bild =>{
            const slug = bild.slug
            actions.createPage({
                path: `galerie/${slug}`,
                component: require.resolve(`./src/templates/galerie.js`),
                context: {
                    slug: slug,
                    category: bild
                },
            })
            bild.kunstwerke.map(werk => {
                actions.createPage({
                    path: `galerie/${slug}/${werk.slug}`,
                    component: require.resolve(`./src/templates/artwork.js`),
                    context: {
                        artwork: werk
                    },
                })
            })
        })
    })
}
