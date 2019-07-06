const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const issueTemplate = path.resolve('src/templates/issueTemplate.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/issue/${
          node.fileAbsolutePath.substring(
            (`${__dirname}/src/issues/`).length,
            node.fileAbsolutePath.length - path.extname(node.fileAbsolutePath).length
          )
        }`,
        component: issueTemplate,
        context: {
          fileAbsolutePath: node.fileAbsolutePath
        }
      })
    })
  })
}