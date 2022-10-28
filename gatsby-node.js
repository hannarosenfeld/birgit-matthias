exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query {
      allContentfulGalerieMenu {
        nodes {
          bilder {
            title {
              title
            }
            slug
          werke {
            title
            gatsbyImageData(width: 250)
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
        })
    })
}
